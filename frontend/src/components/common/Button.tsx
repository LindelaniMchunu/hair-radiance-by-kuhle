import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4";

  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-100",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-200",
    outline:
      "border border-pink-600 bg-white text-pink-600 hover:bg-pink-50 focus:ring-pink-100",
  };

  const disabledStyles = disabled
    ? "cursor-not-allowed opacity-50 hover:bg-pink-600"
    : "";

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}