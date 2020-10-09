import React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImage from "../../../images/bg.png";

interface IProps extends RouteComponentProps<any> {}

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  position: relative;
  height: 100vh;
  margin: auto;
  border: solid 1px ${(props) => props.theme.grey};
  border-radius: 5px;
`;

const Header = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url(${bgImage});
`;

const Logo = styled.div`
  height: 100px;
  width: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -4px 2px 61px -3px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h1``;

const Footer = styled.div`
  height: 30%;
`;
const Subtitle = styled.h2`
  margin-left: 30px;
  font-size: 30px;
`;
const FakeInput = styled.div`
  margin: 30px;
  font-size: 25px;
`;
const Grey = styled.span`
  margin-left: 10px;
  color: ${(props) => props.theme.grey};
`;
const PhoneLogin = styled.div`
  padding: 20px;
`;
const SocialLogin = styled.div`
  border-top: 1px solid ${(props) => props.theme.grey};
  padding: 30px 20px;
  cursor: pointer;
`;

const SocialLink = styled.span`
  color: ${(props) => props.theme.blue};
  font-size: 20px;
`;

const LoginPresenter: React.FC<IProps> = () => {
  return (
    <Container>
      <Helmet>Login | Nuber</Helmet>
      <Header>
        <Logo>
          <Title>Nuber</Title>
        </Logo>
      </Header>
      <Footer>
        <Link to={"/phone-login"}>
          <PhoneLogin>
            <Subtitle>Get moving with Nuber</Subtitle>
            <FakeInput>
              <span role="img" aria-label="flag">
                🎌
              </span>
              +38 <Grey>Enter your mobie number</Grey>
            </FakeInput>
          </PhoneLogin>
        </Link>
        <Link to={"/social-login"}>
          <SocialLogin>
            <SocialLink>Or connect with social link</SocialLink>
          </SocialLogin>
        </Link>
      </Footer>
    </Container>
  );
};

export default LoginPresenter;
