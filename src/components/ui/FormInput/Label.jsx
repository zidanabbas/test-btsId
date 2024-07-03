import React from "react";

export default function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-base text-white font-bold">
      {children}
    </label>
  );
}
