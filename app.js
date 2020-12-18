const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors());

app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./Routes/posts");

app.use("/posts", postsRoute);

//ROUTES

app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to Database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);
//how to do we listening to the server

app.listen(3000);
