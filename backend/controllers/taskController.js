const Task = require("../models/task");

// AI priority logic
function calculatePriority(task) {
  let score = 0;

  const daysLeft =
    (new Date(task.deadline) - new Date()) / (1000 * 60 * 60 * 24);

  if (daysLeft <= 1) score += 3;
  else if (daysLeft <= 3) score += 2;
  else score += 1;

  if (task.importance === "high") score += 3;
  else if (task.importance === "medium") score += 2;
  else score += 1;

  if (daysLeft < 0) score += 5;

  return score;
}

// CREATE TASK
exports.createTask = async (req, res) => {
  const task = req.body;
  task.priorityScore = calculatePriority(task);

  const newTask = await Task.create(task);
  res.json(newTask);
};

// GET TASKS
exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ priorityScore: -1 });
  res.json(tasks);
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json("Deleted");
};