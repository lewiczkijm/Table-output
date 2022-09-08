import React from "react";
import { InputFind } from "../input";
import { UserPane } from "../user";
export const Header = () => (
  <div className="header">
    <div>
      <InputFind placeholder="Найти коносамент, груз, заказ и др." />
    </div>
    <div>
      <UserPane />
    </div>
  </div>
);