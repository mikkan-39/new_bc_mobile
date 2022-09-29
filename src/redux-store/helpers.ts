interface Tableinconfig {
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

interface Editorinconfig {
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
