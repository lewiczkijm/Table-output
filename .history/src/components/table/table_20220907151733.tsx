import React from "react";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";

export const Table = ({}: any) => {
  const columns: ColumnDescription[] = [
    {
      dataField: "id",
      text: "Номер груза",
    },
    {
      dataField: "type",
      text: "Тип",
    },
    {
      dataField: "order",
      text: "Закрепленный заказ",
    },
    {
      dataField: "shipper",
      text: "Грузоотправитель",
    },
    {
      dataField: "act",
      text: "Номер приемного акта",
    },
    {
      dataField: "consignment",
      text: "Номер транспортной/ЖД накладной",
    },
    {
      dataField: "date",
      text: "Дата поступления в порт",
    },
  ];

  const products: DocumentType[] = [
    {
      id: 2887,
      type: "Контейнер",
      order: 4329,
      shipper: "ООО “Компания”",
      act: "25499-Т",
      consignment: 440038990,
      date: new Date(),
    },
  ];

  return <BootstrapTable expandRow={{ renderer: () => <>0</> }} keyField="id" data={products} columns={columns} />;
};
