import "dotenv/config";
// import "../db/connection.js";
import express from "express";
import mongoose from 'mongoose'
// import logger from "morgan";
// import cors from "cors";
import storyRouter from "./routes/story.js";
// import userRouter from "./routes/users.js";
// import authRouter from "./routes/auth.js";
// import router from "./routes/router.js"

const app = express();
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL)
const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// app.use(logger("dev"));

app.use('/', storyRouter);
// app.use("/api/auth/", authRouter);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;