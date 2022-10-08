import React from "react";
import { Appearance, StatusBar } from "react-native";
import reactotron from "reactotron-react-native";
import { LIGHT_THEME, DARK_THEME } from "./themesConstants";

const initialScheme = Appearance.getColorScheme();
const initialTheme = initialScheme == "light" ? LIGHT_THEME : DARK_THEME;

const Context = React.createContext({
  theme: initialTheme,
});

export const ThemeProvider = React.memo((props) => {
  const [theme, setTheme] = React.useState(initialTheme);
  StatusBar.setBarStyle(initialTheme.statusbar, true);

  const ToggleThemeCallback = React.useCallback((event) => {
    setTheme((currentTheme) => {
      switch (event.colorScheme) {
        case "light":
          StatusBar.setBarStyle(LIGHT_THEME.statusbar, true);
          return LIGHT_THEME;
        case "dark":
          StatusBar.setBarStyle(DARK_THEME.statusbar, true);
          return DARK_THEME;
        default:
          return currentTheme;
      }
    });
  }, []);

  Appearance.addChangeListener(ToggleThemeCallback);

  return (
    // can use useMemo on theme if necessary
    <Context.Provider value={{ theme }}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
