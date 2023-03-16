# Frankenstory

## Overview:

Frankstory is a collaborative story-telling game in the "exquisite corpse" style, with users creating a piece of a story based on only a limited knowledge of what came before. In our version, users will alternate between text and illustration, either writing a few lines based on the previous user's picture, or drawing a picture based on the previous user's text. The end result is an absurdist four-panel picture book reflecting the varied sensibilities and styles of its four contributors. Users will be able to begin their own stories, contibute to ongoing stories created by others, look back at their past contibutions, or view a gallery of completed projects. 

## MVP: 

Link to Notion Board: https://www.notion.so/dbb5f835d2994af69a167987e78fc603?v=c26e23393ab94b5080a93af181441818

## Schemas

### Story Schema

const frameSchema = new mongoose.Schema({
  text: { type: String },
  img: { type: String },
  prompt: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  inProgress: { type: Boolean, default: true }
});

const storySchema = new mongoose.Schema({
  frames: [frameSchema, frameSchema, frameSchema, frameSchema],
  completed: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Story = mongoose.model('Story', storySchema);

### User Schema

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  drawings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drawing' }]
});

const User = mongoose.model('User', userSchema);


