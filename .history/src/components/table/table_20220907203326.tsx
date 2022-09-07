import React, { useState } from "react";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import { CargoDocumentType } from "../document/documentType";

const headerFormatter = (column: any, colIndex: any, components: any) => {
  // components.sortElement.props.order "asc" "desc"
  const [params, setParams] = useState({ svgStyle: {}, arrowStyle: {} });

  return (
    <>
      {column.text}
      <svg style={params.svgStyle} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3821 6.98L13.2711 4.968L14.0001 5.652L11.1541 8.686L10.7891 9.075L10.4241 8.685L7.57812 5.652L8.30812 4.968L10.3821 7.179V0H11.3821V6.98Z"
          fill="#82868C"
        />
        <path style={params.arrowStyle} d="M0 1V0H7V1H0ZM0 3V2H6V3H0ZM0 5V4H5V5H0ZM0 7V6H4V7H0ZM0 9V8H3V9H0Z" fill="#82868C" />
      </svg>
    </>
  );
};

export const Table = ({}: any) => {
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
    },
    {
      dataField: "order",
      text: "Закрепленный заказ",
      sort: true,
    },
    {
      dataField: "shipper",
      text: "Грузоотправитель",
      sort: true,
    },
    {
      dataField: "act",
      text: "Номер приемного акта",
      sort: true,
    },
    {
      dataField: "consignment",
      text: "Номер транспортной/ЖД накладной",
      sort: true,
    },
    {
      dataField: "date",
      text: "Дата поступления в порт",
      sort: true,
      formatter: (col) => <>{col.toString()}</>,
    },
  ];

  const products: CargoDocumentType[] = [
    {
      id: 2887,
      type: "Контейнер",
      order: 4329,
      shipper: "ООО “Компания”",
      act: "25499-Т",
      consignment: 440038990,
      date: new Date(),
    },
    {
      id: 2886,
      type: "Генеральный груз",
      order: 4311,
      shipper: "ООО “Компания”",
      act: "25321-Т",
      consignment: 440038350,
      date: new Date(),
    },
    {
      id: 2885,
      type: "Контейнер",
      order: 4343,
      shipper: "ООО “Новый век”",
      act: "25432-Т",
      consignment: 760038990,
      date: new Date(),
    },
  ];

  return <BootstrapTable bordered={false} classes="layoutTable" expandRow={{ renderer: () => <>0</> }} keyField="id" data={products} columns={columns} />;
};
