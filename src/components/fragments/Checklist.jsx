import React from "react";
export default function Checklist({ checklist, onDelete }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://94.74.86.174:8080/api/checklist/${checklist.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete checklist");
      }
      onDelete(checklist.id);
    } catch (error) {
      console.error("Error deleting checklist:", error);
    }
  };
  return (
    <div className="bg-gray-200 rounded p-4 mb-4">
      <h3 className="text-lg font-bold">{checklist.name}</h3>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2"
      >
        Delete
      </button>
    </div>
  );
}
