import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../../config/config.js";

// SIGNUP
const signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    user.hashed_password = undefined;
    user.salt = undefined;

    return res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (err) {
    return res.status(400).json({ error: "Email is already taken" });
  }
};

// SIGNIN
const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).json({ error: "User not found" });

    if (!user.authenticate(req.body.password))
      return res.status(401).json({ error: "Email and password do not match" });

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      config.jwtSecret
    );

    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

// SIGNOUT
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signed out" });
};

// USER MUST BE LOGGED IN
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth"
});

// USER MUST BE ADMIN
const requireAdmin = (req, res, next) => {
  if (!req.auth || req.auth.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

export default { signup, signin, signout, requireSignin, requireAdmin };
