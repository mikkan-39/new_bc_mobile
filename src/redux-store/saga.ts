import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants';
import * as sagas from './sagaFunctions'


function* mySaga() {
    yield takeLatest(actionTypes.REQUEST_LOGIN, sagas.login);
    yield takeLatest(actionTypes.LOGIN_SUCCESS, sagas.getMobileConfig)
}


export default mySaga;