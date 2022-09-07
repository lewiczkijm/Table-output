import React, { useCallback, useMemo } from "react";
import corner from "./corner.svg";
export type PaginatorProps = {
  onChange: (number: number) => void;
  count: number;
  selected: number;
};
export const Paginator = ({ onChange, count, selected }: PaginatorProps) => {
  const width = useMemo(() => (count + 2) * 50, [count]);

  const select = useCallback(
    (value: number | "prev" | "next") => {
      switch (value) {
        case "prev":
          if (selected > 1) {
            onChange(selected - 1);
          }
          break;
        case "next":
          if (selected < count) {
            onChange(selected + 1);
          }
          break;
        default:
          onChange(value);
          break;
      }
    },
    [count]
  );

  const numberButtons = useMemo(() => {
    const buttons: Array<React.ReactElement> = [];
    for (let i = 1; i <= count; i++) {
      buttons.push(
        <button onClick={() => select(i)} className={`numbered ${selected === i ? "selected" : ""}`}>
          {i}
        </button>
      );
    }
    return <>{buttons}</>;
  }, [count, selected]);

  return (
    <div style={{ width }} className="paginator">
      <button onClick={() => select("prev")}>
        <img src={corner} />
      </button>
      {numberButtons}
      <button onClick={() => select("next")}>
        <img src={corner} style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
};
