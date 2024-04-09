import express from "express";
import User from "../models/User.js";
import connectToMongo from "../index.js";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToke.js";
// import next from "../index.js";

const router = express.Router();

router.get("/checkauth", verifyToken, (req, res) => {
    res.send("auth successful");
  });

//UPDATE EXISTING User
router.put("/:id", async (req, res) => {
  updateUser(req, res);
});

//DELETING EXISTING User
router.delete("/:id", async (req, res) => {
  deleteUser(req, res);
});

//GET ALL UserS
router.get("/", async (req, res) => {
  getAllUsers(req, res);
});

//GET SPECIFIC UserS
router.get("/:id", async (req, res) => {
  getUser(req, res);
});
export default router;
