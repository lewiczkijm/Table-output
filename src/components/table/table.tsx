import React, { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Input, Table as BootstrapTable } from "reactstrap";
import { CargoDocumentType } from "../document/documentType";
import expandArrow from "./expandArrow.svg";

const SortButton = ({ order, onClick }: { order?: "asc" | "desc"; onClick: () => void }) => {
  let params = { svgStyle: {}, arrowStyle: {} };

  switch (order) {
    case "asc":
      params = { svgStyle: { fill: "#82868C" }, arrowStyle: {} };
      break;
    case "desc":
      params = { svgStyle: { transform: "rotate(180deg)", fill: "#82868C" }, arrowStyle: {} };
      break;
    case undefined:
      params = { svgStyle: { fill: "#CFCFCF" }, arrowStyle: { display: "none" } };
      break;
  }
  return (
    <button onClick={onClick}>
      <svg style={{ ...params.svgStyle, marginLeft: 10 }} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          style={params.arrowStyle}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3821 6.98L13.2711 4.968L14.0001 5.652L11.1541 8.686L10.7891 9.075L10.4241 8.685L7.57812 5.652L8.30812 4.968L10.3821 7.179V0H11.3821V6.98Z"
        />
        <path d="M0 1V0H7V1H0ZM0 3V2H6V3H0ZM0 5V4H5V5H0ZM0 7V6H4V7H0ZM0 9V8H3V9H0Z" />
      </svg>
    </button>
  );
};

const GroupTableCheckbox: React.FC<any> = ({ onChange, isFull }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isFull) setChecked(false);
  }, [isFull]);

  if (isFull)
    return (
      <Input
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange(e.target.checked);
        }}
        type="checkbox"
      />
    );
  else
    return (
      <button
        className="GroupTableCheckbox"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onChange(false);
        }}
      >
        -
      </button>
    );
};

export const Table: React.FC<{ data: CargoDocumentType[]; Document: any }> = ({ data, Document }) => {
  const [expanded, setExpanded] = useState<number | undefined>();

  const [order, setOrder] = useState<{ column: string; direction?: "asc" | "desc" } | undefined>();

  const [selectedCols, setSelectedCols] = useState<boolean[]>(() => {
    const selectedElements: boolean[] = [];
    for (let i = 0; i < data.length; i++) selectedElements.push(false);
    return selectedElements;
  });

  const selectOrderColumn = useCallback(
    (column: string) => {
      if (order?.column === column) {
        switch (order.direction) {
          case "asc":
            setOrder({ column, direction: "desc" });
            break;
          case "desc":
            setOrder({ column: column });
            break;
          default:
            setOrder({ column, direction: "asc" });
            break;
        }
      } else {
        setOrder({ column, direction: "asc" });
      }
    },
    [order]
  );

  const sortedData = useMemo(() => {
    if (!order?.direction) return data;
    return data.sort((prevValue, nextValue) => {
      //@ts-ignore
      const prev = prevValue[order.column] || "";
      //@ts-ignore
      const next = nextValue[order.column] || "";

      if (order?.direction === "asc") {
        return prev < next ? 1 : -1;
      } else {
        return prev < next ? -1 : 1;
      }
    });
  }, [order, data]);

  const columsOrderHelper = (column: string) => ({ onClick: () => selectOrderColumn(column), order: order?.column === column ? order.direction : undefined });

  const isSelectedAllCols = useMemo(() => selectedCols.every((sel) => sel === true) || selectedCols.every((sel) => sel === false), [selectedCols]);

  const selectCol = useCallback((index: number) => {
    setSelectedCols((cols) => {
      const columns = [...cols];
      columns[index] = !columns[index];
      return columns;
    });
  }, []);

  const selectAllCols = useCallback((e: boolean) => {
    setSelectedCols((cols) => cols.map(() => e));
  }, []);

  const expand = useCallback(
    (index: number) => {
      if (index === expanded) setExpanded(undefined);
      else setExpanded(index);
    },
    [expanded]
  );

  return (
    <BootstrapTable className="layoutTable">
      <thead>
        <tr>
          <th className="selector">
            <label>
              <GroupTableCheckbox onChange={selectAllCols} isFull={isSelectedAllCols} />
            </label>
          </th>
          <th>
            <label>
              Номер груза
              <SortButton {...columsOrderHelper("id")} />
            </label>
          </th>
          <th>
            <label>
              Тип
              <SortButton {...columsOrderHelper("type")} />
            </label>
          </th>
          <th>
            <label>
              Закрепленный заказ
              <SortButton {...columsOrderHelper("order")} />
            </label>
          </th>
          <th>
            <label>
              Грузоотправитель
              <SortButton {...columsOrderHelper("shipper")} />
            </label>
          </th>
          <th>
            <label>
              Номер приемного акта
              <SortButton {...columsOrderHelper("act")} />
            </label>
          </th>
          <th>
            <label>
              Номер транспортной/ЖД накладной
              <SortButton {...columsOrderHelper("consignment")} />
            </label>
          </th>
          <th>
            <label>
              Дата поступления в порт
              <SortButton {...columsOrderHelper("date")} />
            </label>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, i) => (
          <React.Fragment key={item.id}>
            <tr className={expanded === i ? "expanded" : ""}>
              <td className="selector">
                <label>
                  <Input type="checkbox" onChange={() => selectCol(i)} checked={selectedCols[i]} />
                </label>
              </td>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.order}</td>
              <td>{item.shipper}</td>
              <td>{item.act}</td>
              <td>{item.consignment}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => expand(i)} className={`expander ${expanded === i ? "expanded" : ""}`}>
                  <img src={expandArrow} alt="^" />
                </button>
              </td>
            </tr>
            {expanded === i && (
              <tr>
                <td className="reset-expansion-style" colSpan={9}>
                  <Document {...item} />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </BootstrapTable>
  );
};
