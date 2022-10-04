import { put } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import reactotron from "reactotron-react-native";
import { androidConfigConverter, TableResponse, TicketResponse } from "./helpers";

const call: any = Effects.call; // for TS

export function* devInit(action: PayloadAction) {
  yield put(
    actions.loginRequest({
      username: "mbs",
      password: "1qaz!QAZ",
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
    const config = androidConfigConverter(configResponse.data);
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
    const ticketResponse: AxiosResponse = yield call(api.getTicket, action.payload);
    const ticketData = ticketResponse.data as unknown as TicketResponse;
    yield put(actions.fetchTicketSuccess(ticketData))    
  } catch (error: any) {
    yield put(actions.fetchTicketFailed(error));
  }
}