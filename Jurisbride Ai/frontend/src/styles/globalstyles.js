import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    * {
        text-align: center;
        color: white;
    }
    * 
    body {
        font-family: Arial, sans-serif;
        background-color: black;
    }

    nav ul li a {
        text-decoration: none; 
    }
`;


export default Globalstyles;
