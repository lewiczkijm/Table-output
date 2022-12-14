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

    <div>
      <a href="example">
        <img src={arrowBackIcon} style={{ paddingRight: 8 }} />
        Вернуться на главную
      </a>
    </div>
    <h1>Все грузы</h1>
  </div>
);
