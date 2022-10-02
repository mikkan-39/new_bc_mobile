import { StyleSheet } from "react-native";
import { loginStyles } from "./loginStyles";
import { tabStyles } from "./tabStyles";
import { StyleStorage, Theme } from "./themesConstants";
import { updaterStyles } from "./updaterStyles";

export const createStyles = (theme: Theme) => {
  return {
    login: loginStyles(theme),
    tabScreen: tabStyles(theme),
    updater: updaterStyles(theme),
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
    tabBar: {
      tabBarStyle: {
        backgroundColor: theme.surfaceColor,
      },
      tabBarLabelStyle: {
        color: theme.textColor,
      },
    },
  };
};
