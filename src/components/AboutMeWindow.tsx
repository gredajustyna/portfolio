import React, { ReactElement } from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";
import { Typewriter } from "./Typewriter";

const Header = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 16px;
  background-color: ${COLORS.red};
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vh;
  height: 62px;
`;

const Dot = styled.div`
  background-color: ${COLORS.white};
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const Screen = styled.div`
  background-color: ${COLORS.white};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px;
  width: 50vh;
  height: 50vh;
  border: 1px solid ${COLORS.red};
`;

const HoverContainer = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(102%);
  }
`;

export const AboutMeWindow = (): ReactElement => {
  return (
    <HoverContainer>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header>
          <Dot />
          <Dot />
          <Dot />
        </Header>
        <Screen>
          <Typewriter text="Hi there!" delay={50} />
        </Screen>
      </div>
    </HoverContainer>
  );
};
