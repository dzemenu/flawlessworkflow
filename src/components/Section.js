import React from "react";
import styled from "styled-components";
import ceo from "../assets/images/ceo.png";
import Fade from "react-reveal/Fade";
const Section = () => {
  var x= window.matchMedia("(max-width: 700px)")
  return (
    <Container>
      <TextGroup>
        <MainText>Own your time and have the freedom</MainText>
        <MainText>to focus on your core objectives</MainText>
        <SubTitle>A programming service that automates your tasks,</SubTitle>
        <SubTitle>
          saving you hours everyday to focus on what matters to you
        </SubTitle>
        <ButtonGroup>
          <Button>Free Consultation</Button>
        </ButtonGroup>
        <FadeDiv>
         {x&&<Fade left>
            <h2>Have your application working for you</h2>
            <h2>Go from busy to productive ,stress free and efficent</h2>
          </Fade>
          }
        </FadeDiv>
      </TextGroup>
    </Container>
  );
};

export default Section;
const FadeDiv = styled.div`
 padding-left: 10%;
  padding-right: 50%;  color: #e55f03;
`;
const ButtonGroup = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 1000px;
`;
const Button = styled.button`
  background: #0b7ad1;
  color: white;

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  // border: 2px solid palevioletred;
  border-radius: 15px;
  cursor: pointer;
`;
const SubTitle = styled.h3`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  color: white;
  padding-left: 10%;
  padding-right: 50%;
  font-weight: 600;
  font-size: 20px;
`;
const TextGroup = styled.div`
  padding-top: 100px;
`;
const MainText = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  color: white;
  padding-left: 100px;
  padding-right: 500px;

  font-size: 50px;
`;
const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${ceo});
  background-color: black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  //opacity:0.5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
