import React, { ReactNode } from "react";
import HeadBar from "./HeadBar";
import Snowflakes from "./Snowflakes";
import { useAppContext } from "../contexts/AppContext";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, language, isSnowing, toggleTheme, handleLanguageChange, toggleSnow } = useAppContext();

  return (
    <>
      <Snowflakes />
      <HeadBar 
        theme={theme}
        language={language}
        isSnowing={isSnowing}
        onThemeChange={toggleTheme}
        onLanguageChange={handleLanguageChange}
        onSnowToggle={toggleSnow}
      />
      {children}
    </>
  );
}
