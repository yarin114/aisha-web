"use client";

import { clsx } from "clsx";

interface RadioStepProps {
  question: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function RadioStep({ question, options, value, onChange, error }: RadioStepProps) {
  return (
    <div>
      <p className="text-lg font-semibold text-charcoal mb-6 text-center">{question}</p>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={clsx(
              "w-full text-start px-5 py-4 rounded-2xl border-2 font-medium transition-all duration-150 cursor-pointer",
              value === option
                ? "border-burgundy bg-burgundy text-white shadow-soft"
                : "border-khaki bg-white text-charcoal hover:border-burgundy/50 hover:bg-burgundy/5"
            )}
            role="radio"
            aria-checked={value === option}
          >
            {option}
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
    </div>
  );
}
