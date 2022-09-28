import { put } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import reactotron from "reactotron-react-native";

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
    reactotron.log!(loginResponse.data);
    yield put(actions.loginSuccess());
    yield put(actions.fetchConfigRequest());
  } catch (e: any) {
    yield put(actions.loginFailed(e));
  }
}

export function* getMobileConfig(action: PayloadAction) {
  try {
    const configResponse: AxiosResponse = yield call(api.getConfig);
    reactotron.log!(configResponse.data);
    yield put(actions.fetchConfigSuccess());
  } catch (e: any) {
    yield put(actions.fetchConfigFailed(e));
  }
}
