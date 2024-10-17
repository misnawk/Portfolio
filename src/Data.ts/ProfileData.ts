import { features } from "process";
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
      period: "2024.08.12 - (진행중)",
      title: " 화이트클리닉 관리자페이지 제작 - 외부프로젝트",
      description:
        "화이트클리닉은 현재 서비스중인 홈페이지입니다. 화이트클리닉의 관리자페이지를 제작하게 되었습니다.강의를 같이 들었던 엘리트멤버 3명이서 페이지 제작중입니다. Next와 Nest를 사용하여 제작중입니다.",
    },
    {
      period: "2024.04.24 - 2024.08.07(밀키트 프로젝트)",
      title: " 자바 스프링 응용SW개발자 양성과정 - 코리아IT아카데미 인천",
      description:
        "프론트엔드에서는 React를 활용하고, 백엔드에서는 Spring Boot와 JSP 방식을 도입하여 MySQL 데이터베이스를 효율적으로 제어하며, 효율적인 데이터 처리와 사용자 인터페이스 구현을 경험했습니다.",
    },
    {
      period: "2024.02.07 - 2024.07.16(여행 프로젝트)",
      title: " 웹개발 - 코리아IT아카데미 인천",
      description:
        "프론트엔드에서는 HTML, CSS, JavaScript를 활용하고, 백엔드에서는 Spring, Spring Boot, Spring Tool Suite(STS)를 사용하여 MyBatis와 MySQL 데이터베이스를 효율적으로 제어하는 방법을 숙달했습니다.",
    },
    {
      period: "2024.01.10 - 2024.02.05",
      title: "Mysql 사용한 DBMS - 코리아IT아카데미 인천",
      description:
        "MySQL Workbench를 활용하여 SQL의 기본적인 CRUD와 JOIN을 통해 데이터를 제어해보았습니다",
    },
    {
      period: "2023.12.27 - 2024.01.31",
      title: "자바(JAVA) - 코리아IT아카데미 인천",
      description:
        "자바의 기본 문법과 이클립스를 활용한 자바 프로그래밍을 다루었습니다.",
    },
    {
      period: "2018.03 - 2024.02",
      title: "호원대학교 - 정보보안학과 졸업",
      description:
        "키 관리(키 분배, 키 생성, 키 저장), 대칭 암호(AES, DES), 비대칭 암호(RSA, ECC), 해시 함수(SHA-256), 디지털 서명(DSA), 스케줄링 알고리즘(FIFO, SJF, SRTF, RR 등),Linux우분투, WireShark(패킷 분석 툴), Burp Suite(웹 애플리케이션 보안 테스트) 등을 학습했습니다.",
    },
  ],
};

