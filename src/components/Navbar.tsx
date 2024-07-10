import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";

const StyledNavbar = styled.nav`
  height: 84px;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar = ({ children }: NavbarProps): ReactElement => {
  return <StyledNavbar>{children}</StyledNavbar>;
};
