import { createGlobalStyle } from "styled-components";


export interface ThemeType {
    borderRadius: string
    color: string
    background:string
    colors: {
      main: string;
      secondary: string;
    };
  }


export const darkTheme = { color: "black", background: "white", left: "1px",  gradientColor: "#D9AFD9", gradientImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);" };
export const LightTheme = { color: "white", background: "black", left: "30px", gradientColor: "#FF3CAC", gradientImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);" };

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
    padding: 50px;
    padding-top: 15px;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 20px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  
`;
