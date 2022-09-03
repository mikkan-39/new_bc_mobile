import React from 'react';
import { NavigationContainer, useTheme } from "@react-navigation/native";
import StackNavigator from './src/components/stackNavigator';
import { Provider } from 'react-redux';
import store from './src/redux-store/store';
import { ThemeProvider } from './src/configs/themeProvider';
import { LIGHT_THEME, DARK_THEME } from './src/configs/styles';
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>{StackNavigator()}</NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
