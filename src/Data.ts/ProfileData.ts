import {
  AboutMeProps,
  ProfileImgProps,
  ProfileInfoProps,
  ProfileIntroductionProps,
  SkillProps,
  StudyProps,
} from "../Type/Type";

export const ProfileImgData: ProfileImgProps = {
  icon: "강민석사진.jpg",
};

export const ProfileIntroductionData: ProfileIntroductionProps = {
  greeting: "",
  title: "열정적인 백엔드 개발자",
  introduction: `새로운 기술에 대한 탐구심이 많고, 도전하는 것을 즐깁니다. 배우는 과정에서 큰 즐거움을 느끼며, 
  팀원들과의 원활한 커뮤니케이션과 상호 피드백을 중요하게 생각합니다. 
  현재 백엔드 개발자로서의 첫 걸음을 내딛기 위해 구직 중입니다.
  맡은 업무에 대한 책임감을 갖고, 끊임없는 도전을 통해 성장할 수 있는 회사에서 일하고 싶습니다. 감사합니다!`,
};

export const ProfileInfoData: ProfileInfoProps = {
  name: "강민석",
  age: 26,
  email: "kms13011@naver.com",
  phone: "010-2997-4911",
  address: "인천 서구 검암동",
};

// src/data/AboutMeData.ts

export const AboutMeData: AboutMeProps = {
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Mysql",
    "Oracle",
    "Java",
    "JavaScript",
    "Spring",
    "Spring Boot",
    "Wireshark",
    "Nmap",
    "Linux",
    "GitHub",
    "IntelliJ IDEA",
    "Azure",
    "CI/CD",
    "Notion",
    "Figma",
    "trello",
    "slack",
    "Next.js",
  ],
  education: [
    {
      period: "2018.03 - 2024.02",
      title: "호원대학교 - 정보보안학과 졸업",
      description:
        "키 관리(키 분배, 키 생성, 키 저장), 대칭 암호(AES, DES), 비대칭 암호(RSA, ECC), 해시 함수(SHA-256), 디지털 서명(DSA), 스케줄링 알고리즘(FIFO, SJF, SRTF, RR 등),Linux우분투, WireShark(패킷 분석 툴), Burp Suite(웹 애플리케이션 보안 테스트) 등을 학습했습니다. ",
    },
    {
      period: "2023.12.27 - 2024.01.31",
      title: "자바(JAVA) - 코리아IT아카데미 인천",
      description:
        "자바의 기본 문법과 이클립스를 활용한 자바 프로그래밍을 다루었습니다.",
    },
    {
      period: "2024.01.10 - 2024.02.05",
      title: "Mysql 사용한 DBMS - 코리아IT아카데미 인천",
      description:
        "MySQL Workbench를 활용하여 SQL의 기본적인 CRUD와 JOIN을 통해 데이터를 제어해보았습니다",
    },
    {
      period: "2024.02.07 - 2024.07.16",
      title: " 웹개발 - 코리아IT아카데미 인천",
      description:
        "프론트엔드에서는 HTML, CSS, JavaScript를 활용하고, 백엔드에서는 Spring, Spring Boot, Spring Tool Suite(STS)를 사용하여 MyBatis와 MySQL 데이터베이스를 효율적으로 제어하는 방법을 숙달했습니다.",
    },
    {
      period: "2024.04.24 - 2024.08.07",
      title: " 자바 스프링 응용SW개발자 양성과정 - 코리아IT아카데미 인천",
      description:
        "프론트엔드에서는 React를 활용하고, 백엔드에서는 Spring Boot와 JSP 방식을 도입하여 MySQL 데이터베이스를 효율적으로 제어하며, 효율적인 데이터 처리와 사용자 인터페이스 구현을 경험했습니다.",
    },
    {
      period: "2024.08.12 - 2024.09.12(미정)",
      title: " 화이트클리닉 관리자페이지 제작 - 외부프로젝트",
      description:
        "화이트클리닉은 현재 서비스중인 홈페이지입니다. 화이트클리닉의 관리자페이지를 제작하게 되었습니다.",
    },
  ],
};

export const FirstprojectData = {
  title: "MY PROJECTS 1",
  subtitle: "프로젝트 이름: Traveler",
  description:
    "사용자는 여행 목적지와 날짜만 입력하면 해당 목적지의 숙박, 항공, 패키지, 티켓을 손쉽게 예약할 수 있습니다.",
  features: [
    [
      "1. 상품 예약 시 자동으로 캘린더에 저장되며 개인 용도로도 사용 가능합니다.",
    ],
    [
      "2. 최고관리자/상품 등록 유저(항공, 숙소, 티켓, 패키지)/일반 유저가 있습니다.",
    ],
    [
      "3. 최고관리자 - 상품 등록 유저와 일반 유저에 대한 모든 정보를 볼 수 있습니다.",
    ],
    [
      "4. 상품 등록 유저 - 항공권, 숙박권, 티켓, 패키지를 각각 관리하며 회원가입 시 선택할 수 있습니다.",
    ],
    ["5. 일반 유저 - 등록된 상품을 예약 및 구매하는 사용자입니다."],
    ["6. 게시판 기능이 있어서 소통에 용이합니다."],
    [
      "7. 마이페이지에서 일반 사용자는 자신이 예약한 상품을 볼 수 있고, 상품 등록 유저는 자신이 등록한 상품들을 볼 수 있습니다.",
    ],
  ],
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Spring Boot",
    "JAVA",
    "Gradle",
    "MySQL",
    "GitHub",
    "Azure(CI/CD)",
    "ImgbbApi ",
  ],
  images: [
    "travel/게시판.gif",
    "travel/티켓.gif",
    "travel/숙박.gif",
    "travel/패키지.gif",
    "travel/항공.gif",
  ],
  githubLink: "https://github.com/misnawk/travel",
  demoLink:
    "https://traveler-ssr-htdkfzcjfbdjcbby.koreacentral-01.azurewebsites.net/",
};

