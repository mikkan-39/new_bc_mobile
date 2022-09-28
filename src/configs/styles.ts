import { StyleSheet } from "react-native";
import { loginStyles } from "./loginStyles";
import { Theme } from "./themesConstants";

export const createStyles = (theme: Theme) => {
  return {
    login: loginStyles(theme),
    defaultScreenBG: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    defaultText: {
      color: theme.textColor,
      fontSize: 20,
    },
    screenWithHeader: {
      headerStyle: {
        backgroundColor: theme.surfaceColor,
      },
      headerTintColor: theme.textColor,
    },
    screenWithoutHeader: {
      headerShown: false,
    },
  };
};
