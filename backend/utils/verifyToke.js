import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(401).send("You are not authenticated!");
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      res.status(403).send("Invalid token!");
    }
    req.user = user;
  });
};
