import "dotenv/config";
import "../db/connection.js";
import express from "express";
import mongoose from 'mongoose'
import logger from "morgan";
import cors from "cors";
import storyRouter from "../routes/story.js";
import userRouter from "../routes/users.js";
// import authRouter from "./routes/auth.js";
// import router from "./routes/router.js"

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use("/api/story", storyRouter);
app.use("/api/user", userRouter);
// app.use("/api/auth/", authRouter);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;
