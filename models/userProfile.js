import mongoose from "mongoose";

const jobProfileSchema = new mongoose.Schema({
  personalDetails: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  jobDetails: {
    jobTitle: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    graduationYear: {
      type: Number,
      required: true,
    },
  },
  resume: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userProfileModel = mongoose.model("userProfileModel", jobProfileSchema);
export {userProfileModel};

