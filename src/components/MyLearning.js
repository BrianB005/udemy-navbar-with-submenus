import React from "react";
import styled from "styled-components";
import Button from "./Button";
import SingleCourse from "./SingleCourse";
const MyLearning = () => {
  return (
    <Wrapper>
      <SingleCourse
        image="https://img-c.udemycdn.com/course/240x135/3046128_b850_3.jpg"
        title="Modern JavaScript For React JS-ES6"
      />
      <SingleCourse
        image="https://img-c.udemycdn.com/course/240x135/4165250_edef_2.jpg"
        title="Android App Development BootCamp with Kotlin"
      />
      <SingleCourse
        image="https://img-c.udemycdn.com/course/240x135/4245076_4c6b.jpg"
        title="Ethical Hacking :Introduction to Exploits"
      />
      <SingleCourse
        image="https://img-c.udemycdn.com/course/240x135/4038718_de65_2.jpg"
        title="Complete Introduction to Cyber Security 2021"
      />
      <Button text="Go to My Learning"></Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 300px;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 70px;
  right: -8px;
  line-height: 1.4;

  font-size: 18px;
  font-weight: 800;
  padding: 6px;
  z-index: 90;
  background: white;
`;

export default MyLearning;
