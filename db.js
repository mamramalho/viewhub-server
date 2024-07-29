const Mongoose = require("mongoose");

const username = encodeURIComponent("mamramalho");
const password = encodeURIComponent("ldWENu3oLr3Z6SfQ");
let localDB = `mongodb+srv://${username}:${password}@viewhub.cnejvth.mongodb.net/?retryWrites=true&w=majority&appName=viewhub`;

const connectDB = async () => {
  await Mongoose.connect(localDB)
  console.log("MongoDB Connected")
};

module.exports = connectDB;