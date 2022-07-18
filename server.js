//Dependencies
const fs = require("fs");
const express = require("express");
const notes = require("./Develop/db/db.json");
const path = require("path");
const SaveId = require("uniqid");
/////////////////////////////////
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("Develop/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get Routes for home/notes

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/index.html"))
);
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
);
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/db/db.json"));
});
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
app.get("/api/notes/:id", (req, res) => {
  const index = req.params.id;
  res.json(notes[index]);
});
// post route

//Delete route
