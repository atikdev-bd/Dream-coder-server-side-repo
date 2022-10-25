const express = require("express");
const app = express();
const cors = require("cors");


const port = process.env.PORT || 4000;

app.use(cors());

const Courses = require("./data/data.json");