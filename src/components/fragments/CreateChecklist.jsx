import React, { useState } from "react";

export default function CreateChecklist() {
  const [checklistName, setChecklistName] = useState("");
  const [creationStatus, setCreationStatus] = useState(null);

  const handleCreateChecklist = async () => {
    try {
      const response = await fetch(
        "http://94.74.86.174:8080/api/v2/checklist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: checklistName }),
        }
      );

      if (response.ok) {
        setCreationStatus("success");
      } else {
        throw new Error("Failed to create checklist");
      }
    } catch (error) {
      console.error(error.message);
      setCreationStatus("failed");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={checklistName}
        onChange={(e) => setChecklistName(e.target.value)}
      />
      <button onClick={handleCreateChecklist}>Create Checklist</button>
      {creationStatus && <p>{creationStatus}</p>}
    </div>
  );
}
