import React, { useEffect } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import StackNavigator from "./src/components/stackNavigator";
import { Provider } from "react-redux";
import store from "./src/redux-store/store";
import { ThemeProvider } from "./src/configs/themeProvider";
import { LIGHT_THEME, DARK_THEME } from "./src/configs/styles";
import { clearAsyncStorage, devAppInit } from "./src/redux-store/actions";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  useEffect(() => {
    if (__DEV__) {
      // store.dispatch(clearAsyncStorage());
      store.dispatch(devAppInit());
    }
  });
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>{StackNavigator()}</NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
