import reactotron from 'reactotron-react-native';
import * as types from './constants'

const initialState = {
  error: null,
  authorized: false,
  configured: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.LOGIN_SUCCESS:
      return { ...state, authorized: true };
    case types.FETCH_CONFIG_SUCCESS:
      return { ...state, configured: true };

    case types.LOGIN_FAILED:
    case types.FETCH_CONFIG_FAILED:
      return { ...state, error: action.payload};
    
    case types.FETCH_CONFIG_REQUEST:
    case types.REQUEST_LOGIN:
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