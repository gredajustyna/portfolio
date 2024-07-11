import React from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";

const StyledPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 20vh;
  max-width: 20vh;
`;

const StyledPhoto = styled.img`
  max-height: 150px;
  width: auto;
`;

const StyledPhotoDescription = styled.div`
  color: ${COLORS.brown};
  font-size: large;
`;

const DescriptionContainer = styled.div`
  padding: 16px;
  font-size: large;
  color: ${COLORS.brown};
  background-color: ${COLORS.white};
  border-radius: 12px;
  max-width: 40%;
  display: flex;
  height: fit-content;
  flex-direction: column;
`;

const LargeTextContainer = styled.div`
  color: ${COLORS.red};
  font-size: x-large;
  font-family: "caviar";
  font-weight: bold;
`;

interface EducationElementProps {
  time: string;
  name: string;
  university: string;
  specialization: string;
  description: string;
  logo: any;
}

export const EducationElement = ({
  time,
  name,
  university,
  specialization,
  description,
  logo,
}: EducationElementProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <StyledPhotoContainer>
        <StyledPhoto src={logo} alt="logo" />
        <StyledPhotoDescription>{time}</StyledPhotoDescription>
      </StyledPhotoContainer>
      <DescriptionContainer>
        <LargeTextContainer>{name}</LargeTextContainer>
        <LargeTextContainer>{university}</LargeTextContainer>
        <LargeTextContainer
          style={{
            fontStyle: "italic",
            fontSize: "large",
            paddingBottom: "10px",
          }}
        >
          {specialization}
        </LargeTextContainer>
        <div>{description}</div>
      </DescriptionContainer>
    </div>
  );
};
