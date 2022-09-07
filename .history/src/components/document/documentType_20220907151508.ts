export type DocumentType = {
  // table types
  id: string | number;
  type: "Контейнер" | "Генеральный груз";
  order: number;
  shipper: string;
  act: string;
  consignment: number;
  date: Date;

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

export type DocumentStatusType = any;
export type ManagerType = any;
export type FileType = {
  name: string;
  date: Date;
  label: string;
};
