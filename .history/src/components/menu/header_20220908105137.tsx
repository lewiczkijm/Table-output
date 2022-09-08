import React from "react";
import { InputFind } from "../input";
import { UserPane } from "../user";
export const Header = () => (
  <div className="header">
    <div className="d-flex justify-content-between pb-2">
      <div style={{ width: 510 }}>
        <InputFind placeholder="Найти коносамент, груз, заказ и др." />
      </div>
      <div>
        <UserPane />
      </div>
    </div>
  </div>
);