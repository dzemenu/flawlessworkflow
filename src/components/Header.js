import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <Container>
      <Menu>
        <Logo><img src={logo} alt=''/></Logo>
        <RightMenu>
            <h3>home</h3>
            <h3>services</h3>
            <h3>about us</h3>
            <h3>news & blog</h3>
            <Button>contact us</Button>

        </RightMenu>
      </Menu>
    </Container>
  );
};

export default Header;
const Button=styled.button`
background: #0B7AD1;
  color:white;

  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
 border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  
`;
const Container = styled.div`
 min-height: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
 // box-shadow: 5px 4px #888888;`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Logo=styled.div`
img{
    height:40px
}
`
const RightMenu=styled.div`
display: flex;
  align-items: center;
  h3 {
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: 600;
    color:red;
  }`