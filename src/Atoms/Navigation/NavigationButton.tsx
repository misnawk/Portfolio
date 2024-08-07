import React from "react";
import styled from "styled-components";
import { NavigationButtonProps } from "../../Type/Type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#FFA500" : "transparent")};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? "#FFA500" : "rgba(255, 165, 0, 0.3)"};
  }
`;

const Icon = styled(FontAwesomeIcon)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#1a1a1a" : "#FFA500")};
  font-size: 1.5rem;
`;

const NavigationButton = ({
  icon,
  action,
  isActive,
}: NavigationButtonProps) => (
  <Button onClick={action} isActive={isActive}>
    <Icon icon={icon} isActive={isActive} />
  </Button>
);

export default NavigationButton;
