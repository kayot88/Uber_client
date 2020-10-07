import React from "react";
import { graphql } from "react-apollo";
import { myTheme } from "src/my-theme";
import { ThemeProvider } from "styled-components";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }: any) => {
  return (
    <ThemeProvider theme={myTheme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
  );
};

export default graphql(IS_LOGGED_IN)(AppContainer);
