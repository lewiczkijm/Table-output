const data = require("./data.json");
const express = require("express");
const app = express();

app.get("/status", (req, res) => res.send(data.status));
app.get("/ports", (req, res) => res.send(data.ports));
app.get("/cargo", (req, res) => {
  const { _start, _end, date, port, status } = req.query;
  const cargo = data.cargo.filter((cargoItem) => (status ? cargoItem.status?.label === status : true) && (port ? cargoItem.port === port : true) && (date ? cargoItem.date === date : true));
  res.send({ length: cargo.length, data: cargo.slice(_start.toString(), _end.toString()) });
});

app.listen(3001);
