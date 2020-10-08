import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AddPlace } from "../Routes/AddPlace";
import { EditAccount } from "../Routes/EditAccount";
import { FindAddress } from "../Routes/FindAddress";
import { Home } from "../Routes/Home";
import Login from "../Routes/Loign";
import PhoneLoginPresenter from "../Routes/PhoneLogin";
import { Places } from "../Routes/Places";
import { Ride } from "../Routes/Ride";
import { Settings } from "../Routes/Settings";
import SocialLogin from "../Routes/SocialLogin";
import { VerifyPhoneNumber } from "../Routes/VerifyPhoneNumber";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <BrowserRouter>
      {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </BrowserRouter>
  );
};

const LoggedOutRoutes: React.FC<any> = () => (
  <Switch>
    <Route path={"/"} exact component={Login} />
    <Route path={"/phone-login"} component={PhoneLoginPresenter} />
    <Route
      path={"/verify-phone-number/:number"}
      component={VerifyPhoneNumber}
    />
    <Route path={"/social-login"} component={SocialLogin} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const LoggedInRoutes: React.FC<any> = () => (
  <Switch>
    <Route path={"/"} exact component={Home} />
    <Route path={"/add-place"} component={AddPlace} />
    <Route path={"/edit-account"} component={EditAccount} />
    <Route path={"/places"} component={Places} />
    <Route path={"/ride"} component={Ride} />
    <Route path={"/settings"} component={Settings} />
    <Route path={"/find-address"} component={FindAddress} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
