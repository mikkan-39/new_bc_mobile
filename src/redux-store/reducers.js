import * as types from './constants'

const initialState = {
  authorized: false,
}

export default (state = initialState, action) => {
  console.log(`action: ${action.type}`);
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return {
        ...state,
        authorized: true,
      };
    default:
      return state;
  }
}