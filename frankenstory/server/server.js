import "dotenv/config";
import "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import storyRouter from "./routes/story.js";
import userRouter from "./routes/users.js";
// import authRouter from "./routes/auth.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/api", storyRouter);
app.use("/api", userRouter);
// app.use("/api/auth/", authRouter);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
