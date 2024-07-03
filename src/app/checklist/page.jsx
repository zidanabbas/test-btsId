"use client";
import React, { useEffect, useState } from "react";
import Checklist from "@/components/fragments/Checklist";
export default function ChecklistPage() {
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    fetchChecklists();
  }, []);

  const fetchChecklists = async () => {
    try {
      const response = await fetch("http://94.74.86.174:8080/api/checklist");
      if (!response.ok) {
        throw new Error("Failed to fetch checklists");
      }
      const data = await response.json();
      setChecklists(data);
    } catch (error) {
      console.error("Error fetching checklists:", error);
    }
  };

  const handleDeleteChecklist = (deletedId) => {
    setChecklists(checklists.filter((checklist) => checklist.id !== deletedId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">List of Checklists</h1>
      <div className="grid gap-4">
        {checklists.map((checklist) => (
          <Checklist
            key={checklist.id}
            checklist={checklist}
            onDelete={() => handleDeleteChecklist(checklist.id)}
          />
        ))}
      </div>
    </div>
  );
}
