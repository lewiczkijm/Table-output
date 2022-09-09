import React, { useState } from "react";
import { ButtonLarge } from "./components/buttons";
import { Autocomplite } from "./components/select";
import { Datepicker } from "./components/select/datepicker";
import { format } from "date-fns";

export type FilterValue = {
  port?: string;
  status?: string;
  date?: string;
};
export type FilterProps = {
  onChange: (value: FilterValue) => void;
  ports: string[];
  statuses: string[];
};

export const Filter = ({ onChange, ports, statuses }: FilterProps) => {
  const [port, setPort] = useState<any[]>([]);
  const [status, setStatuses] = useState<any[]>([]);
  const [date, setDate] = useState();

  const resetCache = () => {
    setPort([]);
    setStatuses([]);
    setDate(undefined);
    onChange({});
  };

  return (
    <div className="d-flex" style={{ paddingTop: 13 }}>
      <div style={{ width: 373, paddingRight: 10 }}>
        <Autocomplite title="Порт назначения" placeholder="Выберите порт" selected={port} options={ports} onChange={setPort} />
      </div>
      <div style={{ width: 250, paddingRight: 10 }}>
        <Autocomplite title="Статус" placeholder="Статус" selected={status} options={statuses} onChange={setStatuses} />
      </div>
      <div style={{ width: 250, paddingRight: 10 }}>
        <Datepicker title="Дата поступления в порт" value={date} onChange={setDate} />
      </div>
      <div style={{ paddingRight: 10 }}>
        <ButtonLarge title="Сбросить" onClick={resetCache} />
      </div>
      <div style={{ paddingRight: 10 }}>
        <ButtonLarge title="Применить" primary onClick={() => onChange({ port: port[0], status: status[0]?.label, date: date ? format(date, "dd.MM.yyyy") : undefined })} />
      </div>
    </div>
  );
};
