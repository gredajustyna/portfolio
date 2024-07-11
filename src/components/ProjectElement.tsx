import React from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";
import { RiGitRepositoryLine } from "react-icons/ri";
import { getColorFromLanguage } from "../utils/getColorFromLanguage";

const WrapperContainer = styled.div`
  margin-top: 30px;
  background-color: ${COLORS.white};
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 10px;
  color: ${COLORS.red};

  &:hover {
    background-color: ${COLORS.red};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Zmiana cienia dla większego kontrastu
    color: ${COLORS.white};
  }
`;

const StyledPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 20vh;
  width: 100%;
`;

const StyledPhoto = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ProjectNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  font-size: larger;
  font-weight: bold;
  align-items: center;
  height: 40px;
  padding-left: 16px;
  margin-top: 10px;
  font-family: "caviar";
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-left: 16px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: "caviar";
`;

const LanguageDot = styled.div<{ color: string }>`
  border-radius: 50%;
  background-color: ${({ color }) => color};
  height: 15px;
  width: 15px;
`;

interface ProjectElementProps {
  name: string;
  language: string;
  description: string;
  link: string;
  photo: any;
}

export const ProjectElement = ({
  name,
  language,
  description,
  link,
  photo,
}: ProjectElementProps) => {
  return (
    <WrapperContainer onClick={() => window.open(link)}>
      <StyledPhotoContainer>
        <StyledPhoto src={photo} />
      </StyledPhotoContainer>
      <ProjectNameContainer>
        <RiGitRepositoryLine />
        {name}
      </ProjectNameContainer>
      <div
        style={{
          paddingLeft: "12px",
          color: COLORS.brown,
          paddingBottom: "12px",
        }}
      >
        {description}
      </div>
      <LanguageContainer>
        <LanguageDot color={getColorFromLanguage(language)} />
        {language}
      </LanguageContainer>
    </WrapperContainer>
  );
};
