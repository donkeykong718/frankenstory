import "dotenv/config";
import mongoose from 'mongoose'
import Stories from '../models/Story.js'
import storyData from '../stories.json' assert {type: 'json'};
import Users from '../models/User.js'
import userData from '../users.json' assert {type: 'json'};

mongoose.connect('mongodb://127.0.0.1:27017/frankenstory')
mongoose.set('strictQuery', false);
await seed();
await mongoose.disconnect();

async function seed() {
  // await Stories.remove({});
  await Stories.insertMany(storyData);
  // await Users.remove({});
  await Users.insertMany(userData);

}