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
`;

const StyledPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 20vh;
  max-width: 20vh;
`;

const StyledPhoto = styled.img`
  max-height: 100px;
  width: auto;
`;

const LargeTextContainer = styled.div`
  color: ${COLORS.red};
  font-size: larger;
`;

const StyledPhotoDescription = styled.div`
  color: ${COLORS.brown};
  font-size: large;
`;

interface ExperienceElementProps {
  logo: any;
  time: string;
  name: string;
  position: string;
  description: string;
}

export const ExperienceElement = ({
  logo,
  time,
  name,
  position,
  description,
}: ExperienceElementProps) => {
  return (
    <WrapperContainer>
      <StyledPhotoContainer>
        <StyledPhoto src={logo} alt="" />
        <StyledPhotoDescription>{time}</StyledPhotoDescription>
      </StyledPhotoContainer>
      <LargeTextContainer>{position}</LargeTextContainer>
      <LargeTextContainer>{name}</LargeTextContainer>
      <div>{description}</div>
    </WrapperContainer>
  );
};
