import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { PhoneLoginPresenter } from "./PhoneLoginPresenter";
export interface IState {
  countryCode: string;
  phoneNumber?: string;
}
interface IProps {
  name: string;
  value: any;
}

type AllProps = RouteComponentProps & IState & IProps;
class PhoneLoginContainer extends Component<AllProps> {
  state: IState = {
    countryCode: "+380",
    phoneNumber: "",
  };

  onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { countryCode, phoneNumber } = this.state;
    console.log(countryCode, phoneNumber);
  };

  onChangeSelect: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = async (event) => {
    const {
      target: { name, value },
    } = event;
    await this.setState({ [name]: value });
  };

  render() {
    return (
      <PhoneLoginPresenter
        countryCode={this.state.countryCode}
        phoneNumber={this.state.phoneNumber}
        onChangeSelect={this.onChangeSelect}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default PhoneLoginContainer;
