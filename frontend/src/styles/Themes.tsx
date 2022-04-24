import { createGlobalStyle, useTheme } from "styled-components";


export interface ThemeType {
    borderRadius: string
    color: string
    background:string
    colors: {
      main: string;
      secondary: string;
    };
  }


export const darkTheme = { color: "black", background: "white", left: "1px" };
export const LightTheme = { color: "white", background: "black", left: "30px" };

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  body {
    background: ${(props) => props.theme.background} !important;
  }
  h1 {
      color: ${(props) => props.theme.color};
  }
  p {
    color: ${(props) => props.theme.color};
  }
  
`;
