import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface StyleStorage {
  [styleName: string]: StyleStorage | ViewStyle | ImageStyle | TextStyle;
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

const DEFAULT_ROUNDING = 15;

export const LIGHT_THEME: Theme = {
  id: "default-light",
  accentColor: "#976dd7",
  onAccentColor: "#fff",
  surfaceColor: "#fff",
  backgroundColor: "#eee",
  statusbar: "dark-content",
  textColor: "#000",
  fontSize: 20,
  rounding: DEFAULT_ROUNDING,
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
  rounding: DEFAULT_ROUNDING,
};
