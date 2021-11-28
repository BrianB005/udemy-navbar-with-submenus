import React from "react";
import styled from "styled-components";
const SingleCourse = ({ image, title }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Title>{title}</Title>
      <Button>Start learning</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const Title = styled.h4`
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  text-align: left;
  margin-left: 5px;
  cursor: pointer;
  font-size: 15px;
`;

const Button = styled.a`
  position: absolute;
  color: blue;
  top: 59px;
  left: 77px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 13px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export default SingleCourse;
