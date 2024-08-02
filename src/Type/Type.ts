// 인사말 섹션을 위한 타입
export type Greeting = {
  title: string; // 인사말 제목
  content: string; // 인사말 내용
};

// 개인 프로필 정보를 위한 타입
export type Profile = {
  name: string; // 이름
  age: number; // 나이
  phone: string; // 전화번호
  address: string; // 주소
  email: string; // 이메일 주소
};

// 사이드바 버튼을 위한 타입
export type SideButton = {
  icon: string; // 버튼 아이콘 (이미지 URL 또는 컴포넌트)
  action: () => void; // 버튼 클릭 시 실행될 함수
};

// About Me 섹션을 위한 타입
export type AboutMe = {
  skills: string[]; // 보유 기술 목록
  education: Education[]; // 교육 이력 목록
};

// 교육 이력 항목을 위한 타입
export type Education = {
  period: string; // 교육 기간
  description: string; // 교육 내용 설명
};

// 프로젝트 항목을 위한 타입
export type Project = {
  title: string; // 프로젝트 제목
  description: string; // 프로젝트 설명
  technologies: string[]; // 사용된 기술 목록
  githubLink?: string; // GitHub 저장소 링크 (선택적)
};

// 기술 스택 아이템을 위한 타입
export type Skill = {
  name: string; // 기술 이름
  icon: string; // 기술 아이콘 (이미지 URL 또는 컴포넌트)
};

// 소셜 미디어 링크를 위한 타입
export type SocialLink = {
  platform: string; // 소셜 미디어 플랫폼 이름
  url: string; // 프로필 링크 URL
  icon: string; // 플랫폼 아이콘 (이미지 URL 또는 컴포넌트)
};
