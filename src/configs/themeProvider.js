import React from "react";
import { Appearance, StatusBar } from "react-native";
import { LIGHT_THEME, DARK_THEME } from "./styles";

const Context = React.createContext({
  //TODO: move Appearance here
  theme: LIGHT_THEME,
});

export const ThemeProvider = React.memo((props) => {
  const initialScheme = Appearance.getColorScheme();
  const initialTheme = initialScheme == 'light' ? LIGHT_THEME : DARK_THEME;
  const [theme, setTheme] = React.useState(initialTheme);
  StatusBar.setBarStyle(initialTheme.statusbar, true);

  //TODO: should use useCallback ?
  const ToggleThemeCallback = (event) => {
    setTheme((currentTheme) => {
      switch (event.colorScheme) {
        case 'light':
          StatusBar.setBarStyle(LIGHT_THEME.statusbar, true);
          return LIGHT_THEME;
        case 'dark':
          StatusBar.setBarStyle(DARK_THEME.statusbar, true);
          return DARK_THEME;
        default:
          return currentTheme;
      }
    });
  };

  Appearance.addChangeListener(ToggleThemeCallback);

  return (
    //TODO: should use useMemo ?
    <Context.Provider value={{ theme }}>
      {props.children}
    </Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);