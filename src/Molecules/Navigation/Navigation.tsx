import React from "react";
import styled from "styled-components";
import { NavigationButtonProps } from "../../Type/Type";
import { useLocation, useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFolder,
  faHouse,
  faListCheck,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import NavigationButton from "../../Atoms/Navigation/NavigationButton";

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  padding: 20px 10px;
  width: 80px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
`;
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const buttons: NavigationButtonProps[] = [
    {
      icon: faHouse,
      action: () => navigate("/"),
      isActive: location.pathname === "/",
    },
    {
      icon: faUser,
      action: () => navigate("/About"),
      isActive: location.pathname === "/About",
    },
    {
      icon: faListCheck,
      action: () => navigate("/FirstProjectPage"),
      isActive: location.pathname === "/FirstProjectPage",
    },
    {
      icon: faListCheck,
      action: () => navigate("/SecondProjectPage"),
      isActive: location.pathname === "/SecondProjectPage",
    },
    {
      icon: faListCheck,
      action: () => navigate("/ThirdProjectsPage"),
      isActive: location.pathname === "/ThirdProjectsPage",
    },
    {
      icon: faPen,
      action: () => navigate("/StudyLogPage"),
      isActive: location.pathname === "/StudyLogPage",
    },
    {
      icon: faGithub,
      action: () => window.open("https://github.com/misnawk", "_blank"),
      isActive: false,
    },
  ];

  return (
    <NavigationContainer>
      {buttons.map((button, index) => (
        <NavigationButton
          key={index}
          icon={button.icon}
          action={button.action}
          isActive={button.isActive}
        />
      ))}
    </NavigationContainer>
  );
};
export default Navigation;