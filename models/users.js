import mongoose from "mongoose";
import { userProfileModel } from "./userProfile.js";

mongoose.connect(`mongodb://localhost:27017/yourHR`);

const users = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("userModel", users);
export { userModel };
