import * as types from "./constants";
import {
  Androidconfig,
  Logincreds,
  Tableinconfig,
  TableResponse,
  TableTicket,
  TicketAttribute,
  TicketEditActionPayload,
  TicketForRequest,
  TicketLink,
  TicketResponse,
} from "./interfaces";

export const devAppInit = () => {
  return {
    type: types.DEV_APP_INIT,
  };
};

export const loginRequest = (creds: Logincreds) => {
  return {
    type: types.REQUEST_LOGIN,
    payload: creds, // { username: string, password: string }
  };
};

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
  };
};

export const loginFailed = (err: Error) => {
  return {
    type: types.LOGIN_FAILED,
    payload: err,
  };
};

export const fetchConfigRequest = () => {
  return {
    type: types.FETCH_CONFIG_REQUEST,
  };
};

export const fetchConfigSuccess = (config: Androidconfig) => {
  return {
    type: types.FETCH_CONFIG_SUCCESS,
    payload: config,
  };
};

export const fetchConfigFailed = (err: Error) => {
  return {
    type: types.FETCH_CONFIG_FAILED,
    payload: err,
  };
};

export const fetchTableRequest = (table: Tableinconfig) => {
  return {
    type: types.FETCH_TABLE_REQUEST,
    payload: table,
  };
};

export const fetchTableSuccess = (table: TableResponse) => {
  return {
    type: types.FETCH_TABLE_SUCCESS,
    payload: table,
  };
};

export const fetchTableFailed = (err: Error) => {
  return {
    type: types.FETCH_TABLE_FAILED,
    payload: err,
  };
};

export const fetchTicketRequest = (ticket: TicketForRequest) => {
  return {
    type: types.FETCH_TICKET_REQUEST,
    payload: ticket,
  };
};

export const fetchTicketSuccess = (ticket: TicketResponse) => {
  return {
    type: types.FETCH_TICKET_SUCCESS,
    payload: ticket,
  };
};

export const fetchTicketFailed = (err: Error) => {
  return {
    type: types.FETCH_TICKET_FAILED,
    payload: err,
  };
};

export const fetchTicketTablesRequest = (links: TicketLink[]) => {
  return {
    type: types.FETCH_TABLES_FOR_TICKET_REQUEST,
    payload: links,
  };
};

export const clearTicketStorage = () => {
  return {
    type: types.CLEAR_TICKET_STORAGE,
  };
};

export const clearAsyncStorage = () => {
  return {
    type: types.CLEAR_ASYNC_STORAGE,
  };
};

export const editTicketField = (
  ticket: TicketResponse,
  attribute: TicketAttribute,
  value: any
) => {
  return {
    type: types.EDIT_TICKET_FIELD,
    payload: {
      ticket,
      attribute,
      value,
    } as TicketEditActionPayload,
  };
};
