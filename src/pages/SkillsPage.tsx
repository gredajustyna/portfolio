import React from "react";
import { COLORS } from "../consts/colors";
import { SkillsElement } from "../components/SkillsElement";

const SkillsPage = React.forwardRef<HTMLElement, {}>((props, ref) => {
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
          Skills
        </div>
        <SkillsElement
          name="Flutter"
          progress={80}
          description="Intermediate knowledge, multiple applications developed for
classes purposes, 2 years of professional experience, experience
with Firebase."
        />
        <SkillsElement
          name="React"
          progress={60}
          description="Intermediate knowledge, 0.5 years of professional experience, worked with developing small projects and Chrome extension."
        />
      </div>
    </section>
  );
});

export { SkillsPage };
