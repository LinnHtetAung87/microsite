import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import img800x368 from '../assets/img-800x368.jpg'; // Adjust the path as needed
import logo from '../assets/logo.svg'; // Adjust the path as needed

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const fadeInBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const SlideContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${img800x368}) no-repeat center center;
  background-size: cover;
  position: relative;
  color: white;
  animation: ${fadeInBackground} 2s ease-in-out;

  /* Add a gradient overlay for an attractive effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Darker gradient for a more dramatic effect */
    z-index: 1;
  }

  @media (max-width: 767px) {
    background-image: url('../assets/img-800x368.jpg');
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 2;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 80px;
  width: 100px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  z-index: 10;
  animation: ${fadeIn} 1s ease-in-out;
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

const Logo = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  filter: invert(1) brightness(2);
`;

const Navigation = styled.nav`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const OverlayText = styled.h2`
  position: absolute;
  top: 30%;
  left: 77%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.secondary}; /* Choose a color for contrast */
  font-size: 230%;
  z-index: 3;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust for smaller screens */
  }
`;


const CarouselContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  overflow: hidden;
  position: relative;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CarouselItem = styled.div<{ isActive: boolean }>`
  flex: 1 0 40%;
  min-width: 300px;
  background: rgba(255, 255, 255, 0.8);
  padding: 50px;
  border-radius: 10px;
  text-align: right;
  animation: ${props => (props.isActive ? fadeIn : fadeOut)} 1.5s ease-in-out;

  @media (max-width: 768px) {
    flex: 1 0 100%;
  }

  h2, p {
    transition: color 0.3s, transform 0.3s;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary}; /* Change text color on hover */
      transform: scale(1.05); /* Slightly enlarge text on hover */
    }
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px; /* Aligns the indicators at the bottom */
  left: 50%;
  transform: translateX(-50%); /* Centers the indicators horizontally */
  display: flex;
  gap: 10px;
  z-index: 3;
`;

const IndicatorButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primary : 'transparent')};
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; /* Glow effect */
  transition: background 0.3s, box-shadow 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.secondary}; /* Brighter glow on hover */
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  centre: 20px; /* Aligns the arrow at the bottom */
  right: 20px;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 3;
  padding: 10px; /* Add padding for better click area */
  border-radius: 50%;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary}; /* Change background on hover */
    color: ${({ theme }) => theme.colors.text}; /* Change text color on hover */
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.secondary}; /* Glow effect on hover */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on smaller screens */
    bottom: 10px;
    right: 10px;
  }
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 20px;
  right: unset;
`;

const Text = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3rem;
  z-index: 2;
  animation: ${fadeIn} 1.5s ease-in-out;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary}; /* Change text color on hover */
  }
`;

const DiscoverMoreLink = styled.a<{ show: boolean }>`
  position: absolute;
  bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;
  z-index: 2;
  display: ${({ show }) => (show ? 'block' : 'none')};
  animation: ${fadeIn} 1.5s ease-in-out;
  transition: transform 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px); /* Add a small upward motion on hover */
  }
`;

// Main Component
const Slidetwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: 'Lorem Ipsum #1', description: 'Donec nec justo eget felis facilisis fermentum.' },
    { title: 'Lorem Ipsum #2', description: 'Aenean dignissim pellentesque felis sed egestas.' },
    { title: 'Lorem Ipsum #3', description: 'Eros pede est, vitae luctus metus libero augue.' },
    { title: 'Lorem Ipsum #4', description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.' },
    { title: 'Lorem Ipsum #5', description: 'Nulla quis lorem ut libero malesuada feugiat.' },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <SlideContainer>
      <HeaderContainer>
        <LogoWrapper>
          <ColorOverlay />
          <Logo src={logo} alt="Logo" />
        </LogoWrapper>
        <Navigation>
          <a href="#discover">Discover More</a>
        </Navigation>
      </HeaderContainer>
      <OverlayText>DONEC NEC JUSTO</OverlayText>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <CarouselItem key={index} isActive={index === currentSlide}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </CarouselItem>
        ))}
      </CarouselContainer>

      <ArrowButtonLeft onClick={prevSlide}>&#10094;</ArrowButtonLeft>
      <ArrowButton onClick={nextSlide}>&#10095;</ArrowButton>

      <IndicatorContainer>
        {slides.map((_, index) => (
          <IndicatorButton
            key={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </IndicatorContainer>
      
      <Text>{slides[currentSlide].title}</Text>
      
      
    </SlideContainer>
  );
};

export default Slidetwo;
