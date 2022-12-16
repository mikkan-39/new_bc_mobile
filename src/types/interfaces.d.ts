// Project: BCMobile
// Definitions by: mikkan-39

declare global {
  interface TableStorage {
    [key: string]: TableResponse;
  }

  interface TicketStorage {
    [key: string]: TicketResponse;
  }

  interface RootState {
    error: null | Error;
    authorized: boolean;
    configured: boolean;
    interfaceConfig: Androidconfig;
    tableStorage: TableStorage;
    ticketStorage: TicketStorage;
  }

  // table as seen in config
  interface Tableinconfig {
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

  interface UpdaterControl {
    Key: string; // e.g. taskType
    Label: string; // e.g. Вид задачи
    Number: number;
    Readonly: boolean;
    Type: "BIGINT" | "TEXT" | "DATETIME" | "FILE" | "NUMERIC";
    Visible: boolean;
    Value: any;
    Required: boolean;
    Format: any; // TODO: find out what this is?
  }

  interface Editorinconfig {
    Name: string;
    Table: string;
    Children: Tableinconfig[];
    Controls: UpdaterControl[];
  }

  interface Androidconfig {
    Tabs: Tableinconfig[];
  }

  // for possible future conversions
  const androidConfigConverter = (config: any) => {
    return config as Androidconfig;
  };

  // Item as seen in table
  interface TableTicket {
    Key: string;
    Left: string;
    Right: string;
    Name: string;
    Number: number;
  }

  interface TicketForRequest extends TableTicket {
    ParentTable: Tableinconfig;
  }

  // table after fetching
  interface TableResponse {
    Field: string;
    Review: string;
    Table: string; // tbl...
    Set: TableTicket[];
  }

  type Logincreds = {
    username: string;
    password: string;
  };

  interface TicketAttribute {
    Name: string;
    Type:
      | "TABLE" // for rendering table controls
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

  // link contains both the selected option and table name
  interface TicketLink {
    Id: number;
    Name: string; // internal
    ParentTable: string; // tbl...
    Value: string; // russian
  }

  // ticket afterfetching
  interface TicketResponse {
    Attributes: TicketAttribute[];
    Id: number;
    Table: string; // tbl...
    Links: TicketLink[];
  }

  interface TicketEditActionPayload {
    ticketId: number;
    attribute: TicketAttribute;
    value: any;
  }

  interface TicketSetTableActionPayload {
    ticketId: number;
    link: TicketLink;
    optionKey: any;
  }
}

export {};
