import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo3";
import App from "./Components/App";
import { Reset } from "styled-reset";
import { GlobalStyles } from "./global_styles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Reset />
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
