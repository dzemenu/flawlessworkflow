import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
const Section2 = () => {
    return (
        <Container>
            <h1>Automate your workflow with the power of programming
</h1>
<Fade left><h4>From simple tasks like filling out online forms to complex work procedures like administration, documentation, data gathering, analyzing and processing,business management, see others.</h4></Fade>
        </Container>
    )
}

export default Section2
const Container=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;margin-left:50px ;
h1{
    font-size:2.4rem;
    align-items:center;
}
h4{
    font-size:30px;
    font-weight:100;
    align-items:center;
}
`;
