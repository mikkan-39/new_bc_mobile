import { StyleStorage, Theme } from "./themesConstants";

export const updaterStyles = (theme: Theme): StyleStorage => {
  return {
    ScrollView: {
      flex: 1,
      padding: 10,
      paddingBottom: 0,
    },
    inputContainer: {
      borderRadius: theme.rounding,
      marginBottom: 10,
      padding: 10,
      backgroundColor: theme.surfaceColor,
      minHeight: 20,
    },
    controlContainer: {
      borderRadius: theme.rounding,
      marginBottom: 10,
      padding: 10,
      backgroundColor: theme.surfaceColor,
      minHeight: 30,
    },
    textInput: {
      fontSize: theme.fontSize,
      color: theme.textColor,
    },
    labelText: {
      fontSize: theme.fontSize * 0.75,
      color: theme.textColor,
      opacity: 0.75,
    },
    placeholderControl: {
      fontSize: theme.fontSize,
      color: theme.textColor,
    },
  };
};
