import { PayloadAction } from '@reduxjs/toolkit';
import reactotron from 'reactotron-react-native';
import * as types from './constants'

const initialState = {
  error: null,
  authorized: false,
  configured: false,
}

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {

    case types.LOGIN_SUCCESS:
      return { ...state, authorized: true };
    case types.FETCH_CONFIG_SUCCESS:
      return { ...state, configured: true };

    case types.LOGIN_FAILED:
    case types.FETCH_CONFIG_FAILED:
      return { ...state, error: action.payload};
    
    // these are for redux-saga, 
    // which will call one of sagaFunctions.
    case types.FETCH_CONFIG_REQUEST:
    case types.REQUEST_LOGIN:
    case types.DEV_APP_INIT:
      return state;

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
}