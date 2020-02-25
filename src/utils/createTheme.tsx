import merge from "deepmerge";

import { ThemeType } from "../types/themeTypes";

export default function createTheme(userTheme: object) {
  function defaultTheme(): ThemeType {
    return {
      palette: {
        primary: "#1f76d2",
        secondary: "#dc004e",
        error: "#f44336",
        warning: "#ff9800",
        success: "#4caf50",
        info: "#2296f3",
        text: {
          primary: "#212121",
          secondary: "#757575",
          disabled: "#9e9e9e",
          light: "white"
        },
        backgrounds: {
          light: "#ffffff",
          dark: "#272c34"
        }
      }
    };
  }

  const theme = merge(userTheme, defaultTheme());

  return theme;
}
