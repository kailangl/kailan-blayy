import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import lang from "../lang.json";
import { 
  SiTypescript, SiNextdotjs, SiNodedotjs, SiReact
} from "react-icons/si";
import { Gavel, FileAudio, Webhook, Bot } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";

const Home: NextPage = () => {
  const { language } = useAppContext();
  
  const currentLang = lang[language as keyof typeof lang] || lang["pt_br"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Kailan Gonçalves - Blayy Dev</title>
        <meta name="description" content="Meu portfólio profissional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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

        <h1 className={styles.title}>Principais Tecnologias</h1>
        <div className={styles.techGrid}>
          <span className={styles.techItem}><SiReact size={14} /> React</span>
          <span className={styles.techItem}><SiNextdotjs size={14} /> Next.js</span>
          <span className={styles.techItem}><SiTypescript size={14} /> TypeScript</span>
          <span className={styles.techItem}><SiNodedotjs size={14} /> Node.js</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/tecnologias">
            <button className={styles.button}>
              Ver todas as tecnologias &rarr;
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;