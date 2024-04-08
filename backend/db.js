// import { MongoClient } from "mongodb";
// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// async function connectToMongo() {
//   const uri =
//     "mongodb+srv://technicalpurush:juarez2004@regalcluster.khkixh0.mongodb.net/?retryWrites=true&w=majority&appName=regalCluster";

//   const client = new MongoClient(uri);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
//     console.log("Successfully connected to MongoDB")

//     // Make the appropriate DB calls
//     await listDatabases(client);
//   } catch (e) {
//     console.error("Error connecting to Mongo: " + e);
//   }
// }
// connectToMongo();