import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  language: string;
  isSnowing: boolean;
  toggleTheme: () => void;
  handleLanguageChange: (lang: string) => void;
  toggleSnow: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState("pt_br");
  const [isSnowing, setIsSnowing] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    const savedLanguage = localStorage.getItem("language") || "pt_br";
    const savedSnow = localStorage.getItem("snowing") === "true";
    
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    setIsSnowing(savedSnow);
    
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleSnow = () => {
    const newVal = !isSnowing;
    setIsSnowing(newVal);
    localStorage.setItem("snowing", String(newVal));
  };

  return (
    <AppContext.Provider value={{ theme, language, isSnowing, toggleTheme, handleLanguageChange, toggleSnow }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
