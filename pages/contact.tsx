import { useState } from "react";
import styles from "./styles/Home.module.css"; // Note o nome correto do arquivo

function About() {
  // Estado para controlar o tema (light/dark)
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    
    // Opcional: salvar no localStorage
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  // Aplicar a classe do tema ao elemento raiz
  const themeClass = theme === "dark" ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.main} ${themeClass}`}>
      {/* Seu conteúdo aqui */}
      
      <button onClick={toggleTheme}>
        Alternar para tema {theme === "light" ? "escuro" : "claro"}
      </button>
    </div>
  );
}

export default About;