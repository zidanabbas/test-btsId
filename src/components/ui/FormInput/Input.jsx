import React from "react";

export default function Input({ type, id, name, placeholder }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full text-slate-900 py-2 px-3 rounded-md focus:outline-none"
    />
  );
}
