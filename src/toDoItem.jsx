import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
        border: "1px solid #e3c8c8ff",
        padding: "5px 15px",
        borderRadius: "5px",
      }}
    >
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}