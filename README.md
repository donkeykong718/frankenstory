## Frankenstory-

# Drawing Schema

```
import mongoose from "mongoose";

const frameSchema = new mongoose.Schema({
  text: { type: String },
  img: { type: String },
  prompt: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  inProgress: { type: Boolean, default: true }
});

const drawingSchema = new mongoose.Schema({
  frames: [frameSchema, frameSchema, frameSchema, frameSchema],
  completed: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;
```

# User Schema

```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  drawings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drawing' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```
