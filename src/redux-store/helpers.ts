export interface Tableinconfig {
  Field: string;
  Table: string; //|
  Left: string; //|
  Right: string; //| required only for fetch request
  Review: string; //|
  Number: number;
  Name: string;
  Parent: string;
  Editor: Editorinconfig;
}

export interface Editorinconfig {
  Name: string;
  Table: string;
  Children: Tableinconfig[];
  Controls: Array<{
    Key: string;
    Label: string;
    Number: 0;
    Readonly: boolean;
    Type: "BIGINT" | "TEXT" | "DATETIME" | "FILE" | "NUMERIC";
  }>;
}

export interface Androidconfig {
  Tabs: Tableinconfig[];
}

export const androidConfigConverter = (config: any) => {
  return config as Androidconfig;
};


export interface TableTicket {
  key: string;
  left: string;
  right: string;
  name: string;
  number: number;
}

export interface TableResponse {
  Field: string;
  Review: string;
  Table: string;
  Set: TableTicket[];
}