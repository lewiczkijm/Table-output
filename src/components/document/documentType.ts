export type CargoDocumentType = {
  // table types
  id: any;
  type: "Контейнер" | "Генеральный груз";
  order: number;
  shipper: string;
  act: string;
  consignment: number;
  date?: Date | string;

  //only in document
  status?: DocumentStatusType;
  manager?: ManagerType;
  transport?: string;
  containerType?: string;
  volum?: number;
  height?: number;
  length?: number;
  width?: number;
  mass?: number;
  description?: string;
  TMC?: string;
  freightUnit?: string;
  portLocation?: string;
  actFile?: FileType;
  consignmentFile?: FileType;
};

export type DocumentStatusType = { label: string; color: string };
export type ManagerType = {
  firstName: string;
  lastName: string;
  curname: string;
  email: string;
  phone: string;
};
export type FileType = {
  name: string;
  date: Date;
  label: string;
};
