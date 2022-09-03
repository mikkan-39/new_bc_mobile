import * as types from './constants'

const initialState = {
  authorized: false,
}

export default (state = initialState, action) => {
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