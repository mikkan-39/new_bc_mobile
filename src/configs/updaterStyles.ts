import { StyleStorage, Theme } from "./themesConstants";

export const updaterStyles = (theme: Theme): StyleStorage => {
  return {
    ScrollView: {
      flex: 1,
      padding: 10,
      paddingBottom: 0,
    },
    controlContainer: {
      borderRadius: theme.rounding,
      marginBottom: 10,
      padding: 10,
      backgroundColor: theme.surfaceColor,
      flex: 1,
      minHeight: 75,
      justifyContent: "space-between",
    },
    loaderContainer: {
      // should mostly inherit controlContainer
      borderRadius: theme.rounding,
      marginBottom: 10,
      padding: 10,
      backgroundColor: theme.surfaceColor,
      flex: 1,
      minHeight: 85,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    labelText: {
      fontSize: theme.fontSize * 0.75,
      color: theme.textColor,
      opacity: 0.75,
      alignSelf: "flex-end",
    },
    placeholderText: {
      fontSize: theme.fontSize,
      color: theme.textColor,
    },
  };
};
