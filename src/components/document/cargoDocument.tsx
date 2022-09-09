import React, { SyntheticEvent, useState } from "react";
import { useQuery } from "react-query";
import { statusFeth } from "../../sharedQuires";
import { ButtonFile, ButtonSmall } from "../buttons";
import { SimpleSelect } from "../select/simpleSelect";
import { CargoDocumentType, FileType } from "./documentType";
import iconEdit from "./iconEdit.svg";
import iconDownload from "./iconDownload.svg";
import iconDelete from "./iconDelete.svg";
import { format } from "date-fns";
import { UserInfo } from "../user";

export const Divider = () => (
  <div className="divider">
    <div></div>
  </div>
);

export const FileCard = ({ name, date, label, onDelete }: FileType & { onDelete: () => void }) => (
  <div className="file">
    <span className="name">{name}</span>
    <span className="date">от {date}</span>
    <span className="label">{label}</span>
    <span className="flex-grow-1"></span>
    <span style={{ paddingRight: 10 }}>
      <button>
        <img src={iconDownload} />
      </button>
    </span>
    <span style={{ paddingRight: 20 }}>
      <button onClick={onDelete}>
        <img src={iconDelete} />
      </button>
    </span>
  </div>
);

export const CargoDocument: React.FC<CargoDocumentType> = ({
  id,
  type,
  order,
  shipper,
  act,
  consignment,
  date,
  status,
  manager,
  transport,
  containerType,
  volum,
  height,
  length,
  width,
  mass,
  description,
  TMC,
  freightUnit,
  portLocation,
  actFile,
  consignmentFile,
  port,
}) => {
  const statuses = useQuery(["status"], statusFeth, { enabled: false });

  const [modStatus, setModStatus] = useState(status);
  const [modConsignmentFile, setConsignmentFile] = useState<any>(consignmentFile);
  const [modActFile, setActFile] = useState<any>(actFile);

  return (
    <div className="cargoDocument">
      <Divider />
      <div style={{ paddingTop: 10 }} className="d-flex">
        <div>
          <div className="tableStr">
            <span>Статус груза</span>
            <span>
              <SimpleSelect onChange={setModStatus} value={modStatus} options={statuses.data} />
            </span>
          </div>
          <div className="d-flex">
            <div className="tableStr">
              <span>Дата поступления груза в порт</span>
              <span>{date}</span>
            </div>
            {order && (
              <div className="tableStr">
                <span>Закрепленный заказ</span>
                <span>
                  <a href="#">{order}</a>
                </span>
              </div>
            )}
          </div>

          <div className="d-flex">
            {manager && (
              <div className="tableStr">
                <span>Менеджер</span>
                <span>{`${manager.curname} ${manager.firstName} ${manager.lastName}`}</span>
              </div>
            )}
            {transport && (
              <div className="tableStr">
                <span>Доставка груза до порта отправления</span>
                <span>{transport}</span>
              </div>
            )}
          </div>
          {shipper && (
            <div className="tableStr">
              <span>Грузоотправитель</span>
              <span>{shipper}</span>
            </div>
          )}
          <Divider />
          <div className="d-flex" style={{ paddingTop: 20 }}>
            {containerType && (
              <div className="tableStr">
                <span>Тип контейнера</span>
                <span>{containerType}</span>
              </div>
            )}
            {mass && (
              <div className="tableStr">
                <span>Масса, тн</span>
                <span>{mass}</span>
              </div>
            )}
          </div>
          <div className="d-flex">
            {volum && (
              <div className="tableStr">
                <span>Общий объем, м3</span>
                <span>{volum}</span>
              </div>
            )}
            {length && (
              <div className="tableStr">
                <span>Длина, метры</span>
                <span>{length}</span>
              </div>
            )}
          </div>
          <div className="d-flex">
            {height && (
              <div className="tableStr">
                <span>Высота, метры</span>
                <span>{height}</span>
              </div>
            )}
            {width && (
              <div className="tableStr">
                <span>Ширина, метры</span>
                <span>{width}</span>
              </div>
            )}
          </div>
          {description && (
            <div className="description">
              <div className="header">Описание груза</div>
              <div>{description}</div>
            </div>
          )}
          <Divider />
          <div className="d-flex" style={{ paddingTop: 20 }}>
            {TMC && (
              <div className="tableStr">
                <span>ТМЦ</span>
                <span>{TMC}</span>
              </div>
            )}
            {freightUnit && (
              <div className="tableStr">
                <span>Фрахтовая единица</span>
                <span>{freightUnit}</span>
              </div>
            )}
          </div>
          <div className="d-flex">
            {portLocation && (
              <div className="tableStr">
                <span>Фрахтовая единица</span>
                <span>{portLocation}</span>
              </div>
            )}
          </div>
          <Divider />
        </div>

        <div>{manager && <UserInfo firstName={manager?.firstName} lastName={manager?.lastName} curname={manager?.curname} email={manager?.email} phone={manager?.phone} />}</div>
      </div>
      <div>
        <div style={{ paddingTop: 20 }}>
          <div className="header">Файл транспортной накладной</div>
          {modConsignmentFile ? (
            <FileCard name={modConsignmentFile.name} date={modConsignmentFile.date} label={modConsignmentFile.label} onDelete={() => setConsignmentFile(undefined)} />
          ) : (
            <ButtonFile title="Добавить" onChange={(e: any) => setConsignmentFile({ name: e.target.files[0].name, date: format(new Date(), "dd.MM.yyyy"), label: "Заказ №4329" })} />
          )}
        </div>
        <div style={{ paddingTop: 20 }}>
          <div className="header">Файл приемного акта</div>
          {modActFile ? (
            <FileCard name={modActFile.name} date={modActFile.date} label={modActFile.label} onDelete={() => setActFile(undefined)} />
          ) : (
            <ButtonFile title="Добавить" onChange={(e: any) => setActFile({ name: e.target.files[0].name, date: format(new Date(), "dd.MM.yyyy"), label: "Заказ №4329" })} />
          )}
        </div>
        <div style={{ paddingTop: 20 }}>
          <div className="tableStr">
            <span>Номер приемного акта</span>
            <span>{act}</span>
          </div>
        </div>
        <div>
          <span style={{ paddingRight: 20 }}>
            <ButtonSmall icon={<img src={iconEdit} />} title={"редактировать"} onClick={() => {}} />
          </span>
          <ButtonSmall title={"разделить груз"} primary onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
