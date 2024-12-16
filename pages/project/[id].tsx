import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import lang from "../../lang.json";
import projects from "../../projects.json";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Estados para idioma e tema
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt_br");

  useEffect(() => {
    // Carregar configurações do localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  // Determina os estilos com base no tema
  const bg = theme === "dark" ? styles.maind : styles.main;
  const bgButton = theme === "dark" ? styles.buttond : styles.button;

  // Encontra o projeto pelo ID
  const project = projects.find((proj) => proj.id === id);

  const currentLang = lang[language];

  if (!project) {
    return (
      <div className={styles.container}>
        <main className={bg}>
          <p className={styles.description}>{currentLang.projectNotFound}</p>
          <Link href="/">
            <button className={bgButton}>{currentLang.back}</button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={bg}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>

        <h2 className={styles.subtitle}>{currentLang.relatedProjects}</h2>
        <div className={styles.grid}>
          {project.relatedProjects.map((related, index) => (
            <div key={index} className={styles.card}>
              <h2>{related.title}</h2>
              <p>{related.description}</p>
            </div>
          ))}
        </div>

        <Link href="/">
          <button className={bgButton}>{currentLang.back}</button>
        </Link>
      </main>
    </div>
  );
};

export default ProjectPage;
