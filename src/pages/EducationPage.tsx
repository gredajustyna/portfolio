import React from "react";
import { COLORS } from "../consts/colors";
import { EducationElement } from "../components/EducationElement";
import agh from "../assets/images/agh.png";
import cambridge from "../assets/images/cambridge-english-language-assessment-logo-removebg-preview.png";
import huawei from "../assets/images/SFTF_COLOURED-LOGOS-02.png";
import { AchievementElement } from "../components/AchievementElement";

const EducationPage = React.forwardRef<HTMLElement, {}>((props, ref) => {
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
          Education
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            paddingTop: "80px",
            width: "100%",
            paddingLeft: "30px",
          }}
        >
          <EducationElement
            time="2023 - now"
            name="Master’s Degree"
            university="AGH University of Science and Technology, Krakow"
            specialization="Information and Communication Technologies"
            description="A continuation of the bachelor’s degree studies, about to finish in September 2024. Received scholarship during the entire course due to exceptional grades."
            logo={agh}
          />
          <EducationElement
            time="2019-2024"
            name="Bachelor’s Degree"
            university="AGH University of Science and Technology, Krakow"
            specialization="Information and Communication Technologies"
            description="The degree focused on obtaining knowledge about programming, networking and telecommunications. The topic of the final thesis was ”Machine learning-based application to analyze ski jumping results”. Received scholarship during the last semester due to exceptional grades."
            logo={agh}
          />
        </div>
        <div
          style={{
            fontFamily: "caviar",
            fontSize: "2rem",
            color: COLORS.red,
            fontWeight: "bold",
            paddingLeft: "16px",
            paddingTop: "50px",
          }}
        >
          Certifications and Achievements
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            paddingTop: "60px",
            width: "100%",
            paddingLeft: "30px",
          }}
        >
          <AchievementElement
            time="2019"
            name="Cambridge English Level 3 Certificate"
            description="Received Grade A proving the knowledge of english language on C1/C2 level."
            logo={cambridge}
          />
          <AchievementElement
            time="2023"
            name="Huawei Seeds for the Future"
            description="The degree focused on obtaining knowledge about programming, networking and telecommunications. The topic of the final thesis was ”Machine learning-based application to analyze ski jumping results”. Received scholarship during the last semester due to exceptional grades."
            logo={huawei}
          />
        </div>
      </div>
    </section>
  );
});

export { EducationPage };
