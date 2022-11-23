import React from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { StyleStorage, Theme } from "./themesConstants";

export const loginStyles = (theme: Theme): StyleStorage => {
  return {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    helperView: {
      width: 10,
      height: "15%",
      flexShrink: 3,
    },
    helperView2: {
      width: 10,
      maxHeight: "15%",
      height: 25,
      flexShrink: 5,
      minHeight: 0,
    },
    imageContainer: {
      padding: 10,
      width: "50%",
      maxWidth: 300,
      minWidth: 100,
      minHeight: 100,
      // marginTop: "30%",
      // marginBottom: "10%",
      height: undefined,
      aspectRatio: 1,
      borderRadius: theme.rounding * 2,
      backgroundColor: theme.surfaceColor,
      flexShrink: 1,
      shadowColor: theme.accentColor,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
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
      shadowColor: theme.accentColor,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
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
      shadowColor: theme.accentColor,
      shadowOffset: {
        width: 0,
        height: 0, // 24 to match android
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
    },
    text: {
      fontSize: theme.fontSize * 1.2,
      color: theme.onAccentColor,
    },
  };
};
