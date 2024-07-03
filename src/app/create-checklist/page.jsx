"use client";
import { useState } from "react";
import router from "next/navigation";

function CreateChecklist() {
  const [checklistName, setChecklistName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://94.74.86.174:8080/api/checklist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: checklistName }),
      });
      if (!response.ok) {
        throw new Error("Failed to create checklist");
      }
      router.push("/checklists");
    } catch (error) {
      console.error("Error creating checklist:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Checklist</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <label className="block mb-2">
          <span className="text-gray-700">Checklist Name:</span>
          <input
            type="text"
            value={checklistName}
            onChange={(e) => setChecklistName(e.target.value)}
            required
            className="form-input mt-1 block w-full"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Create Checklist
        </button>
      </form>
    </div>
  );
}

export default CreateChecklist;
