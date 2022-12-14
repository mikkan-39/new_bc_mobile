import React from "react";
import { useTheme } from "../configs/themeProvider";
import { createStyles } from "../configs/styles";

// Creating our custom hook
const useStyles = () => {
  // Get current theme from our theme context
  const { theme } = useTheme();

  // Generate the object based on the current theme
  // We're using the React.useMemo hook for optimization,
  // the object will be re-generated if the theme changes
  // or the createStyles changes
  const ThemeAware = React.useMemo(
    () => createStyles(theme),
    [createStyles, theme]
  );
  return ThemeAware;
};

export { useStyles };
