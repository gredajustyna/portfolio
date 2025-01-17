import React, { useEffect, useState } from "react";
import { COLORS } from "../consts/colors";

interface TypewriterProps {
  text: string;
  delay: number;
}

export const Typewriter = ({ text, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span
      style={{
        fontFamily: "caviar",
        fontSize: "2rem",
        color: COLORS.red,
        fontWeight: "bold",
      }}
    >
      {currentText}
    </span>
  );
};
