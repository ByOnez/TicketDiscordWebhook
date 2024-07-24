import { useState } from "react";
import { InputProps } from "../../types/InputProps";

export default function Input({ id, type, label, value, onChange }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative w-full">
      {type !== "textarea" ? (
        <input
          id={id}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          className="w-full p-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-ticket-amber font-medium"
        />
      ) : (
        <textarea
          id={id}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          rows={4}
          className="w-full p-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-ticket-amber font-medium resize-none"
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-300 transform ${isFocused || value
            ? "-top-3 text-sm bg-white px-2 text-gray-500"
            : type === "textarea"
            ? "top-2 text-base -translate-y-1/2" 
            : "top-1/2 text-base -translate-y-1/2"
          }`}
      >
        {label}
      </label>
    </div>
  );
}
