const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect("mongodb+srv://mihikaparmar:IszkWMpiHWDaBDuM@cluster0.jipx8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
