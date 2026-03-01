"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          {
            // Primary
            "bg-burgundy text-white hover:bg-burgundy-dark active:scale-95 shadow-soft":
              variant === "primary",
            // Secondary
            "bg-brown text-white hover:bg-brown-light active:scale-95":
              variant === "secondary",
            // Ghost
            "bg-transparent text-burgundy hover:bg-burgundy/10":
              variant === "ghost",
            // Outline
            "border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white":
              variant === "outline",
            // Sizes
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
