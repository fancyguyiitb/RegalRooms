import Hotel from "../models/Hotel.js";
import connectToMongo from "../index.js";

export const createHotel = async (req, res) => {
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

    res.status(200).json(savedHotel);
    console.log(savedHotel);
  } catch (error) {
    // next(error);
    res.status(500).json(error);
  }
};

export const updateHotel = async (req, res) => {
  try {
    await connectToMongo();

    //creating the new user
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
    console.log(updatedHotel);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const deleteHotel = async (req, res) => {
  try {
    await connectToMongo();

    //creating the new user
    const hotelToDelete = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(hotelToDelete);
    console.log(hotelToDelete);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export const getAllHotels = async (req, res) => {
  try {
    await connectToMongo();

    //creating the new user
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
    console.log(allHotels);
  } catch (error) {
    res.status(500);
    console.log(error);
    // next(error);
  }
};

export const getHotel = async (req, res) => {
    try {
      await connectToMongo();
  
      //creating the new user
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
      console.log(hotel);
    } catch (error) {
      res.status(500);
      console.log(error);
      // next(error);
    }
  };
