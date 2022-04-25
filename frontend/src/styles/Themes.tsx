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
    transition: background 0.3s ease-in;
  }
  h1 {
      color: ${(props) => props.theme.color};
      transition: color 0.3s ease-in;
  }
  p {
    color: ${(props) => props.theme.color};
    transition: color 0.3s ease-in;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  
`;
