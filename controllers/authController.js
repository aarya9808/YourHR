import { userModel } from "../models/users.js";
import bcrypt from "bcrypt";
import upload from "../middleware.js";
import { userProfileModel } from "../models/userProfile.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  let { name, email, password, contact } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    res.send("User already exists!");
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        const createdUser = await userModel.create({
          name,
          email,
          password: hash,
          contact,
        });
      });
    });
     res.redirect("/login");
  }
};

export const login = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("The user with given email does not exist");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email: user.email }, "shhhhhh");
      res.cookie("token", token);
      res.redirect("/createProfile");
    } else res.send("something went wrong!");
  });
};
export const createProfile = [
  upload.single("resume"),
  async (req, res) => {
    try {
      const profileData = {
        personalDetails: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
        },
        jobDetails: {
          jobTitle: req.body.jobTitle,
          experience: Number(req.body.experience),
          skills: (req.body.skills || "").split(","),
          graduationYear: Number(req.body.graduationYear),
        },
        resume: req.file.id,
      };

      const newProfile = new userProfileModel(profileData);
      await newProfile.save();
      res.redirect('/thanku');
      res.status(200).send({ message: "Profile created successfully" });
    } catch (error) {
      console.error("Error creating profile:", error);
      res.status(400).send({ error: "Some error message" });
    }
  },
];
