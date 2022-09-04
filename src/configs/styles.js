import { StyleSheet } from "react-native";
import { loginStyles } from "./loginStyles";

export const createStyles = (theme) => {
  const styles = StyleSheet.create({
    ...theme,
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
  });

  return styles;
};
