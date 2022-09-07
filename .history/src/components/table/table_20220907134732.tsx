import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

export const Table = ({}: any) => {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  const products: any[] = [];

  return <BootstrapTable keyField="id" data={products} columns={columns} />;
};
