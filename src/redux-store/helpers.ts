export interface Tableinconfig {
  Field: string;
  Table: string; //| tbl...
  Left: string; //|
  Right: string; //| required only for fetch request
  Review: string; //|
  Number: number;
  Name: string;
  Parent: string;
  Editor: Editorinconfig;
}

export interface UpdaterControl {
  Key: string;
  Label: string;
  Number: 0;
  Readonly: boolean;
  Type: "BIGINT" | "TEXT" | "DATETIME" | "FILE" | "NUMERIC";
}

export interface ExtendedControl extends UpdaterControl {
  TableLink?: string;
}

export interface Editorinconfig {
  Name: string;
  Table: string;
  Children: Tableinconfig[];
  Controls: UpdaterControl[];
}

export interface Androidconfig {
  Tabs: Tableinconfig[];
}

export const androidConfigConverter = (config: any) => {
  return config as Androidconfig;
};

export interface TableTicket {
  Key: string;
  Left: string;
  Right: string;
  Name: string;
  Number: number;
}

export interface TicketForRequest extends TableTicket {
  ParentTable: Tableinconfig;
}

export interface TableResponse {
  Field: string;
  Review: string;
  Table: string; // tbl...
  Set: TableTicket[];
}

export const stripHTML = (str: string): string => {
  if (str === undefined) return "---";
  var he = require("he"); // HTML decoder
  return he.decode(str.replace(/<[^>]+>/g, "")).trim();
};

export type Logincreds = {
  username: string;
  password: string;
};

export interface TicketAttribute {
  Name: string;
  Type:
    | "BIGINT"
    | "TEXT"
    | "DATETIME"
    | "FILE"
    | "NUMERIC"
    | "GUID"
    | "VARCHAR"
    | "DECIMAL"
    | "SMALLDATETIME"
    | "BIT";
  Value: any;
}

export interface TicketLink {
  Id: number;
  Name: string; // internal
  ParentTable: string; // tbl...
  Value: string; // russian
}

export interface TicketResponse {
  Attributes: TicketAttribute[];
  Id: number;
  Table: string; // tbl...
  Links: TicketLink[];
}
