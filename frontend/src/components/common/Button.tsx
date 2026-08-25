import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700 shadow-md hover:shadow-lg",

    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",

    outline:
      "border border-pink-600 text-pink-600 hover:bg-pink-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}