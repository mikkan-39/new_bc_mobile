import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants';
import * as sagas from './sagaFunctions'


function* mySaga() {
    yield takeLatest(actionTypes.DEV_APP_INIT, sagas.devInit);
    yield takeLatest(actionTypes.REQUEST_LOGIN, sagas.login);
    yield takeLatest(actionTypes.LOGIN_SUCCESS, sagas.getMobileConfig)
    yield takeEvery(actionTypes.FETCH_TABLE_REQUEST, sagas.getTable);
}


export default mySaga;