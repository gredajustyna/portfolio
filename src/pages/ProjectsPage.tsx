import React from "react";
import { COLORS } from "../consts/colors";

const ProjectsPage = React.forwardRef<HTMLElement, {}>((props, ref) => {
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
          Projects
        </div>
      </div>
    </section>
  );
});

export { ProjectsPage };
