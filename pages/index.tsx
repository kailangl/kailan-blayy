import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import lang from "../lang.json";
import Image from "next/image";

const Home: NextPage = () => {
  const [bg, setBg] = useState(styles.main);
  const [bg2, setBg2] = useState(styles.contact);
  const [bg3, setBg3] = useState(styles.button);
  const [bg4, setBg4] = useState(styles.button2);
  const [img, setImg] = useState("/darkoff.png");
  const [language, setLanguage] = useState("pt_br");

  useEffect(() => {
    // Carregar o tema e idioma salvos no localStorageaaaA
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

    // Atualizar o estado do tema
    setBg(isDarkMode ? styles.maind : styles.main);
    setBg3(isDarkMode ? styles.buttond : styles.button);
    setBg4(isDarkMode ? styles.button2d : styles.button2);
    setBg2(isDarkMode ? styles.contact2 : styles.contact);
    setImg(isDarkMode ? "/darkon.png" : "/darkoff.png");

    // Salvar no localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);

    // Salvar no localStorage
    localStorage.setItem("language", newLanguage);
  };
  const handleClick2 = () => {
    alert("Você clicou na imagem!");
  };
  const currentLang = lang[language];

  return (
    <div className={styles.container}>
      <Head>
        <title>Kailan Gonçalo - Blayy Dev</title>
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
              src={img} // Caminho da sua imagem
              alt="Imagem Botão"
              width={32} // Largura da imagem
              height={32} // Altura da imagem
            />
          </button>
        </div>

        <h1 className={styles.title}>- Blayy Developer -</h1>

        <p className={styles.description}>{currentLang.description}</p>

        <div className={styles.grid}>
          <Link href="/project/sites" passHref className={styles.rUnder}>
            <div className={styles.card}>
              <h2>{currentLang.pj1_title} &rarr;</h2>
              <p>{currentLang.pj1_description}</p>
            </div>
          </Link>
          <Link href="/project/soundtracks" passHref className={styles.rUnder}>
            <div className={styles.card}>
              <h2>{currentLang.pj2_title} &rarr;</h2>
              <p>{currentLang.pj2_description}</p>
            </div>
          </Link>
          <Link href="/project/mods" passHref className={styles.rUnder}>
            <div className={styles.card}>
              <h2>{currentLang.pj3_title} &rarr;</h2>
              <p>{currentLang.pj3_description}</p>
            </div>
          </Link>
          <Link href="/project/native" passHref className={styles.rUnder}>
            <div className={styles.card}>
              <h2>{currentLang.pj4_title} &rarr;</h2>
              <p>{currentLang.pj4_description}</p>
            </div>
          </Link>
        </div>

        <div className={bg2}>
          <h1 className={styles.title}>{currentLang.contact}</h1>
          <p className={styles.code}>{currentLang.discord}</p>
          <p className={styles.code}>{currentLang.email}</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
