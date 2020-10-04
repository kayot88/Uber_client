import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600&display=swap');
 * {
   box-sizing:border-box,
 }
   body{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
 a {
   color: inherit;
   text-decoration: none 
 }
 input, button {
   &:focus,&:active{
     outline:none
   } 
 }
`;
