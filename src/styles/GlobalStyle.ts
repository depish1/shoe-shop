import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
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
        font-family: 'Roboto', sans-serif;
        height:100%;
    }
    button {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1rem;
    }
`;

export default GlobalStyle;
