const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/Tickets";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to database");

    // Example code to fetch and log data from a collection (optional)
    const fetched_data = await mongoose.connection.db
      .collection("Tickets")
      .find({})
      .toArray();
    console.log(fetched_data);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = mongoDB;
