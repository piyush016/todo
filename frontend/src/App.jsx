import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://todo-5grb.onrender.com/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const markTodoCompleted = async (id) => {
    try {
      console.log(id);
      const response = await fetch(`https://todo-5grb.onrender.com/completed`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to mark todo as completed");
      }
      // Update the todo status in the UI after marking it as completed
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: true } : todo
        )
      );
    } catch (error) {
      console.error("Error marking todo as completed:", error);
    }
  };

  return (
    <div className='App'>
      <CreateTodo />
      <Todos todos={todos} markTodoCompleted={markTodoCompleted} />
    </div>
  );
}

export default App;
