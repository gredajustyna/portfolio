import React from "react";
import styled from "styled-components";
import photo from "../assets/images/IMG_0889.jpg";
import { AboutMeWindow } from "../components/AboutMeWindow";

const StyledImg = styled.img`
  border-radius: 50%;
  width: 30vmin;
  height: 30vmin;
  object-fit: cover;
`;

export const AboutMePage = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "120px",
          paddingRight: "120px",
          paddingTop: "150px",
          gap: "100px",
        }}
      >
        <div>
          <StyledImg src={photo} alt="" />
        </div>
        <AboutMeWindow />
      </div>
    </section>
  );
});
