import React from "react";
import styled from "styled-components";
import { SideButtonProps } from "../Type/Type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button<{ isActive: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#FFA500" : "#333")};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#FFB52E" : "#444")};
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const SidebarButton = ({ icon, action, isActive }: SideButtonProps) => (
  <Button onClick={action} isActive={isActive}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </Button>
);

export default SidebarButton;
