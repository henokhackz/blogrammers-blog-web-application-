import cors from "cors";
import "dotenv/config";
import express from "express";
import connectedDB from "./db/db.mjs";
import userRouter from "./routes/userRoutes.mjs";
import blogRouter from "./routes/blogRoutes.mjs";

const app = express();
// connect to database

connectedDB();

//middleware
app.use(express.json());
app.use(cors());

// routes

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` server running on port :  ${PORT}`);
});
