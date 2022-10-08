import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./reducers";
import reactotron from "../../ReactotronConfig";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: reactotron.createSagaMonitor!(),
});

const store = configureStore({
  reducer: sessionReducer,
  // for logging with reactotron
  enhancers: [reactotron.createEnhancer!()],
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
