const express = require("express");

const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("inside the connectDataBase function");
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
      // console.log(`Mongodb connected with server`);
    })
    .catch((err) => {
      console.log("Error in DB Connection", err);
    });
};

module.exports = connectDatabase;
