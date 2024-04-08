import express from "express";
import Hotel from "../models/Hotel.js";
import connectToMongo from "../index.js";

const router = express.Router();

//CREATE NEW HOTEL
router.post("/newHotel", async (req, res)=>{
    
    try {
        await connectToMongo();

        //creating the new user
        let savedHotel = await Hotel.create({
        name: req.body.name,
        type: req.body.type,
        city: req.body.city,
        address: req.body.address,
        distance: req.body.distance,
        title: req.body.title,
        desc: req.body.desc,
        cheapestPrice: req.body.cheapestPrice,
      });

        // const newHotel = new Hotel(req.body);
        // const data = await Hotel(newHotel)
        // const savedHotel = await data.save();
        res.status(200).json(savedHotel);
        console.log(savedHotel);
    } catch (error) {
        res.status(500);
        console.log(error);
    }
})

export default router;