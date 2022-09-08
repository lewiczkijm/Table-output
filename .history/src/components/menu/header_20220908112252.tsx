import React from "react";
import { InputFind } from "../input";
import { UserPane } from "../user";
import arrowBackIcon from "./icons/arrowback.svg";
export const Header = () => (
  <div className="header">
    <div className="d-flex justify-content-between" style={{ paddingBottom: 38 }}>
      <div style={{ width: 510 }}>
        <InputFind placeholder="Найти коносамент, груз, заказ и др." />
      </div>
      <div>
        <UserPane />
      </div>
    </div>
    <img src={arrowBackIcon} />
    <div></div>
  </div>
);
