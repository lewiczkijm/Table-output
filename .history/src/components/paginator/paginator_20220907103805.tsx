import React from "react";
export type PaginatorProps = {
  onChange: (number: number) => void;
  count: number;
};
export const Paginator = ({ onChange, count }: PaginatorProps) => {
  return (
    <div className="paginator">
      <button>1</button>
      <button className="numbered">2</button>
      <button>2</button>
    </div>
  );
};
