"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-charcoal-light mb-2">
        <span>שלב {current} מתוך {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-khaki-light rounded-full overflow-hidden">
        <div
          className="h-full bg-burgundy rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={1}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
