import { PayloadAction } from "@reduxjs/toolkit";
import reactotron from "reactotron-react-native";
import * as types from "./constants";
import { Androidconfig, TableResponse, TicketResponse } from "./helpers";

interface TableStorage {
  [key: string]: TableResponse;
}

interface TicketStorage {
  [key: string]: TicketResponse;
}
const initialState = {
  error: new Error(),
  authorized: false,
  configured: false,
  interfaceConfig: {} as Androidconfig,
  tableStorage: {} as TableStorage,
  ticketStorage: {} as TicketStorage,
};

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, authorized: true };
    case types.FETCH_CONFIG_SUCCESS:
      return {
        ...state,
        configured: true,
        interfaceConfig: action.payload as unknown as Androidconfig,
      };
    case types.FETCH_TABLE_SUCCESS: {
      const table = action.payload as unknown as TableResponse;
      const { tableStorage } = state;
      tableStorage[table.Table] = table;
      return {
        ...state,
        tableStorage: { ...tableStorage },
      };
    }
    case types.FETCH_TICKET_SUCCESS: {
      const ticket = action.payload as unknown as TicketResponse;
      return {
        ...state,
        ticketStorage: { ...state.ticketStorage, [ticket.Id]: ticket },
      };
    }

    case types.LOGIN_FAILED:
    case types.FETCH_CONFIG_FAILED:
    case types.FETCH_TABLE_FAILED:
    case types.FETCH_TICKET_FAILED:
      return { ...state, error: action.payload as unknown as Error };

    // these are for redux-saga,
    // which will call one of sagaFunctions.
    case types.FETCH_CONFIG_REQUEST:
    case types.REQUEST_LOGIN:
    case types.DEV_APP_INIT:
    case types.FETCH_TABLE_REQUEST:
    case types.FETCH_TABLES_FOR_TICKET_REQUEST:
    case types.FETCH_TICKET_REQUEST:
    case types.CLEAR_ASYNC_STORAGE:
      return state;

    case types.CLEAR_TICKET_STORAGE: // FIXME: deprecated
      return { ...state, ticketStorage: null };

    default:
      // redux may have called it's own actions,
      // otherwise something weird happened
      // and we should totally log it.
      if (!action.type.includes("@@redux")) {
        reactotron.display({
          name: "UNRECOGNIZED ACTION",
          value: action,
          important: true,
        });
      }
      return state;
  }
};
