import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './src/components/stackNavigator';
import { Provider } from 'react-redux';
import store from './src/redux-store/store';

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>{StackNavigator()}</NavigationContainer>
    </Provider>
  );
}
