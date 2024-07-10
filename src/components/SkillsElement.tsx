import React from "react";
import styled from "styled-components";
import { COLORS } from "../consts/colors";

const SkillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

const SkillName = styled.div`
  font-family: "caviar";
  font-size: 1.5rem;
  color: ${COLORS.red};
`;

const ProgressBarContainer = styled.div`
  width: 40%;
  height: 25px;
  background-color: ${COLORS.white};
  border-radius: 16px;
  margin: 20px 0;
`;

const Filler = styled.div`
  height: 100%;
  background-color: ${COLORS.red};
  border-radius: inherit;
  text-align: right;
`;

const DescriptionContainer = styled.div`
  padding: 16px;
  font-size: large;
  color: ${COLORS.brown};
  background-color: ${COLORS.white};
  border-radius: 12px;
  max-width: 40%;
`;

interface SkillsElementProps {
  name: string;
  progress: number;
  description: string;
}

export const SkillsElement = ({
  name,
  progress,
  description,
}: SkillsElementProps) => {
  return (
    <SkillRow>
      <SkillName>{name}</SkillName>
      <ProgressBarContainer>
        <Filler style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
    </SkillRow>
  );
};
