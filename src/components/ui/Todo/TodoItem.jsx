import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 mb-2 rounded">
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="text-red-500" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}
