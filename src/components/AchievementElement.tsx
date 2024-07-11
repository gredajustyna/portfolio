import React from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";

const WrapperContainer = styled.div`
  background-color: ${COLORS.white};
  border-radius: 12px;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 20vh;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  background-color: ${COLORS.brown};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  min-width: inherit;
`;
const StyledPhoto = styled.img`
  max-height: 100px;
  width: auto;
`;

const LargeTextContainer = styled.div`
  color: ${COLORS.red};
  font-size: x-large;
  font-family: "caviar";
  font-weight: bolder;
`;

const StyledPhotoDescription = styled.div`
  color: ${COLORS.white};
  font-size: large;
`;

interface AchievementElementProps {
  logo: any;
  time: string;
  name: string;
  description: string;
}

export const AchievementElement = ({
  logo,
  time,
  name,
  description,
}: AchievementElementProps) => {
  return (
    <WrapperContainer>
      <StyledPhotoContainer>
        <StyledPhoto src={logo} alt="" />
        <StyledPhotoDescription>{time}</StyledPhotoDescription>
      </StyledPhotoContainer>
      <LargeTextContainer style={{ fontWeight: "800" }}>
        {name}
      </LargeTextContainer>
      <div style={{ padding: "16px", color: COLORS.brown }}>{description}</div>
    </WrapperContainer>
  );
};
