import React from "react";
import Label from "./Label";
import Input from "./Input";

export default function FormInput({ label, name, type, placeholder }) {
  return (
    <div className="w-full mb-2 px-2 py-1">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
