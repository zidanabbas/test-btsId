"use client";
import React, { useState } from "react";

export default function ChecklistItem() {
  const [itemName, setItemName] = useState(item.name);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://94.74.86.174:8080/api/checklist/${item.checklistId}/item/${item.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: itemName }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update checklist item");
      }
      onUpdate();
    } catch (error) {
      console.error("Error updating checklist item:", error);
    }
  };
  return (
    <div
      className={`flex items-center justify-between bg-gray-200 rounded p-4 mb-4 ${
        item.completed ? "bg-green-200" : ""
      }`}
    >
      <span className={`text-lg ${item.completed ? "line-through" : ""}`}>
        {item.name}
      </span>
      <button
        onClick={handleStatusChange}
        className={`text-sm px-3 py-1 rounded ${
          item.completed
            ? "bg-green-500 hover:bg-green-700 text-white"
            : "bg-gray-500 hover:bg-gray-700 text-white"
        }`}
      >
        {item.completed ? "Completed" : "Mark Complete"}
      </button>
    </div>
  );
}
