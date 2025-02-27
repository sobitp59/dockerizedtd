"use client";
import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className='' style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      {/* <h1>To-Do List</h1> */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task"
          />
          <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}