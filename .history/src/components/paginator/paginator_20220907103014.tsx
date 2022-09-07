import React from "react";
export type PaginatorProps = {
  onChange: (number: number) => void;
  count: number;
  label?: string;
};
export const Paginator = ({ onChange, count, label }: PaginatorProps) => {
  return <div></div>;
};
