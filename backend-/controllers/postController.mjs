import mongoose from "mongoose";
import Post from "../models/Post.mjs";
import User from "../models/User.mjs";

const getAllBlogsFromDB = async (req, res, next) => {
  let existingBlogs;
  try {
    existingBlogs = await Post.find();
  } catch (error) {
    console.log(error);
  }
  if (!existingBlogs) {
    return res.status(404).json({ message: "post Not Found" });
  }

  return res.status(200).json({ message: `Post ${existingBlogs}` });
};

const addBlog = async (req, res, next) => {
  const { title, description, image, userId } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(userId);
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "User Not Found" });
  }
  const blog = new Post({
    title,
    description,
    image,
    userId,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save(session);
    console.log(existingUser, "updated");
    existingUser.blogs.push(blog);
    await session.commitTransaction();
    return res.status(201).json({ message: "Post created successfully", blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to create post" });
  }
  return res.status(201).json({ message: "Post created successfully", blog });
};

const updateBlog = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  let blog;
  try {
    blog = await Post.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
  }

  if (!blog) {
    return res.status(404).json({ message: "post Not Found" });
  }

  return res.status(200).json({ message: "post updated successfully " });
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  let blog;
  try {
    blog = await Post.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "post Not Found" });
  }
  return res.status(200).json({ message: `Post ${blog}` });
};

const deleteBlog = async (req, res, next) => {
  const { id } = req.params;
  let blog;
  try {
    blog = await Post.findByIdAndDelete(id).populate("User");
    await blog.userId.blogs.pull(blog);
    await blog.userId.save();
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "post Not Found" });
  }
  return res.status(200).json({ message: "post deleted successfully" });
};

const getBlogsByUserId = async (req, res, next) => {
  const { userId } = req.params;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("Post");
  } catch (error) {
    console.log(error);
  }
  if (!userBlogs) {
    return res.status(404).json({ message: "User blogs Not Found" });
  }
  return res.status(200).json({ message: `Blogs by User ${user.blogs}` });
};
export {
  addBlog,
  deleteBlog,
  getAllBlogsFromDB,
  getById,
  updateBlog,
  getBlogsByUserId,
};
