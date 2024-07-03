import React from "react";

export default function Button({
  type,
  ariaLabel,
  classname,
  onClick,
  children,
}) {
  return (
    <button
      className={`px-3 py-2 h-10 text-base ${classname} rounded-md bg-slate-400 `}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
