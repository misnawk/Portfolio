import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProjectImage } from "../../Atoms/Project/ProjectImage";

const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`;

const SliderWrapper = styled.div<{ translateValue: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateValue}px);
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(SliderButton)`
  left: 10px;
`;

const NextButton = styled(SliderButton)`
  right: 10px;
`;

interface ProjectImageSliderProps {
  images: string[];
}

export const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    setTranslateValue(-currentIndex * 100);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <SliderContainer>
      <SliderWrapper translateValue={translateValue}>
        {images.map((image, index) => (
          <ProjectImage
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
          />
        ))}
      </SliderWrapper>
      <PrevButton onClick={goToPrevSlide}>&lt;</PrevButton>
      <NextButton onClick={goToNextSlide}>&gt;</NextButton>
    </SliderContainer>
  );
};
