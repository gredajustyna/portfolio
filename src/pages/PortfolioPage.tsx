import React from "react";
import { COLORS } from "../consts/colors";
import { ProjectElement } from "../components/ProjectElement";
import weather from "../assets/images/Zrzut ekranu 2024-07-10 o 14.18.19.png";
import styled from "styled-components";

const ProjectElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 30px;
  margin-right: 16px;
  margin-left: 16px;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PortfolioPage = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} style={{ paddingTop: "500px" }}>
      <div style={{ height: "90vh" }}>
        <div
          style={{
            fontFamily: "caviar",
            fontSize: "3rem",
            color: COLORS.red,
            fontWeight: "bold",
            paddingLeft: "16px",
          }}
        >
          Portfolio
        </div>
        <ProjectElementsContainer>
          <ProjectElement
            name="weather-app"
            language="Typescript"
            photo={weather}
            description="This project consists of a simple, quite minimalistic weather forecast website. It features current weather depending on the localization, 24h forecast and some indicators like probability of rain, humidity or air quality."
            link="https://github.com/gredajustyna/WeatherApp"
          />
          <ProjectElement
            name="Dermtektyw"
            language="Javascript"
            photo={weather}
            description="With some simple UI, the power of the application lays behind the code - using a local server hosted Tensorflow model, the application allows its user to take a photo of their skin and diagnose one of three groups of diseases."
            link="https://github.com/gredajustyna/Dermtektyw"
          />
          <ProjectElement
            name="Czestujem"
            language="Dart"
            photo={weather}
            description="An application that supports local foodsharing, it uses Flutter&Dart as a programming language and Firebase to allow communication between users and the storage of products. The whole interface is in Polish."
            link="https://github.com/gredajustyna/CzestuJEM"
          />
          <ProjectElement
            name="BazaDan"
            language="Dart"
            photo={weather}
            description="Repository for AGH2021/22 WWW classes project. It is an app for the restaurant that allows users to order food and make a reservation. The app is created with Flutter and Dart with some external API."
            link="https://github.com/gredajustyna/BazaDan"
          />
          <ProjectElement
            name="weather-app"
            language="Typescript"
            photo={weather}
            description="This project consists of a simple, quite minimalistic weather forecast website. It features current weather depending on the localization, 24h forecast and some indicators like probability of rain, humidity or air quality."
            link="https://github.com/gredajustyna/WeatherApp"
          />
        </ProjectElementsContainer>
      </div>
    </section>
  );
});

export { PortfolioPage };
