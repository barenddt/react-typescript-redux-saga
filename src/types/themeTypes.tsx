export interface ThemeType {
  palette: Colors;
}

export interface Colors {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  text: TextColors;
  backgrounds: BackgroundColors;
}

export interface TextColors {
  primary: string;
  secondary: string;
  light: string;
  disabled: string;
}

export interface BackgroundColors {
  light: string;
  dark: string;
}

export type ColorOptions = "primary" | "secondary" | "error" | "warning" | "success" | "info";
