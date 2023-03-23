import "dotenv/config";
import mongoose from "mongoose";
import Story from "../models/Story.js";
import storyData from "../stories.json" assert { type: "json" };
import User from "../models/User.js";
import userData from "../users.json" assert { type: "json" };

mongoose.connect("mongodb://127.0.0.1:27017/frankenstory");
mongoose.set("strictQuery", false);
await seed();
await mongoose.disconnect();

async function seed() {
  await Story.deleteMany();
  await User.deleteMany();

  const someone = await User.create({
    username: "dumbass",
    hash: "asdf",
    email: "boomers123@gmail.com",
    password: "idontknow123",
    isVerified: true,
    drawings: [],
  });

  const data = [
    {
      prompt: "Dogs playing poker",
      completed: false,
      turn: 1,
      frames: [
        { text: "", img: "", user: someone },
        { text: "", img: "", user: someone },
        { text: "", img: "", user: someone },
        { text: "", img: "", user: someone },
      ],
    },
    {
      prompt: "Cats playing chess",
      completed: true,
      turn: 4,
      frames: [
        { text: "", img: "", user: someone },
        { text: "", img: "", user: someone },
        { text: "", img: "", user: someone },
        { text: "", img: "", user: someone },
      ],
    },
  ];

  // await Stories.remove({});
  // await Story.insertMany(storyData);
  await Story.insertMany(data);
  // await Users.remove({});
  await User.insertMany(userData);
}
