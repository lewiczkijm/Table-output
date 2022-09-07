import React from "react";
export type PaginatorProps = {
  onChange: (number: number) => void;
  count: number;
};
export const Paginator = ({ onChange, count }: PaginatorProps) => {
  return <div className="paginator"></div>;
};
