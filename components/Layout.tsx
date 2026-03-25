import React, { ReactNode } from "react";
import HeadBar from "./HeadBar";
import { useAppContext } from "../contexts/AppContext";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, language, toggleTheme, handleLanguageChange } = useAppContext();

  return (
    <>
      <HeadBar 
        theme={theme}
        language={language}
        onThemeChange={toggleTheme}
        onLanguageChange={handleLanguageChange}
      />
      {children}
    </>
  );
}
