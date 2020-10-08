import React from "react";
import { Helmet } from "react-helmet";
import ArrowBack from "src/Components/common/ArrowBack";
import Input from "src/Components/common/Input";
import countries from "src/Components/countries";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  position: relative;
  height: 100vh;
  margin: auto;
  border: solid 1px ${(props) => props.theme.grey};
  border-radius: 5px;
`;

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;

const TextDiv = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  right: 50px;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);

  &:hover {
    /* transform: rotate(90deg); */
  }
`;
const Form = styled.form``;
const ArrowBackExtended = styled(ArrowBack)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const CountrySelect = styled.select`
  font-size: 20px;
  color: "#2c3e50";
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  border: 0;
  font-family: "Maven Pro";
  margin-bottom: 20px;
  width: 90%;
`;

const CountryOption = styled.option``;

export const PhoneLoginPresenter = () => {
  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Phone Login | Number</title>
        </Helmet>

        <ArrowBackExtended goBack={"/login"} />
        <TextDiv>
          <div>Enter a phone number</div>
        </TextDiv>
        <CountrySelect>
          {countries.map((country, index) => (
            <CountryOption key={index} value={country.dial_code}>
              {country.flag}
              {country.name}({country.dial_code})
            </CountryOption>
          ))}
        </CountrySelect>
        <Form>
          <Input placeholder={"095-452-46-35"} />
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={"white"}
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </Button>
        </Form>
      </Container>
    </Wrapper>
  );
};
