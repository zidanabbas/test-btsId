import React from "react";

export default function CreateChecklist() {
  const [checklistName, setChecklistName] = useState("");

  const handleCreateChecklist = async () => {
    const response = await fetch("http://94.74.86.174:8080/api/v2/checklist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: checklistName }),
    });

    if (response.ok) {
      setChecklistName("success");
    } else {
      console.error("Failed to create checklist");
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
    </div>
  );
}
