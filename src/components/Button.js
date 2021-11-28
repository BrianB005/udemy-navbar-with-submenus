import React from "react";
import styled from "styled-components";
const Button = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.button`
  padding: 13px 0;
  width: 80%;
  background: black;
  color: white;
  border: 1px solid gray;
  cursor: pointer;
  transition: all 0.4s linear;
  opacity: 0.85;
  margin: 12px;
  &:hover {
    opacity: 1;
  }
`;

export default Button;
