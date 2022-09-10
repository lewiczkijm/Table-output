import React, { useMemo, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Fotter, Sidebar } from "./components/menu";
import { Header } from "./components/menu/header";
import { Table } from "./components/table";
import { CargoDocumentType } from "./components/document/documentType";
import { Limiter, Paginator } from "./components/paginator";
import { useQueries } from "react-query";
import { Filter, FilterValue } from "./filter";
import { CargoDocument } from "./components/document";
import { portsFeth, statusFeth } from "./sharedQuires";
import { Elements } from "./elements";

const getCargo = (limit: number, page: number, filter: FilterValue) => {
  const start = (page - 1) * limit,
    end = page * limit;
  let address = `/cargo?_start=${start}&_end=${end}`;

  if (filter.date) address += `&date=${filter.date}`;
  if (filter.status) address += `&status=${filter.status}`;
  if (filter.port) address += `&port=${filter.port}`;
  return fetch(address).then((res) => res.json());
};

function App() {
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<FilterValue>({});
  const [ports, statuses, cargo] = useQueries([
    { queryKey: ["ports"], queryFn: portsFeth },
    { queryKey: ["status"], queryFn: statusFeth },
    { queryKey: ["cargo", limit, page, filter], queryFn: () => getCargo(limit, page, filter) },
  ]);

  const pages = useMemo(() => (cargo.data ? Math.ceil(cargo.data.length / limit) : 4), [cargo.data, limit]);

  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="d-flex flex-column justify-content-between article">
        <div>
          <Header />
          <Filter statuses={statuses.data || []} onChange={setFilter} ports={ports.data || []} />
          <div style={{ width: 1550, paddingTop: 20 }}>
            <Table data={(cargo.data?.data as CargoDocumentType[]) || []} Document={CargoDocument} />
            <div className="d-flex justify-content-between pb-5" style={{ paddingTop: 39 }}>
              <Limiter value={limit} onChange={setLimit} />
              <Paginator count={pages} selected={page} onChange={setPage} />
            </div>
          </div>
        </div>

        <Fotter />
      </div>
    </div>
  );
}

export default App;
