// რაღაცეები დავგუგლე რადგან არ მახსოვდა და დანარჩენი ავაწყე წინა ლექციებიდან 
// გამომდინარე + გავითვალისწინე შენი ნათქვამი კომიტებზე და გითჰაბზე + ვიწერდი 
// ლექციას და რასაც წერდი მაქიდან გამომდინარე დავწერე.

import { useState } from 'react'
import './App.css'
import TodoList from "./toDoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const AddTodo = () => {
    if (input.trim() === "") return;
    if (todos.length >= 5) {
      alert("მაქსიმუმ შეგიძლია 5 ToDo შეიყვანო");
      return;
    }
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const DeleteTodo = (index) => {
  setTodos(todos.filter((todoItem, todoIndex) => todoIndex !== index));  
};

  return (
    <div style={{ padding: "40px", 
                  maxWidth: "400px", 
                  margin: "auto",
                  marginTop:"20px",
                  display:"flex",
                  flexDirection:"column", 
                  justifyContent:"center"}}>
      <h1>Todo List Lite</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ჩაწერე შენი გეგმა..."
      />
      <button onClick={AddTodo}>Add Todo</button>

      {todos.length === 0 ? (
        <p>არაფერი გაქვთ დაგეგმილი</p>
      ) : (
        <TodoList todos={todos} onDelete={DeleteTodo} />
      )}
    </div>
  );
}


