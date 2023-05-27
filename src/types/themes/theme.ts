export interface ThemeTypes {
  dark: object;
  light: object;
}

export interface ColorsType {
  background: string;
  secondBackground: string;
  textColor: string;
  mainColor: string;
}

export interface ThemeProps {
  theme?: ColorsType;
}

export type Types = "dark" | "light";
