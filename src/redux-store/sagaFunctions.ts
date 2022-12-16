import { all, put, select } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
  clearStorage,
  ensureLinkInStorage,
  getLinksFromStorage,
  LinkStorage,
} from "./storage";
import reactotron from "reactotron-react-native";

const call: any = Effects.call; // for TS

export function* devInit(action: PayloadAction) {
  yield put(
    actions.loginRequest({
      username: "12345678",
      password: "1234567",
    })
  );
}

export function* login(action: PayloadAction) {
  try {
    const loginResponse: AxiosResponse = yield call(
      api.loginRequest,
      action.payload
    );
    const token = loginResponse.data as string;
    api.setAuthHeader(token);
    yield put(actions.loginSuccess());
    yield put(actions.fetchConfigRequest());
  } catch (e: any) {
    yield put(actions.loginFailed(e));
  }
}

export function* getMobileConfig(action: PayloadAction) {
  try {
    const configResponse: AxiosResponse = yield call(api.getConfig);
    const config = configResponse.data as Androidconfig;
    yield put(actions.fetchConfigSuccess(config));
  } catch (e: any) {
    yield put(actions.fetchConfigFailed(e));
  }
}

export function* getTable(action: PayloadAction) {
  try {
    const tableResponse: AxiosResponse = yield call(
      api.getSqlTable,
      action.payload
    );
    yield put(
      actions.fetchTableSuccess(tableResponse.data as unknown as TableResponse)
    );
  } catch (e: any) {
    yield put(actions.fetchTableFailed(e));
  }
}

export function* getTicket(action: PayloadAction) {
  try {
    const ticketResponse: AxiosResponse = yield call(
      api.getTicket,
      action.payload
    );
    const ticketData = ticketResponse.data as unknown as TicketResponse;
    yield put(actions.fetchTicketSuccess(ticketData));
  } catch (error: any) {
    yield put(actions.fetchTicketFailed(error));
  }
}

// !!! unlike getTable, this is intended only for ticket links,
// because it saves those links (also those tables are cached in store)
export function* getTablesForTickets(action: PayloadAction) {
  // reactotron.log!(action.payload)
  const links = action.payload as unknown as TicketLink[];
  try {
    // reactotron.log!(action.payload)
    const links = action.payload as unknown as TicketLink[];
    for (const link of links) {
      const response: AxiosResponse = yield call(api.getTicketTable, link);
      yield put(actions.fetchTableSuccess(response.data));
    }
  } catch (error: any) {
    yield put(actions.fetchTableFailed(error));
  }

  links.forEach((link) => {
    ensureLinkInStorage(link);
  });
}

export function* preventiveTablesFetch(action: PayloadAction) {
  try {
    const configFromStore: Androidconfig = yield select(
      (state: RootState) => state.interfaceConfig
    );
    const linksFromConfig: LinkStorage = yield call(getLinksFromStorage);
    let desireableLinks: TicketLink[] = [];
    configFromStore.Tabs.forEach((tab) => {
      tab.Editor.Controls.forEach((control) => {
        if (control.Key in linksFromConfig) {
          desireableLinks.push({
            ParentTable: linksFromConfig[control.Key as keyof Object],
            Id: 0,
            Name: "",
            Value: "",
          });
        }
      });
    });
    for (const link of desireableLinks) {
      const response: AxiosResponse = yield call(api.getTicketTable, link);
      yield put(actions.fetchTableSuccess(response.data));
    }
  } catch (error: any) {
    yield put(actions.fetchTableFailed(error));
  }
}

export function* clearStorageSaga(action: PayloadAction) {
  yield call(clearStorage);
}
