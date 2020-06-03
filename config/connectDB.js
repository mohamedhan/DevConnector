const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("MONGOURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true
    });
    console.log("mongodb connected ...");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
