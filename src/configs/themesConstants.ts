import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const defaultRounding = 15;

interface HeaderStyle {
  headerStyle?: any;
  headerTintColor?: any;
  headerShown?: boolean;
}

export interface StyleStorage {
  [styleName: string]:
    | StyleStorage
    | ViewStyle
    | ImageStyle
    | TextStyle
    | HeaderStyle;
}

export interface Theme {
  id: string;
  accentColor: string; // bright, saturated
  onAccentColor: string; // accentColor when selected
  surfaceColor: string; // elements above page's background
  backgroundColor: string; // page backgound
  statusbar: "light-content" | "dark-content"; // statusbar mode
  textColor: string;
  fontSize: number;
  rounding: number;
}

export const LIGHT_THEME: Theme = {
  id: "default-light",
  accentColor: "#976dd7",
  onAccentColor: "#fff",
  surfaceColor: "#fff",
  backgroundColor: "#eee",
  statusbar: "dark-content",
  textColor: "#000",
  fontSize: 20,
  rounding: defaultRounding,
};

export const DARK_THEME: Theme = {
  id: "default-dark",
  accentColor: "#774ec2",
  onAccentColor: "#fff",
  surfaceColor: "#333",
  backgroundColor: "#222",
  statusbar: "light-content",
  textColor: "#fff",
  fontSize: 20,
  rounding: defaultRounding,
};
