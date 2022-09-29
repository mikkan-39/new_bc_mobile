import { PayloadAction } from '@reduxjs/toolkit';
import reactotron from 'reactotron-react-native';
import * as types from './constants'
import { Androidconfig, TableResponse } from './helpers';

interface TableStorage {
  [key: string]: TableResponse
}

const initialState = {
  error: new Error(),
  authorized: false,
  configured: false,
  interfaceConfig: {} as Androidconfig,
  tableStorage: {} as TableStorage,
}

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {

    case types.LOGIN_SUCCESS:
      return { ...state, authorized: true };
    case types.FETCH_CONFIG_SUCCESS:
      reactotron.log!(action.payload)
      return {
        ...state,
        configured: true,
        interfaceConfig: action.payload as unknown as Androidconfig,
      };
    case types.FETCH_TABLE_SUCCESS:
      {
        const table = action.payload as unknown as TableResponse;
        const { tableStorage } = state
        tableStorage[table.Table] = table
        return {
          ...state,
          tableStorage
        };
      };

    case types.LOGIN_FAILED:
    case types.FETCH_CONFIG_FAILED:
    case types.FETCH_TABLE_FAILED:
      return { ...state, error: action.payload as unknown as Error};
    
    // these are for redux-saga, 
    // which will call one of sagaFunctions.
    case types.FETCH_CONFIG_REQUEST:
    case types.REQUEST_LOGIN:
    case types.DEV_APP_INIT:
    case types.FETCH_TABLE_REQUEST:
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