export const FirstprojectData = {
  title: "MY PROJECTS 1",
  subtitle: "프로젝트 이름: Traveler",
  description: [
    "사용자는 여행 목적지와 날짜만 입력하면 해당 목적지의 숙박, 항공, 패키지, 티켓을 손쉽게 예약할 수 있습니다.",
  ],
  features: [
    "1. 상품 예약 시 자동으로 캘린더에 저장되며 개인 용도로도 사용 가능합니다.",

    "2. 최고관리자/상품 등록 유저(항공, 숙소, 티켓, 패키지)/일반 유저가 있습니다.",

    "3. 최고관리자 - 상품 등록 유저와 일반 유저에 대한 모든 정보를 볼 수 있습니다.",

    "4. 상품 등록 유저 - 항공권, 숙박권, 티켓, 패키지를 각각 관리하며 회원가입 시 선택할 수 있습니다.",

    "5. 일반 유저 - 등록된 상품을 예약 및 구매하는 사용자입니다.",
    "6. 게시판 기능이 있어서 소통에 용이합니다.",

    "7. 마이페이지에서 일반 사용자는 자신이 예약한 상품을 볼 수 있고, 상품 등록 유저는 자신이 등록한 상품들을 볼 수 있습니다.",

    "** 서버on: 평일 13:00 ~ 18:00 **",
    "** 접속 1분정도 걸립니다(에저 무료티어). **",
  ],
  learned: [
    [
      "1. Thymeleaf를 사용한 서버 사이드 렌더링으로 동적인 데이터 바인딩과 템플릿 기반의 HTML 반복 처리를 학습했습니다.",
    ],
    [
      "2. AJAX와 Fetch 와 JavaScript를 통한 비동기 데이터 통신 및 DOM 조작 기술을 익혔습니다.",
    ],
    [
      "3. 세션 관리를 통해 사용자 인증과 상태 유지를 처리하는 방법을 배웠습니다.",
    ],
    [
      "4. 데이터베이스 정규화를 통해 데이터의 중복을 제거하고 효율적인 데이터 구조를 설계하는 방법을 배웠습니다.",
    ],
    [
      "5. Azure 클라우드 플랫폼과 CI/CD 파이프라인을 활용하여 지속적인 통합과 배포를 구현하는 방법을 배웠습니다.",
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
  description: [
    "1. 사용자가 주변 밀키트 판매점의 위치와 재고를 실시간으로 확인가능한 웹사이트 입니다.",
    "2. 개인의 경험을 리뷰와 찜 기능으로 기록하고 공유 할 수 있습니다.",
  ],
  features: [
    "1. 서비스 접속 즉시 현재 위치 기반 검색창과 지도가 나타납니다.(kakaoMaps API사용)",

    "2. 검색 후 리뷰, 별점순 정렬이 가능합니다.",
    "3. 검색 후 검색결과를 누르면 매장 정보 화면으로 이동합니다.",
    "4. 로그인 후 마이페이지 버튼을 누르면 리뷰와 찜 기록이 나타납니다.",
    "5. 리뷰와 찜 리스트에서 원하는 것을 클릭하면 해당 매장으로 이동합니다.",
    "** 서버on: 평일 13:00 ~ 18:00 **",
    "** 접속 1분정도 걸립니다(에저 무료티어). **",
  ],
  learned: [
    [
      "1. useState와 useRef 같은 React 훅을 활용하여 상태 관리와 DOM 참조를 어떻게 처리하는지 학습했습니다.",
    ],
    [
      "2. 카카오 지도 API를 통합하여 지도에 마커를 추가하고 정보를 표시하는 방법을 배웠습니다.",
    ],
    [
      "3. MySQL 데이터베이스에서 데이터를 조회하고, 사용자의 요청에 맞는 데이터를 추출하는 방법을 이해했습니다.",
    ],
    [
      "4. 인증된 사용자만이 특정 데이터에 접근할 수 있도록 토큰을 활용한 인증 시스템을 구축하는 방법을 배웠습니다. ",
    ],
    [
      "5. 백엔드에서 RESTful API를 설계하여 프론트엔드의 요청을 처리하는 방법을 배웠습니다.",
    ],
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
  title: "현재 진행중인 프로젝트(목표 마감일 10-31)",
  subtitle: "프로젝트 이름: 화이트클리닉(열심히 제작중입니다.)",
  description: [
    "강의를 해주시던 강사님께서 화이트클리닉업체 사장님을 소개시켜주시며 프로젝트가 시작되었습니다. ",
    "",
    "제가 맡은 파트: 기사님 관리-리스트보기 / 기사님 관리-등록하기 / 기사님 관리-수정하기 입니다.",
  ],

  features: [
    "현재 프론트 70% 완성완료 하였으며 ERD 완료하였습니다. 현재 만든 ERD를 기준으로 하여 nest사용해서 Backend 제작중입니다.",
    "개발의 순서: 프론트 -> DB -> 백엔드 ",
    "** 서버on: 평일 13:00 ~ 18:00 **",
    "** 접속 1분정도 걸립니다(에저 무료티어). **",
  ],
  learned: [
    ["---프론트---"],
    [
      "1. Nest와 TypeScript를 활용하여 프론트엔드와 백엔드 간의 효과적인 데이터 통신을 구현하였습니다. ",
    ],
    [" 2. 컴포넌트를 아토믹 구조로 설계하는 방법을 익혔습니다. "],
    [
      "3. 단순이 컴포넌트를 만드는것. 끝이아니라 아토믹디자인을 활용하여 atom, Meleculesm, Organism, page 형식으로 컴포넌트를 분리시켜서 만들어주었습니다. ",
    ],
    [
      "4. atom은 가장작은 단위이며 어느컴포넌트에서 재사용할수있는 컴포넌트여야했습니다. 그래서 가장중요한 단위였습니다.",
    ],
    [
      "5. 또한 atom 안에는 훅들을 사용하면 안됩니다. 또한 함수 사용또한 지향 해야했습니다.  이 모든 이유는 전부 재사용을 하기위해서입니다",
    ],
    [
      "6. meleculesm은 두개이상의 atom이 뭉치면 meleculesm 단위로 지정했습니다. 또한 meleculesm부터 훅 또는 함수를 사용할 수 있습니다.",
    ],
    [
      "7. Organism은 두개 이상의 meleculesm이 뭉치면 Organism 단위로 지정했습니다. 또한 서버에서 데이터를 받아오는 단위이기도합니다.",
    ],
    [" 8. MUI 라이브러리를 효율적으로 활용하는 방법을 배우게 되었습니다."],
    [" 9. Zustand를 사용하여 전역에서 상태 관리를 수행할 수 있었습니다. "],
    ["---백엔드---"],
    [
      "10. NestJS 프레임워크를 사용하여 백엔드를 구축했으며, 이는 TypeScript를 기반으로 합니다.",
    ],
    [
      "11. JWT(JSON Web Token)를 사용하여 사용자 인증을 구현했습니다. AuthGuard에서 토큰을 검증합니다.",
    ],
    [
      "12. 역할의 정보는 ADMIN 과 USER로 구분하였으며 매출 관련된 CRUD는 ADMIN만이 가능하도록 로직구현하고있습니다.",
    ],
  ],
  technologies: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Nest.js",
    "MUI",
    "Gradle",
    "Notion",
    "Dbeaver",
    "MySQL",
    "GitHub",
    "Vercel",
    "Azure(CI/CD)",
  ],
  images: [
    "https://i.ibb.co/4NvLtBh/image.png",
    "https://i.ibb.co/104gTp2/image.png",
    "https://i.ibb.co/drRVsL3/image.png",
    "https://i.ibb.co/dBsX2zK/image.png",
    "고객정보.png",
    "스케줄.png",
    "예약하기.png",
  ],
  githubLink: "https://github.com/misnawk/whiteclinic",
  demoLink:
    "https://whiteclinic-nchwe4k0p-misnawks-projects.vercel.app/engineer/e_list",
};

export const studyEntries: StudyProps[] = [
  {
    title: "Nest.js",
    description:
      "화이트클리닉 프로젝트 진행을 위해 Nest.js의 강의를 학습한것을 정리했습니다.",
    imageUrl: "https://i.ibb.co/55H81B9/image.png",
    date: "2024-09-20",
    url: "https://jeweled-headphones-99c.notion.site/Nest-js-ea8d1095b5d74624a901e3dce2f0b998?pvs=4",
  },
  {
    title: "Next.js",
    description:
      "화이트클리닉 프로젝트 진행을 위해 Next.js의 공식 문서를 학습하였으며, 이에 따른 프로젝트의 Next.js 진행 사항을 정리했습니다.",
    imageUrl: "https://i.ibb.co/pz4RPFM/image.png",
    date: "2024-09-10",
    url: "https://jeweled-headphones-99c.notion.site/Next-js-99ac7e5e061b4690b2da1b30da762bd5?pvs=4",
  },

  {
    title: "WhiteClinic",
    description:
      "Next.js와 Nest.js를 활용하여 프로젝트를 진행 중이며, 서비스 중인 업체의 사장님과 요구사항에 대해 협의하며 진행하고 있습니다.",
    imageUrl: "https://i.ibb.co/Rjrg5jX/image.png",
    date: "2024-08-12",
    url: "https://jeweled-headphones-99c.notion.site/c37e483e6fbb498db9504ab27b0ad7df?pvs=4",
  },

  {
    title: "Engineer Information Processing",
    description: "정보처리기사",
    imageUrl: "https://i.ibb.co/Jr26mBT/image.png",
    date: "2024-08-17",
    url: "https://jeweled-headphones-99c.notion.site/3ef35154d555494a94dfa0e1b89a49b6?pvs=4",
  },

  {
    title: "Web Development",
    description: "HTML / CSS / JS / DB / SpringBoot",
    imageUrl: "https://i.ibb.co/T8c5RHH/image.png",
    date: "2024-04-24",
    url: "https://jeweled-headphones-99c.notion.site/HTML-CSS-js-React-31aee8cf29d946fc94fc9346ac52acb5?pvs=4",
  },
  {
    title: "DB",
    description: "DataBase",
    imageUrl: "https://i.ibb.co/P1K4mnn/image.png",
    date: "2024-01-10",
    url: "https://kms13011.tistory.com/category/%28%ED%95%99%29%20%28%EA%B3%B5%29%20%28%EB%94%94%29",
  },
  {
    title: "JAVA",
    description: "JavaBasics",
    imageUrl: "https://i.ibb.co/f2X38pn/image.png",
    date: "2023-12-27",
    url: "https://kms13011.tistory.com/category/%28%ED%95%99%29%20%28%EA%B3%B5%29%20%28%EC%9E%90%29",
  },
  {
    title: "JAVA(복습)",
    description: "JavaBasics",
    imageUrl: "https://i.ibb.co/f2X38pn/image.png",
    date: "2023-12-27",
    url: "https://kms13011.tistory.com/category/%28%ED%98%BC%29%20%28%EA%B3%B5%29%20%28%EC%9E%90%29",
  },
];
