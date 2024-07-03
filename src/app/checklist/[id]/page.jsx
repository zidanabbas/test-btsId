"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import path
export default function ChecklistDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [checklist, setChecklist] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      fetchChecklistDetail(id);
      fetchChecklistItems(id);
    }
  }, [id]);

  const fetchChecklistDetail = async (checklistId) => {
    try {
      const response = await fetch(
        `http://94.74.86.174:8080/api/checklist/${checklistId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch checklist detail");
      }
      const data = await response.json();
      setChecklist(data);
    } catch (error) {
      console.error("Error fetching checklist detail:", error);
    }
  };

  const fetchChecklistItems = async (checklistId) => {
    try {
      const response = await fetch(
        `http://94.74.86.174:8080/api/checklist/${checklistId}/item`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch checklist items");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching checklist items:", error);
    }
  };

  if (!checklist) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{checklist.name}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="bg-gray-200 rounded p-2 mb-2">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
