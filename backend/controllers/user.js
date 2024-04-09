import User from "../models/User.js";
import connectToMongo from "../index.js";

export const updateUser = async (req, res) => {
  try {
    await connectToMongo();

    //creating the new user
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await connectToMongo();

    //creating the new user
    const userToDelete = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(userToDelete);
    console.log(userToDelete);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    await connectToMongo();

    //creating the new user
    const allUsers = await User.find();
    res.status(200).json(allUsers);
    console.log(allUsers);
  } catch (error) {
    res.status(500);
    console.log(error);
    // next(error);
  }
};

export const getUser = async (req, res) => {
    try {
      await connectToMongo();
  
      //creating the new user
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
      console.log(user);
    } catch (error) {
      res.status(500);
      console.log(error);
      // next(error);
    }
  };
