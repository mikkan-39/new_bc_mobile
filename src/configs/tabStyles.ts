import { StyleStorage, Theme } from "./themesConstants";

export const tabStyles = (theme: Theme): StyleStorage => {
  return {
    ScrollView: {
      flex: 1,
      padding: 10,
      paddingBottom: 0,
    },
    tableElement: {
      container: {
        borderRadius: theme.rounding,
        marginBottom: 10,
        padding: 10,
        backgroundColor: theme.surfaceColor,
        minHeight: 50,
      },
      containerSelected: {
        borderRadius: theme.rounding,
        marginBottom: 10,
        padding: 10,
        backgroundColor: theme.surfaceColor,
        minHeight: 50,
        shadowColor: theme.accentColor,
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        // borderWidth: 2,
        // borderColor: theme.accentColor,
        // borderStyle: "dashed",
      },
      upperRow: {
        flexDirection: "row-reverse",
      },
      text: {
        color: theme.textColor,
        fontSize: theme.fontSize,
        marginTop: 10,
      },
      rightText: {
        color: theme.textColor,
        fontSize: theme.fontSize * 0.75,
      },
    },
  };
};
