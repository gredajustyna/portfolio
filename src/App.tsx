import React from "react";
import "./App.css";
import "./assets/fonts/fonts.css";
import { MainPage } from "./pages/MainPage";
import { COLORS } from "./consts/colors";

function App() {
  return (
    <div
      style={{ backgroundColor: COLORS.lighter_pink, height: "max-content" }}
    >
      <MainPage />
    </div>
  );
}

export default App;
