import { Router } from "express";
import {
  getAllBlogsFromDB,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
  getBlogsByUserId,
} from "../controllers/postController.mjs";

const blogRouter = new Router();

blogRouter.get("/", getAllBlogsFromDB);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.get("user/:id", getBlogsByUserId);
blogRouter.get("/delete/:id", deleteBlog);

export default blogRouter;
