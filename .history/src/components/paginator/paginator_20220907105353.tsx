import React, { useMemo } from "react";
import corner from "./corner.svg";
export type PaginatorProps = {
  onChange: (number: number) => void;
  count: number;
};
export const Paginator = ({ onChange, count }: PaginatorProps) => {
  const width = useMemo(() => (count + 2) * 50, [count]);
  const numberButtons = useMemo(() => {
    const buttons: Array<React.ReactElement> = [];
    for (let i = 1; i <= count; i++) {
      // @ts-ignore
      numberButtons.push(<button>{i}</button>);
    }
    return <>{buttons}</>;
  }, [count]);

  return (
    <div style={{ width }} className="paginator">
      <button>
        <img src={corner} />
      </button>
      <button className="numbered">2</button>
      <button>
        <img src={corner} style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
};