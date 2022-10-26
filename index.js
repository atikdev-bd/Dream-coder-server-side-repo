const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 4000;

app.use(cors());

const Courses = require("./data/data.json");

app.get("/courses", (req, res) => {
  res.send(Courses);
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(typeof id);
  const singleCourse = Courses.find((c) => c.id === id);
  res.send(singleCourse);
});

app.get("/check/:id", (req, res)=>{
  const id = parseInt(req.params.id);
  const singleCourse = Courses.find((c) => c.id === id);
  res.send(singleCourse);
})

app.get("/", (req, res) => {
  res.send("<h1>api is running</h1>");
});

app.listen(port, () => {
  console.log("server is running  :", port);
});



module.exports = app;
