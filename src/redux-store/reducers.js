import reactotron from 'reactotron-react-native';
import * as types from './constants'

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
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