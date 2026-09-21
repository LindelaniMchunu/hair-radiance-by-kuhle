import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-800"
      >
        {label}
      </label>

      <input
        id={id}
        {...props}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 ${
          error
            ? "border-red-400"
            : "border-gray-200"
        }`}
      />

      {error && (
        <p className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}