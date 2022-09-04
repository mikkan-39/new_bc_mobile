export const loginStyles = (theme) => {
  return {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    imageContainer: {
      padding: 10,
      width: "50%",
      maxWidth: 300,
      marginTop: "30%",
      marginBottom: "10%",
      height: undefined,
      aspectRatio: 1,
      borderRadius: theme.rounding * 2,
      backgroundColor: theme.surfaceColor,
      flexShrink: 2,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    field: {
      padding: 10,
      paddingHorizontal: 15,
      width: "75%",
      height: 50,
      maxWidth: 300,
      marginTop: 25,
      borderRadius: theme.rounding,
      backgroundColor: theme.surfaceColor,
      fontSize: theme.fontSize,
      color: theme.textColor,
    },
    button: {
      width: "50%",
      height: 50,
      maxWidth: 200,
      margin: 25,
      borderRadius: theme.rounding,
      backgroundColor: theme.accentColor,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: theme.fontSize * 1.2,
      color: theme.onAccentColor,
    },
  };
};
