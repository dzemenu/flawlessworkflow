import React from 'react'
import styled from 'styled-components'
import automation from '../assets/images/automation.png'
import goreth from '../assets/images/Groeth.png'
import task from '../assets/images/Task.png'
const Section3 = () => {
    return (
        <Container>
            <DivderDiv>
                <img src={automation} alt=''/>
                <h1>No new applications or monthly fees </h1>
                <h4>We program what you have, to work for you. No need for more software licenses or monthly fees.</h4>
            </DivderDiv>
            <DivderDiv>
                <img src={task} alt=''/>
                <h1>No programming knowledge or IT department needed</h1>
                <h4>We program what you have, to work for you. No need for more software licenses or monthly fees.</h4>
 <Button >Get a free Consultation</Button>
            </DivderDiv>
            <DivderDiv>
                <img src={goreth} alt=''/>
                <h1>Maximize performance and efficiency </h1>
                <h4>We program what you have, to work for you. No need for more software licenses or monthly fees.</h4>

            </DivderDiv>

        </Container>
    )
}

export default Section3
const Container=styled.div`
display:flex;
width:100%;
margin-left:50px ;
justify-content:space-between;
@media(max-width: 768px) {flex-direction: column;};

h1{
    font-size:20px;
};
h4{
    font-size:30px;
    font-weight:100;
}
`
const DivderDiv=styled.div`
width:33%`
const Button=styled.button`
background: #0B7AD1;
  color:white;

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
 // border: 2px solid palevioletred;
  border-radius: 15px;
  cursor: pointer;
`;