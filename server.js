//Dependencies
const fs = require("fs");
const express = require("express");
const notes = require("./Develop/db/db.json");
const path = require("path");
const SaveId = require("uniqid");

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.static("Develop/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Get Routes for home/notes

// post route

//Delete route
