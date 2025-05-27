import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import lang from "../lang.json";
import Image from "next/image";
import { 
  SiTypescript, SiNextdotjs, SiNodedotjs, SiReact, 
  SiVite, SiElectron, SiDart, SiFlutter, 
  SiJavascript, SiGit, SiGithub, SiTailwindcss, 
  SiHtml5, SiCss3 
} from "react-icons/si";
import { Gavel, FileAudio, Webhook, Bot } from "lucide-react";
import HeadBar from "../components/HeadBar";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt_br");
  const [bg, setBg] = useState(styles.main);
  const [bg2, setBg2] = useState(styles.contact);
  const [bg3, setBg3] = useState(styles.button);
  const [bg4, setBg4] = useState(styles.button2);
  const [img, setImg] = useState("/darkoff.png");

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Atualiza todos os estilos relacionados ao tema
    setBg(newTheme === "dark" ? styles.maind : styles.main);
    setBg3(newTheme === "dark" ? styles.buttond : styles.button);
    setBg4(newTheme === "dark" ? styles.button2d : styles.button2);
    setBg2(newTheme === "dark" ? styles.contact2 : styles.contact);
    setImg(newTheme === "dark" ? "/darkon.png" : "/darkoff.png");
  };

  // Função para mudar o idioma
  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  // Efeito para carregar configurações salvas
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedLanguage = localStorage.getItem("language") || "pt_br";
    
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    // Aplica os estilos do tema salvo
    if (savedTheme === "dark") {
      setBg(styles.maind);
      setBg3(styles.buttond);
      setBg4(styles.button2d);
      setBg2(styles.contact2);
      setImg("/darkon.png");
    }
  }, []);

  const currentLang = lang[language as keyof typeof lang];

  return (
    <div className={styles.container}>
      <Head>
        <title>Kailan Gonçalves - Blayy Dev</title>
        <meta name="description" content="Meu portfólio profissional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadBar 
        theme={theme}
        language={language}
        onThemeChange={toggleTheme}
        onLanguageChange={handleLanguageChange}
      />

      <main className={bg}>
        <h1 className={styles.title}>- BlayyDev -</h1>

        <p className={styles.description}>{currentLang.description}</p>

        <div className={styles.grid}>
          <Link href="/project/sites" className={styles.rUnder}>
            <div className={styles.card}>
              <h2><Webhook /> {currentLang.pj1_title} &rarr;</h2>
              <p>{currentLang.pj1_description}</p>
            </div>
          </Link>
          
          <Link href="/project/soundtracks" className={styles.rUnder}>
            <div className={styles.card}>
              <h2><FileAudio /> {currentLang.pj2_title} &rarr;</h2>
              <p>{currentLang.pj2_description}</p>
            </div>
          </Link>
          
          <Link href="/project/mods" className={styles.rUnder}>
            <div className={styles.card}>
              <h2><Gavel /> {currentLang.pj3_title} &rarr;</h2>
              <p>{currentLang.pj3_description}</p>
            </div>
          </Link>
          
          <Link href="/project/bots" className={styles.rUnder}>
            <div className={styles.card}>
              <h2><Bot /> {currentLang.pj4_title} &rarr;</h2>
              <p>{currentLang.pj4_description}</p>
            </div>
          </Link>
        </div>

        <h1 className={styles.title}>Tecnologias</h1>
        <div className={styles.techGrid}>
          <span className={styles.techItem}><SiTypescript size={14} /> TypeScript</span>
          <span className={styles.techItem}><SiNextdotjs size={14} /> Next.js</span>
          <span className={styles.techItem}><SiNodedotjs size={14} /> Node.js</span>
          <span className={styles.techItem}><SiReact size={14} /> React</span>
          <span className={styles.techItem}><SiVite size={14} /> Vite</span>
          <span className={styles.techItem}><SiElectron size={14} /> Electron</span>
          <span className={styles.techItem}><SiDart size={14} /> Dart</span>
          <span className={styles.techItem}><SiFlutter size={14} /> Flutter</span>
          <span className={styles.techItem}><SiJavascript size={14} /> JavaScript</span>
          <span className={styles.techItem}><SiGit size={14} /> Git</span>
          <span className={styles.techItem}><SiGithub size={14} /> GitHub</span>
          <span className={styles.techItem}><SiTailwindcss size={14} /> Tailwind</span>
          <span className={styles.techItem}><SiHtml5 size={14} /> HTML</span>
          <span className={styles.techItem}><SiCss3 size={14} /> CSS</span>
        </div>

        
      </main>
    </div>
  );
};

export default Home;