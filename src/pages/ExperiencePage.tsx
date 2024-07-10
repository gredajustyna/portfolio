import React from "react";
import { COLORS } from "../consts/colors";
import { ExperienceElement } from "../components/ExperienceElement";
import logo_hcf from "../assets/images/LOGO_horizontal_v2x600x176.png";

const ExperiencePage = React.forwardRef<HTMLElement, {}>((props, ref) => {
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
          Experience
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <ExperienceElement
            name="The Human Collossus Foundation"
            position="Flutter Developer"
            time="2021-2023"
            logo={logo_hcf}
            description="Started with a 3 months internship, the job focused on developing applications for both mobile devices and desktops. The development included writing both Dart and native (Kotlin/Swift) code, publishing packages and plugins to pub.dev, providing READMEs, documentation and articles."
          />
        </div>
      </div>
    </section>
  );
});

export { ExperiencePage };
