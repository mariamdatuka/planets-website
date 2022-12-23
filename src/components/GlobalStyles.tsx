import { createGlobalStyle} from "styled-components";
import stars from '../assets/background-stars.svg'


export const GlobalStyle=createGlobalStyle`

   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body {
    color: #fff;
    font-family:'League Spartan', sans-serif;
    background-color: #070724;
    background-image: url(${stars});
    width:100vw;
    background-size: 100%;
    overflow:hidden;
    }
`