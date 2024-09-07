const mongoose = require("mongoose");
const { DATABASE_NAME } = require("../../constant");

const connectDb = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DATABASE_NAME}`,
     
    );
    console.log(`MongoDB server connected successfully!! DB host: ${response.connection.host}`);
  } catch (error) {
    console.error("Internal Server Error", error);
    process.exit(1);
  }
};

module.exports = connectDb;
