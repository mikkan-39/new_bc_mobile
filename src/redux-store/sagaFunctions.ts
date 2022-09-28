import { put } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

const call: any = Effects.call // for TS

export function* login(action: PayloadAction) {
  try {
    const loginResponse: AxiosResponse = yield call(
      api.loginRequest,
      action.payload
    );
    yield put(actions.loginSuccess());
    yield put(actions.fetchConfigRequest());
  } catch (e: any) {
    yield put(actions.loginFailed(e));
  }
}

export function* getMobileConfig(action: PayloadAction) {
  try {
    yield call(api.getConfig);
    yield put(actions.fetchConfigSuccess());
  } catch (e: any) {
    yield put(actions.fetchConfigFailed(e));
  }
}
