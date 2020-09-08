import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

*,
::after,
::before {
  box-sizing: inherit;
}
#root {
  background-image: url(https://cdn.pixabay.com/photo/2020/06/25/06/32/money-5338733__340.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: auto;
  height: 100vh;
};

`;
