import express from "express";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", (req, res) => {
  register(req, res);
});
router.get("/login", (req, res) => {
  login(req, res);
});

export default router;
