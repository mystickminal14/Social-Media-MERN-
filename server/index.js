const express = require('express');
const dotenv = require('dotenv');
const { app } = require('./app');
const  connectDb  = require('./src/db/connection'); 

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT 

connectDb()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Internal Server Error", err);
    process.exit(1);
  });
