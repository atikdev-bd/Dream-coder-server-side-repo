const express = require("express");
const app = express();
const cors = require("cors");


const port = process.env.PORT || 4000;

app.use(cors());

const Courses = require("./data/data.json");












app.listen(port, () => {
  console.log("server is running on port :", port);
});