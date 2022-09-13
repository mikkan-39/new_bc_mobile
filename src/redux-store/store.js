import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './reducers';
import reactotron from '../../ReactotronConfig';
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  // for logging with reactotron
  enhancers: [reactotron.createEnhancer()],
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(mySaga)

export default store;