import { call, put } from 'redux-saga/effects'
import * as actions from './actions'
import * as api from '../api'

export function* login(action) {
   try {
      yield call(api.loginRequest, action.payload);
      yield put(actions.loginSuccess());
      yield put(actions.fetchConfigRequest())
   } catch (e) {
      yield put(actions.loginFailed(e));
   }
}

export function* getMobileConfig(action) {
   try {
      yield call(api.getConfig);
      yield put(actions.fetchConfigSuccess())
   } catch (e) {
      yield put(actions.fetchConfigFailed(e))
   }
}