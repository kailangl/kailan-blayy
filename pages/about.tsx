import { useState } from "react";
import HeadBar from "../components/HeadBar";
import styles from "../styles/Home.module.css";
function About() {
  // State for theme (light/dark mode)
  const [theme, setTheme] = useState<("light") | ("dark")>("light");
  
  // State for language selection
  const [language, setLanguage] = useState("pt_br");

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // You might want to save this preference to localStorage
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // You might want to save this preference to localStorage
    localStorage.setItem("language", lang);
    // Here you would typically implement your i18n logic
  };

  return (
    <main className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <HeadBar 
        theme={theme}
        language={language}
        onThemeChange={toggleTheme}
        onLanguageChange={handleLanguageChange}
      />
      <h1>foadSES</h1>
      <p>PAO MOFADO CHEIO DE ESPERM</p>
    </main>
  );
}

export default About;