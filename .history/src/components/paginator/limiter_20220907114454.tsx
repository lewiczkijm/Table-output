import React from "react";
export type LimiterProps = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
};
export const Limiter = ({ value, onChange, label = "Показывать по:" }: LimiterProps) => {
  return (
    <div className="limiter">
      <span className="label">{label}</span>
      <button>20</button>
      <button>50</button>
      <button>100</button>
    </div>
  );
};
