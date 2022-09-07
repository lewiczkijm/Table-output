import React, { useMemo } from "react";
import corner from "./corner.svg";
export type PaginatorProps = {
  onChange: (number: number) => void;
  count: number;
};
export const Paginator = ({ onChange, count }: PaginatorProps) => {
  const width = useMemo(() => (count + 2) * 50, [count]);
  return (
    <div style={{ width }} className="paginator">
      <button>1</button>
      <button className="numbered">2</button>
      <button>2</button>
    </div>
  );
};
