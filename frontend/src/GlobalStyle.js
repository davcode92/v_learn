import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    *{
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url("https://e0.pxfuel.com/wallpapers/229/568/desktop-wallpaper-node-js.jpg");
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }

    footer {
        background-color: #1E90FF;
        text-align: center;
        margin-top: auto;
        color: white;
        padding: 8px;
        margin-top: 551px;
      }

`;
