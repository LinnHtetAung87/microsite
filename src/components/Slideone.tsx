import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Slidetwo from './Slidetwo';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  25%, 75% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.3);
  }
`;

// Extend the button element's props to include `isActive`
interface IndicatorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const SlideContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  animation: ${fadeIn} 2s ease-in-out;
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

const Logo = styled.img`
  height: 100%;
  width: auto;
  display: block;
  filter: invert(1) brightness(2);
`;

const Text = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3rem;
  z-index: 3;
  animation: ${slideIn} 1.5s ease-in-out, ${zoomIn} 1s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  &:hover {
    animation: ${heartbeat} 1s infinite;
  }

  span.big {
    font-size: 4rem;
    font-weight: bold;
  }

  span.small {
    font-size: 2rem;
    font-weight: normal;
  }
`;

const SlideIndicator = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

const IndicatorButton = styled.button<IndicatorButtonProps>`
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primary : 'transparent')};
  border: none;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: ${fadeIn} 1.5s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    animation: ${heartbeat} 1s infinite;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 4;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    animation: ${heartbeat} 1s infinite;
  }
`;

interface SlideoneProps {
  onArrowClick: () => void;
  onIndicatorClick: (slideNumber: number) => void;
  currentSlide: number;
}

const Slideone: React.FC<SlideoneProps> = ({ onArrowClick, onIndicatorClick, currentSlide }) => (
  <SlideContainer>
    <VideoBackground autoPlay loop muted>
      <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </VideoBackground>
    <Overlay />
    
    <Text>
      <span className="big">LOREM IPSUM DOLOR</span><br />
      <span className="small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</span>
    </Text>
    <SlideIndicator>
      <IndicatorButton onClick={() => onIndicatorClick(1)} isActive={currentSlide === 1} />
      <IndicatorButton onClick={() => onIndicatorClick(2)} isActive={currentSlide === 2} />
      {/* Add more indicators for additional slides */}
    </SlideIndicator>
    <ArrowButton onClick={onArrowClick}>
      <FontAwesomeIcon icon={faChevronDown} />
    </ArrowButton>
  </SlideContainer>
);

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  const handleArrowClick = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleIndicatorClick = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div>
      {currentSlide === 1 && (
        <Slideone
          onArrowClick={handleArrowClick}
          onIndicatorClick={handleIndicatorClick}
          currentSlide={currentSlide}
        />
      )}
      {currentSlide === 2 && <Slidetwo />}
    </div>
  );
};

export default App;
