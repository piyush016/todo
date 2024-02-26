import React from "react";

export function Todos({ todos, markTodoCompleted }) {
  const handleCompleteClick = async (id) => {
    try {
      await markTodoCompleted(id);
    } catch (error) {
      console.error("Error marking todo as completed:", error);
    }
  };

  return (
    <div className='max-w-lg mx-auto mt-8'>
      <h1 className='text-3xl font-semibold mb-4'> Todos</h1>
      {todos.map(function (todo) {
        return (
          <div
            key={todo._id}
            className='border rounded-md p-4 mb-4 flex items-center justify-between'
          >
            <div>
              <h3 className='text-xl font-semibold'>{todo.title}</h3>
              <p className='text-gray-600'>{todo.description}</p>
            </div>
            <button
              className={`px-4 py-2 rounded ${
                todo.completed
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleCompleteClick(todo._id)}
            >
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
