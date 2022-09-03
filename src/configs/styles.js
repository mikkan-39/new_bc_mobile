import { StyleSheet } from "react-native";

export const LIGHT_THEME = {
  id: "default-light",
  primary: "#03a9f4",
  onPrimary: "#fff",
  surface: "#fff",
  header: "#fff",
  background: "#dedede",
  statusbar: "dark-content",
  text: "#000",
};

export const DARK_THEME = {
  id: "default-dark",
  primary: "#03a9f4",
  onPrimary: "#fff",
  surface: "#333",
  header: "#333",
  background: "#222",
  statusbar: "light-content",
  text: "#fff",
};

export const createStyles = (theme) => {
  //reactotron.log(theme)
  const styles = StyleSheet.create({
    mainScreenContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background,
    },
    defaultText: {
      color: theme.text,
      fontSize: 20,
    },
    defaultHeader: {
      headerStyle: {
        backgroundColor: theme.header,
      },
      headerTintColor: theme.text,
    },
  });
  
  return styles;
};