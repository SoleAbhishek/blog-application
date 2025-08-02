import mongoose from "mongoose";
import { createHmac, randomBytes } from "crypto";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    //   required: true,
    },
    profilePicture: {
      type: String,
      default: "/public/images/default.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const salt = randomBytes(16).toString("hex");
// this is called salt and pepper hashing, where salt is a random string generated for each password to hash the password and then the password in the DB is updated with the hashed password generated with the salt.
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

    this.salt = salt;
    this.password = hashedPassword;
    next();
});

export const User = mongoose.model("user", userSchema);
