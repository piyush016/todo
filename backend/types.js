const zod = require("zod");

const createTodo = zod.object({
  title: zod.string().min(3),
  description: zod.string().min(3),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
