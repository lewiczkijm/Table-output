import React, { useMemo, useState } from "react";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { CargoDocumentType } from "../document/documentType";
import { format } from "date-fns";
import expandArrow from "./expandArrow.svg";
import { JsxElement } from "typescript";

const headerFormatter = (column: any, colIndex: any, components: any) => {
  // components.sortElement.props.order "asc" "desc"
  let params = { svgStyle: {}, arrowStyle: {} };

  switch (components.sortElement.props.order) {
    case "asc":
      params = { svgStyle: { transform: "rotate(180deg)", fill: "#82868C" }, arrowStyle: {} };
      break;
    case "desc":
      params = { svgStyle: { fill: "#82868C" }, arrowStyle: {} };
      break;
    case undefined:
      params = { svgStyle: { fill: "#CFCFCF" }, arrowStyle: { display: "none" } };
      break;
  }

  return (
    <>
      <span>{column.text}</span>
      <svg style={params.svgStyle} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          style={params.arrowStyle}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3821 6.98L13.2711 4.968L14.0001 5.652L11.1541 8.686L10.7891 9.075L10.4241 8.685L7.57812 5.652L8.30812 4.968L10.3821 7.179V0H11.3821V6.98Z"
        />
        <path d="M0 1V0H7V1H0ZM0 3V2H6V3H0ZM0 5V4H5V5H0ZM0 7V6H4V7H0ZM0 9V8H3V9H0Z" />
      </svg>
    </>
  );
};

export const Table = ({ data, Document }: { data: CargoDocumentType[]; Document: JSX.Element }) => {
  const columns: ColumnDescription[] = [
    {
      dataField: "id",
      text: "Номер груза",
      sort: true,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "type",
      text: "Тип",
      sort: true,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "order",
      text: "Закрепленный заказ",
      sort: true,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "shipper",
      text: "Грузоотправитель",
      sort: true,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "act",
      text: "Номер приемного акта",
      sort: true,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "consignment",
      text: "Номер транспортной/ЖД накладной",
      sort: true,
      headerFormatter: headerFormatter,
    },
    {
      dataField: "date",
      text: "Дата поступления в порт",
      sort: true,
      formatter: (col) => <>{col ? format(new Date(col), "dd.MM.yyyy") : "-"}</>,
      headerFormatter: headerFormatter,
    },
  ];

  return (
    <BootstrapTable
      selectRow={{
        mode: "checkbox",
      }}
      bordered={false}
      classes="layoutTable"
      expandRow={{
        onExpand: (row, isExpand, rowIndex, e) => {
          let rowElement;
          //@ts-ignore
          switch (e.target.nodeName.toLowerCase()) {
            case "img": //@ts-ignore
              rowElement = e.target.parentElement.parentElement.parentElement;
              break;
            case "button": //@ts-ignore
              rowElement = e.target.parentElement.parentElement;
              break;
            case "td": //@ts-ignore
              rowElement = e.target.parentElement;
              break;
            default:
              return;
          }
          if (isExpand) rowElement.classList.add("expanded");
          else rowElement.classList.remove("expanded");
        },
        renderer: (row) => <Document {...row} />,
        showExpandColumn: true,
        expandColumnPosition: "right",
        onlyOneExpanding: true,
        expandHeaderColumnRenderer: () => <></>,
        expandColumnRenderer({ expanded }) {
          return (
            <button className={`expander ${expanded ? "expanded" : ""}`}>
              <img src={expandArrow} alt="^" />
            </button>
          );
        },
      }}
      keyField="id"
      data={data}
      columns={columns}
    />
  );
};
