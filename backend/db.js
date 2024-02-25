const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://todo:todo@cluster0.bjp4b4n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = { todo };
