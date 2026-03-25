const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  deadline: Date,
  importance: String,
  completed: { type: Boolean, default: false },
  priorityScore: Number,
});

module.exports = mongoose.model("Task", taskSchema);