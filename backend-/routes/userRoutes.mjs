import { Router } from "express";
import {
  getAllUsersFromDB,
  signup,
  login,
} from "../controllers/userController.mjs";

const userRouter = new Router();

// Define a GET route for the home page

userRouter.get("/", getAllUsersFromDB);
// router.post('/', createNewUser)
userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;
