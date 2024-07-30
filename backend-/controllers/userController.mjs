import bcrypt from "bcrypt";
import User from "../models/User.mjs";

export const getAllUsersFromDB = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }

  if (!users) {
    return res.status(404).json({ message: "users not found " });
  } else {
    res.status(200).json({ users });
  }
};
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "user already exists! login enstead" });
  }

  // encript  user passowrd
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
  return res
    .status(201)
    .json({ message: `congratulation ${user} just signup sucessfully ` });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "sorry we couldnt find a user by this email address " });
  }
  console.log(password, existingUser.password);
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "password incorrect " });
  }
  return res.status(200).json({ message: "logged in succesfully" });
};
