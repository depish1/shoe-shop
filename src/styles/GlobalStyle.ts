import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap');
    html {
        box-sizing: border-box;
        height:100%;
    }
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'PT Sans', sans-serif;
        height:100%;
    }
    button {
        font-family: 'PT Sans', sans-serif;
        font-size: 1.1rem;
    }
`;

export default GlobalStyle;
