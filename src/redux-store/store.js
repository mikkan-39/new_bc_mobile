import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './reducers';
import reactotron from '../../ReactotronConfig';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  enhancers: [reactotron.createEnhancer()]
});

export default store;