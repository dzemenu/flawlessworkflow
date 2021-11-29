import React from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Section5 = () => {
  return (
    <Container>
      <MainDiv>
        {" "}
       
        <h1> <IconDiv>
          <FaQuoteLeft />
        </IconDiv>
          30% or more of current office work activities can be automated by with
          available technology...
        </h1>{" "}
      </MainDiv>
      <vl></vl>
      <MainDiv>
        <h3>

          …Organizations that automate their business activities can build
          strong advantages. By maximizing performance of employees, companies
          can simultaneously become more efficient and more innovative, raising
          both top- and bottom-line performance. Automation also enables
          massively scaled organizations that can grow rapidly yet remain agile
          and responsive Harvard Business Review
  

        </h3>
        <IconDiv>
          <FaQuoteRight />
        </IconDiv>
      </MainDiv>
    </Container>
  );
};

export default Section5;
const Container = styled.div`
margin-top:20px;
  background-color: #efefef;
  display: flex;
  width: 100%;
  @media(max-width: 768px) {flex-direction: column;};

  vl {
    border: 0;
  margin: 0;
  border-left: 5px solid #13AFF0;
  height: 200px;
  float: left;
  margin-top:30px;
 
  }
  justify-content: space-between;
`;
const IconDiv = styled.div`
  font-size: 50px;
`;
const MainDiv = styled.div`
  width: 40%;
  margin-left:20px;
`;
