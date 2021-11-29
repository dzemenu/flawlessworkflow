import React from "react";
import styled from "styled-components";
import { BsCheck2 } from "react-icons/bs";
const Section4 = () => {
  return (
    <Container>
      <div>
        <Card>
          <IconDiv>
            <BsCheck2 />
          </IconDiv>
          <h4>Does it take longer than 10 minutes?</h4>
        </Card>
        <Card>
          <IconDiv>
            <BsCheck2 />
          </IconDiv>
          <h4>Do you have to do it at least once a week?</h4>
        </Card>
        <Card>
          <IconDiv>
            <BsCheck2 />
          </IconDiv>
          <h4>Can it be decribed by instructions?</h4>
        </Card>
        <Card>
          <IconDiv>
            <BsCheck2 />
          </IconDiv>
          <h4>Does it involve data or information?</h4>
        </Card>
      </div>
      <SideDiv>IF IT'S NOT AUTOMATED THEN IT'S WASTING YOUR TIME</SideDiv>
    </Container>
  );
};

export default Section4;
const Container = styled.div`
  border-top: 20px solid #ff5f03;
  border-bottom: 20px solid #ff5f03;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 100%;
  margin-top: 20px;
  height:150px;
  margin-left: 80px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;
const IconDiv = styled.div`
  justify-content: center;
  font-size: 50px;
`;
const SideDiv = styled.div`
  justify-content: center;
  width: 50%;
  font-weight: 1000;
  font-size: 70px;
  text-shadow: 2px 5px;
  margin: auto;
`;
