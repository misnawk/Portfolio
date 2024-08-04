import {
  AboutMeProps,
  ProfileImgProps,
  ProfileInfoProps,
  ProfileIntroductionProps,
  SkillProps,
} from "../Type/Type";

export const ProfileImgData: ProfileImgProps = {
  icon: "https://i.ibb.co/8c4CyWt/b94f4b059182f4d5-sticker.png",
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
    "Python",
    "Spring",
    "springBoot",
  ],
  education: [
    {
      period: "2023.08 - 2023.11",
      title:
        "자바(JAVA)기반 스프링 응용SW개발자 양성과정B — 코리아IT아카데미 인천",
      description:
        "Oracle을 이용하여 데이터 처리와 분석 능력을 배웠으며 스프링과 스프링 부트를 이용하여 백엔드 서버를 구축하였습니다.",
    },
    // 추가적인 교육 항목들...
  ],
};

export const projectData = {
  title: "MY PROJECTS 1",
  subtitle: "게시판 프로젝트: BoardProject",
  description:
    "게시판 프로젝트는 자유롭게 게시판에 글을 작성하고 댓글로 여러 의견을 나누는 커뮤니티 기능을 제공하는 웹 사이트입니다. 가장 기본적이면서도 많이 쓰는 커뮤니티를 만들어 보고 싶단 생각이 들어 개발하게 되었습니다.",
  features: [
    "게시판(등록,수정,삭제)",
    "게시판글(등록,수정,삭제)",
    "댓글(등록,수정,삭제)",
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
    "AWS(EC2, RDS)",
  ],
  images: [
    "https://i.ibb.co/bKntMYC/git-7d664489ed331806ddc8.png",
    "https://i.ibb.co/ZHTD9Kk/html-e77138c4c431579d25d0.png",
    "https://i.ibb.co/Xsy4pCP/react-cd4ab68456d5875b788e.png",
  ],
  githubLink: "https://github.com/somi9954/BoardProject",
  demoLink: "http://freeboard.store",
};
