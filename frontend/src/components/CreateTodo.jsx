import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    await fetch("https://todo-5grb.onrender.com/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function () {
        alert("Todo Added");
        // Optionally clear input fields after adding todo
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl'>
      <h1 className='text-2xl font-bold mb-4'>Create Todo</h1>
      <input
        className='w-full mb-2 px-3 py-2 border rounded-md'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <br />
      <input
        className='w-full mb-2 px-3 py-2 border rounded-md'
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
      />
      <br />
      <button
        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
    </div>
  );
}
