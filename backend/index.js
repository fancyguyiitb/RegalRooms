import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import authRoutes from "./routes/auth.js";
import roomRoutes from "./routes/rooms.js";
import hotelRoutes from "./routes/hotels.js";
import userRoutes from "./routes/users.js";
import mongoose from "mongoose";
import cookieParser  from "cookie-parser";

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function connectToMongo() {
  // const uri =
  //   "mongodb+srv://technicalpurush:juarez2004@regalcluster.khkixh0.mongodb.net/regalRooms?retryWrites=true&w=majority&appName=regalCluster";
  const uri = "mongodb://localhost:27017/";

  const client = new MongoClient(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  });

  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");

    // Make the appropriate DB calls
    // await listDatabases(client);
  } catch (e) {
    console.error("Error connecting to Mongo: " + e);
  }
}
connectToMongo();

const app = express();
// dotenv.config();
// console.log(process.env.MONGO_URL);

const port = 8000;

//MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use((err, req, res, next) => {
  return res.status(500).json("Error occurred!" + err);
});

//middlewares
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default connectToMongo;
