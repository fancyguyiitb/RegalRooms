import express from "express";
import Hotel from "../models/Hotel.js";
import connectToMongo from "../index.js";
import { createHotel, updateHotel, deleteHotel, getAllHotels, getHotel } from "../controllers/hotel.js";
// import next from "../index.js";

const router = express.Router();

//CREATE NEW HOTEL
router.post("/newHotel", (req, res) => {
  createHotel(req, res);
});

//UPDATE EXISTING HOTEL
router.put("/:id", async (req, res) => {
  updateHotel(req, res);
});

//DELETING EXISTING HOTEL
router.delete("/:id", async (req, res) => {
  deleteHotel(req, res);
});

//GET ALL HOTELS
router.get("/", async (req, res) => {
  getAllHotels(req, res);
});

//GET SPECIFIC HOTELS
router.get("/:id", async (req, res) => {
    getHotel(req, res);
  });
export default router;
