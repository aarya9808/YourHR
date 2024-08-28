import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import path from "path";
import multer from "multer";
import upload from "./middleware.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


import authRoutes from "./controllers/authRoutes.js";

app.use(express.static(path.join(__dirname, "views")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
app.get("/createProfile", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "userProfile.html"));
});

app.get("/thanku", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "final.html"));
});


app.use("/",authRoutes);

app.listen(3000);
