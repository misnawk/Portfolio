import React from "react";
import styled from "styled-components";
import SidebarButton from "../Atoms/SidebarButton";
import { SideButtonProps } from "../Type/Type";
import { useLocation, useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // 브랜드 아이콘 가져오기
import {
  faFolder,
  faHouse,
  faListCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; //일반 폰트어썸 아이콘 가져오기

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  padding: 20px 10px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const buttons: SideButtonProps[] = [
    {
      icon: faHouse,
      action: () => navigate("/"),
      isActive: location.pathname === "/",
    },
    {
      icon: faUser,
      action: () => navigate("/skills"),
      isActive: location.pathname === "/skills",
    },
    {
      icon: faListCheck,
      action: () => navigate("/firstProjects"),
      isActive: location.pathname === "/firstProjects",
    },
    {
      icon: faListCheck,
      action: () => navigate("/secondProjects"),
      isActive: location.pathname === "/secondProjects",
    },
    {
      icon: faListCheck,
      action: () => navigate("/thirdProjects"),
      isActive: location.pathname === "/thirdProjects",
    },

    {
      icon: faGithub,
      action: () => window.open("https://github.com/misnawk", "_blank"),
      isActive: false,
    },
  ];

  return (
    <SidebarContainer>
      {buttons.map((button, index) => (
        <SidebarButton
          key={index}
          icon={button.icon}
          action={button.action}
          isActive={button.isActive}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
