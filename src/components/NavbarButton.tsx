import React from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";

const ButtonContainer = styled.div`
  border-radius: 12px;
  padding: 12px;
  color: ${COLORS.red};
  transition: all 0.4s;
  font-size: larger;
  font-family: "caviar";
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.red};
    color: ${COLORS.white};
  }
`;

interface NavbarButtonProps {
  text: string;
  onClick: () => void;
}

export const NavbarButton = ({ text, onClick }: NavbarButtonProps) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};