export const SecondprojectData = {
  title: "MY PROJECTS 2",
  subtitle: " 프로젝트 이름: Bechef",
  description:
    "사용자가 주변 밀키트 판매점의 위치와 재고를 실시간으로 확인가능한 웹사이트 입니다. 개인의 경험을 리뷰와 찜 기능으로 기록하고 공유 할 수 있습니다.",
  features: [
    ["1. 서비스 접속 즉시 현재 위치 기반 검색창과 지도가 나타납니다."],
    ["2. 검색 후 리뷰, 별점순 정렬이 가능합니다."],
    ["3. 검색 후 검색결과를 누르면 매장 정보 화면으로 이동합니다."],
    ["4. 로그인 후 마이페이지 버튼을 누르면 리뷰와 찜 기록이 나타납니다."],
    ["5. 리뷰와 찜 리스트에서 원하는 것을 클릭하면 해당 매장으로 이동합니다."],
  ],

  technologies: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Spring Boot",
    "Spring",
    "JAVA",
    "Gradle",
    "MySQL",
    "GitHub",
    "Azure(CI/CD)",
    "ImgbbApi ",
  ],
  images: [
    "bechef/메인화면(1).gif",
    "bechef/리뷰와 찜리스트(2).gif",
    "bechef/회원탈퇴(4).gif",
    "bechef/로그인(5).gif",
    "bechef/회원가입(6).gif",
  ],
  githubLink: "https://github.com/misnawk/bechef-front",
  demoLink: "https://gentle-field-017139e00.5.azurestaticapps.net",
};

export const thirdProjectData = {
  title: "To Be Continue",
  subtitle: " 프로젝트 이름: Project",
  description: "프로젝트 설명",
  features: ["주요기능"],
  technologies: [
    "React.js",
    "JavaScript",
    "HTML",
    "tailwindCSS",
    "SpringSecurity",
    "JWT",
    "Spring Boot",
    "Java",
    "Gradle",
    "Notion",
    "Dbeaver",
    "MySQL",
    "GitHub",
    "Azure(CI/CD)",
  ],
  images: [
    "https://i.ibb.co/bKntMYC/git-7d664489ed331806ddc8.png",
    "https://i.ibb.co/ZHTD9Kk/html-e77138c4c431579d25d0.png",
    "https://i.ibb.co/Xsy4pCP/react-cd4ab68456d5875b788e.png",
    "https://i.ibb.co/ZHTD9Kk/html-e77138c4c431579d25d0.png",
    "https://i.ibb.co/ZHTD9Kk/html-e77138c4c431579d25d0.png",
  ],
  githubLink: "",
  demoLink: "",
};

export const studyEntries: StudyProps[] = [
  {
    id: 1,
    title: "JAVA",
    description: "자바에 대해서 공부한것들을 기록했습니다.",
    imageUrl: "https://i.ibb.co/f2X38pn/image.png",
    date: "2024-03-15",
    url: "https://kms13011.tistory.com/category/%28%ED%95%99%29%20%28%EA%B3%B5%29%20%28%EC%9E%90%29",
  },
  {
    id: 2,
    title: "DB",
    description: "DataBase에 대해서 공부한것들을 기록했습니다.",
    imageUrl: "https://i.ibb.co/P1K4mnn/image.png",
    date: "2024-03-20",
    url: "https://kms13011.tistory.com/category/%28%ED%95%99%29%20%28%EA%B3%B5%29%20%28%EB%94%94%29",
  },
  {
    id: 3,
    title: "Web Development",
    description: "웹 개발 강의를 들으며 중요한것들을 기록해두었습니다.",
    imageUrl: "https://i.ibb.co/9scWNNX/image.png",
    date: "2024-03-20",
    // url: "https://www.notion.so/WebDevelopment-85bd0260bbb743f1a383be813262f7b3",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "자바 스프링 응용SW개발자 양성과정 강의를 들으며 중요한것들을 기록해두었습니다.",
    imageUrl: "https://i.ibb.co/T8c5RHH/image.png",
    date: "2024-03-20",
    url: "https://www.notion.so/HTML-CSS-js-React-31aee8cf29d946fc94fc9346ac52acb5",
  },
];
