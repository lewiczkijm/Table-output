import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

export const Table = ({}: any) => {
  const columns = [
    {
      dataField: "id",
      text: "Номер груза",
    },
    {
      dataField: "type",
      text: "Тип",
    },
    {
      dataField: "Закрепленный заказ",
      text: "order",
    },
    {
      dataField: "Грузоотправитель",
      text: "shipper",
    },
    {
      dataField: "Номер приемного акта",
      text: "act",
    },
    {
      dataField: "Номер транспортной/ЖД накладной",
      text: "consignment",
    },
    {
      dataField: "Дата поступления в порт",
      text: "date",
    },
  ];

  const products: any[] = [];

  return <BootstrapTable expandRow={{ renderer: () => <>0</> }} keyField="id" data={products} columns={columns} />;
};
