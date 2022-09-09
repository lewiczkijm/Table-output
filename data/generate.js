const fs = require("fs");
const lorem = require("./lorem.json");
const managers = require("./managers.json");
const status = require("./status.json");
const dateFns = require("date-fns");
const ports = require("./ports.json");

const rand = (num, start = 0) => Math.round(Math.random() * num) + start;
const types = ["Контейнер", "Генеральный "];
const orders = [4311, 4350, 4329, 2311, 6543];
const shippers = ["ООО “Компания”", "ООО “Новый век”"];
const transport = ["Автомобильный", "Железнодорожный"];
const cargoType = ["40' High Cube", "20' Cube"];

const data = { cargo: [], status, ports };

let date = "03.01.2022";

for (let i = 0; i < 300; i++) {
  date = dateFns.format(dateFns.addDays(dateFns.parse(date, "dd.MM.yyyy", new Date()), Math.random() * 1.3), "dd.MM.yyyy");
  data.cargo.push({
    // table types
    id: i,
    type: types[rand(2)],
    order: orders[rand(5)],
    shipper: shippers[rand(2)],
    act: "25499-Т",
    consignment: Date | Math.random().toString().slice(2, 11),
    date: date,

    //only in document
    status: status[rand(8)],
    manager: managers[rand(4)],
    transport: transport[rand(2)],
    containerType: cargoType[rand(3)],
    volum: rand(50, 1),
    height: rand(10, 1),
    length: rand(10, 1),
    width: rand(10, 1),
    mass: rand(30, 1),
    description: lorem[rand(7)],
    TMC: "",
    freightUnit: "",
    portLocation: "",
    actFile: undefined,
    consignmentFile: undefined,

    // not in scheme
    port: ports[rand(ports.length + 4)],
  });
}

fs.writeFileSync("data.json", JSON.stringify(data, 1, 1));
