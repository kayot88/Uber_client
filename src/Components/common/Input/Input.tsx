import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: none;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.theme.grey};
  &::placeholder {
    color: ${(props) => props.theme.grey};
    font-weight: 300;
  }
  transition: border-bottom 0.5s linear;
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
`;

const Input: React.FC<any> = ({ placeholder }) => {
  return <Container placeholder={placeholder} />;
};

export default Input;
