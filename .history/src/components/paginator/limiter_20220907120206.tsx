import React, { useMemo } from "react";
export type LimiterProps = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  options?: number[];
};
export const Limiter = ({ value, onChange, label = "Показывать по:", options = [20, 50, 100] }: LimiterProps) => {
  const width = useMemo(() => options.length * 47 + 150, [options]);

  return (
    <div style={{ width }} className="limiter">
      <span className="label">{label}</span>
      {options.map((option) => (
        <button className={option === value ? "selected" : ""} onClick={() => onChange(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
