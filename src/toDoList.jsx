import React from "react";
import TodoItem from "./toDoItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}