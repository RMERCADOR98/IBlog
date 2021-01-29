import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    ${"" /* background: #E1E2E2; */}
    background:white;
    font-family: 'Raleway', sans-serif;
}
h1{
    font-size:2.2rem;
}

input,button,textarea{
    font-family:"Raleway", sans-serif;
}

`;

export default GlobalStyle;
