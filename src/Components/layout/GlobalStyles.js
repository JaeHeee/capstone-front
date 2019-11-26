import {createGlobalStyle} from "styled-components";
import {Reset} from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${Reset};
    * {
        box-sizing: border-box;
    }
    body {
        height: 600px;
        background-color:#34495e;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button:hover {
        cursor: pointer;
    }
    input[type = "submit"] {
        cursor: pointer
    }
    input[type = "button"] {
        cursor: pointer;
    }
`;

export default GlobalStyle;
