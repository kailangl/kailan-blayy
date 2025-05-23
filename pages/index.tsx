import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import lang from "../lang.json";
import Image from "next/image";
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiReact, SiVite, SiElectron, SiDart, SiFlutter, SiJavascript, SiGit, SiGithub, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";
import { Gavel, FileAudio, Webhook, Bot } from "lucide-react";

const Home: NextPage = () => {
  const [bg, setBg] = useState(styles.main);
  const [bg2, setBg2] = useState(styles.contact);
  const [bg3, setBg3] = useState(styles.button);
  const [bg4, setBg4] = useState(styles.button2);
  const [img, setImg] = useState("/darkoff.png");
  const [language, setLanguage] = useState("pt_br");

  useEffect(() => {
   
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    if (savedTheme === "dark") {
      setBg(styles.maind);
      setBg3(styles.buttond);
      setBg4(styles.button2d);
      setBg2(styles.contact2);
      setImg("/darkon.png");
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleBackground = () => {
    const isDarkMode = bg === styles.main;

   
    setBg(isDarkMode ? styles.maind : styles.main);
    setBg3(isDarkMode ? styles.buttond : styles.button);
    setBg4(isDarkMode ? styles.button2d : styles.button2);
    setBg2(isDarkMode ? styles.contact2 : styles.contact);
    setImg(isDarkMode ? "/darkon.png" : "/darkoff.png");

   
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);

    
    localStorage.setItem("language", newLanguage);
  };
  const handleClick2 = () => {
    alert("Você clicou na imagem!");
  };
  const currentLang = lang[language];

  return (
    <div className={styles.container}>
    
      <Head>
        <title>Kailan Gonçalves - Blayy Dev</title>
        <meta name="description" content="my portifolio" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>

      <main className={bg}>
  
        <div className={styles.startd}>
          <select
            className={bg4}
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="pt_br">Português</option>
            <option value="en_us">English</option>
            <option value="es_mx">Español</option>
          </select>
      
          <button
            onClick={toggleBackground}
            style={{
              border: "none",
              padding: 10,
              background: "none",
              cursor: "pointer",
            }}
          >
            <Image
              src={img} 
              alt="Imagem Botão"
              width={32} 
              height={32} 
            />
          </button>
        </div>

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
              <h2>< FileAudio /> {currentLang.pj2_title} &rarr;</h2>
              <p>{currentLang.pj2_description}</p>
            </div>
          </Link>
          <Link href="/project/mods" className={styles.rUnder}>
            <div className={styles.card}>
          
              <h2>  <Gavel /> {currentLang.pj3_title} &rarr;</h2>
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
        <h1 className={styles.title}>Links</h1>
        <div className={styles.vsfdcaralho}>

          <Link href="https://discord.com/users/481534167893540874">
            <Image
              alt="Imagem Botão"
              src="/discord.png"
              width={64}
              height={64}
              className={styles.imgicon}
            />
              
          </Link>
          
          <Link href="https://github.com/kailangl">
            <Image
              alt="Imagem Botão"
              src="/github.png"
              width={64}
              height={64}
              className={styles.imgicon}
              
            />
                
          </Link>
          <Link href="https://x.com/blayyrandom?t=i-zxvy5HMCmP63p8hMc9KQ&s=33">
            <Image
              alt="Imagem Botão"
              src="/x.png"
              width={64}
              height={64}
              className={styles.imgicon}
            />
               
          </Link>
        
          <Link href="https://www.instagram.com/kailan.gl/profilecard/?igsh=MXRwMWh0a2I2OWFidQ==">
            <Image
              alt="Imagem Botão"
              src="/instagram.png"
              width={64}
              height={64}
              className={styles.imgicon}
            />
               
          </Link>
          
        </div>
       
      </main>
   
    </div>
  );
};

export default Home;
