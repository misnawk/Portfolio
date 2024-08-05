import React, { useState, useEffect, useCallback } from "react"; // React와 필요한 훅들을 임포트합니다.
import styled, { css } from "styled-components"; // styled-components와 css 유틸리티를 임포트합니다.
import { ProjectImage } from "../../Atoms/Project/ProjectImage"; // ProjectImage 컴포넌트를 임포트합니다.
import { ProjectContainer } from "../../Atoms/Project/ProjectContainer"; // ProjectContainer 컴포넌트를 임포트합니다.

// SliderContainer는 ProjectContainer를 확장하여 스타일을 정의한 컴포넌트입니다.
const SliderContainer = styled(ProjectContainer)`
  position: relative;
  overflow: hidden;
`;

// MainImageContainer는 메인 이미지를 감싸는 div로, 16:9 비율을 유지합니다.
const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16:9 비율 유지
  overflow: hidden;
`;

// ImageWrapper는 슬라이드 애니메이션을 적용한 div로, translateX를 통해 슬라이드를 이동시킵니다.
const ImageWrapper = styled.div<{ translateX: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease; // 슬라이드 전환 애니메이션
  transform: translateX(${(props) => props.translateX}%);
`;

// ImageContainer는 각 슬라이드 이미지를 감싸는 div로, flexbox를 사용해 중앙 정렬합니다.
const ImageContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// StyledProjectImage는 ProjectImage를 확장하여 스타일을 정의한 컴포넌트입니다.
const StyledProjectImage = styled(ProjectImage)`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// ThumbnailContainer는 썸네일 이미지를 감싸는 div로, 썸네일들을 중앙 정렬하고 간격을 둡니다.
const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

// Thumbnail은 ProjectImage를 확장하여 썸네일 스타일을 정의한 컴포넌트입니다.
const Thumbnail = styled(ProjectImage)<{ isSelected: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  margin: 0;
  border: 2px solid ${(props) => (props.isSelected ? "#007bff" : "transparent")}; // 선택된 썸네일에 파란 테두리
  transition: border-color 0.3s ease; // 테두리 색 전환 애니메이션

  &:hover {
    border-color: #007bff; // 호버 시 테두리 파란색
  }
`;

// NavigationButton은 슬라이드 전환 버튼으로, 방향에 따라 위치가 다릅니다.
const NavigationButton = styled.button<{ direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5); // 반투명 검은색 배경
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease; // 배경색 전환 애니메이션
  ${(props) =>
    props.direction === "prev"
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.8); // 호버 시 배경색 진하게
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); // 포커스 시 파란색 그림자
  }
`;

// ProjectImageSliderProps는 컴포넌트의 프로퍼티 타입을 정의합니다.
interface ProjectImageSliderProps {
  images: string[]; // 이미지 URL 배열
  autoPlayInterval?: number; // 자동 슬라이드 전환 간격 (밀리초)
}

// ProjectImageSlider는 이미지 슬라이더 컴포넌트입니다.
export const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({
  images,
  autoPlayInterval = 5000, // 기본 자동 슬라이드 전환 간격은 5초
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스 상태
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // 자동 슬라이드 재생 상태

  // 특정 슬라이드로 이동하는 함수
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // 이전 슬라이드로 이동하는 함수
  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // 다음 슬라이드로 이동하는 함수
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // 키보드 화살표 키로 슬라이드를 이동하는 이벤트 핸들러를 설정합니다.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (event.key === "ArrowRight") {
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevSlide, goToNextSlide]);

  // 자동 슬라이드 재생을 관리하는 useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(goToNextSlide, autoPlayInterval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNextSlide, autoPlayInterval]);

  // 슬라이더 컴포넌트를 렌더링합니다.
  return (
    <SliderContainer>
      <MainImageContainer>
        <ImageWrapper translateX={-currentIndex * 100}>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <StyledProjectImage
                src={image}
                alt={`Project image ${index + 1}`}
              />
            </ImageContainer>
          ))}
        </ImageWrapper>
        <NavigationButton
          direction="prev"
          onClick={goToPrevSlide}
          aria-label="Previous image"
        >
          &#10094; {/* 왼쪽 화살표 */}
        </NavigationButton>
        <NavigationButton
          direction="next"
          onClick={goToNextSlide}
          aria-label="Next image"
        >
          &#10095; {/* 오른쪽 화살표 */}
        </NavigationButton>
      </MainImageContainer>
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => goToSlide(index)}
            isSelected={index === currentIndex}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </ThumbnailContainer>
    </SliderContainer>
  );
};
