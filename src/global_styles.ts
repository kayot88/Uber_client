import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
/* // tslint:disable-next-line */
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600&display=swap');
/* @font-face {
font-family: 'Maven Pro', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600;800&display=swap');
} */
${reset}
  * {
      box-sizing: border-box;
  }
  body{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a{ 
      color:inherit;
      text-decoration:none;
  }
  input,
  button{&:focus,&:active{outline:none}
  }
  h1,h2,h3,h4,h5,h6{
      font-family:'Maven Pro', sans-serif;
  }
`;
