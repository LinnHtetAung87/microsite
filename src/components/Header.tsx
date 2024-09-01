import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg'; // Adjust the path as needed

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;




const Navigation = styled.nav`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const Header = () => (
  <HeaderContainer>
    
    <Navigation>
      <a href="#discover-more">Discover More</a>
    </Navigation>
  </HeaderContainer>
);

export default Header;
