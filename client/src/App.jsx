import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // <-- important

const API_URL = "http://localhost:5000/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post(API_URL, { text });
    setText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  return (
    <div className="container">
      <h1 className="title">📝 To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            {todo.text}
            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
