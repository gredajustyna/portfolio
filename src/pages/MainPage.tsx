import React, { ReactElement, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";
import styled from "styled-components";
import { NavbarButton } from "../components/NavbarButton";
import { AboutMePage } from "./AboutMePage";
import { EducationPage } from "./EducationPage";
import { ExperiencePage } from "./ExperiencePage";
import { SkillsPage } from "./SkillsPage";
import { ContactPage } from "./ContactPage";
import { PortfolioPage } from "./PortfolioPage";

const ButtonContainer = styled.div`
  padding: 16px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const MainPage = (): ReactElement => {
  const aboutMeButtonRef = useRef<HTMLElement | null>(null);
  const skillsButtonRef = useRef<HTMLElement | null>(null);
  const educationButtonRef = useRef<HTMLElement | null>(null);
  const experienceButtonRef = useRef<HTMLElement | null>(null);
  const portfolioButtonRef = useRef<HTMLElement | null>(null);
  const contactButtonRef = useRef<HTMLElement | null>(null);

  const handleGenericScrollIntoView = (
    ref: React.MutableRefObject<HTMLElement | null>
  ) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <>
      <Navbar>
        <Logo />
        <ButtonContainer>
          <NavbarButton
            text="About me"
            onClick={() => handleGenericScrollIntoView(aboutMeButtonRef)}
          />
          <NavbarButton
            text="Skills"
            onClick={() => handleGenericScrollIntoView(skillsButtonRef)}
          />
          <NavbarButton
            text="Education"
            onClick={() => handleGenericScrollIntoView(educationButtonRef)}
          />
          <NavbarButton
            text="Experience"
            onClick={() => handleGenericScrollIntoView(experienceButtonRef)}
          />
          <NavbarButton
            text="Portfolio"
            onClick={() => handleGenericScrollIntoView(portfolioButtonRef)}
          />
          <NavbarButton
            text="Contact"
            onClick={() => handleGenericScrollIntoView(contactButtonRef)}
          />
        </ButtonContainer>
      </Navbar>
      <AboutMePage ref={aboutMeButtonRef} />
      <SkillsPage ref={skillsButtonRef} />
      <EducationPage ref={educationButtonRef} />
      <ExperiencePage ref={experienceButtonRef} />
      <PortfolioPage ref={portfolioButtonRef} />
      <ContactPage ref={contactButtonRef} />
    </>
  );
};
