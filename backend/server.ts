import express from "express";

const app = express();

app.listen(3001);

app.get("/", (req, res) => {
  console.log("Hello There!");
  res.send("Hi!!!");
});
