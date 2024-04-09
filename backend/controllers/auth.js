import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    //generating password salt and hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let userExists = false;
    if (username) {
      const user = await User.findOne({ username });
      if (user) {
        userExists = true;
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect) {
          const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
          );

          const { password, isAdmin, ...otherDetails } = user._doc;
          res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ ...otherDetails });
        } else {
          res.status(400).send("Wrong credentials");
        }
      }
    } else if (email) {
      const user = await User.findOne({ email });
      if (user) {
        userExists = true;
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect) {
          const { password, isAdmin, ...otherDetails } = user._doc;
          res.status(200).json({ ...otherDetails });
        } else {
          res.status(400).send("Wrong credentials");
        }
      }
    }
    if (!userExists) {
      res.status(404).send("User not found!");
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};
