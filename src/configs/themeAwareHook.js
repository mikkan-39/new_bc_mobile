import React from "react";
import { useTheme } from "./themeProvider";
import { createStyles } from "./styles";

// Creating our custom hook
const themeAwareStyles = () => {
  // Consume the provided value of our theme context
  const { theme } = useTheme();

  // Generate the object based on the current theme
  // We're using the React.useMemo hook for optimization,
  // the object will be re-generated if the theme changes
  // or the generator function reference changes
  const ThemeAware = React.useMemo(() => createStyles(theme), [createStyles, theme]);
  return ThemeAware;
}

export { themeAwareStyles }