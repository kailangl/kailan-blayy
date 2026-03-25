import type { NextPage } from "next";
import Head from "next/head";
import { useAppContext } from "../contexts/AppContext";
import styles from "../styles/Home.module.css";
import { 
  SiTypescript, SiNextdotjs, SiNodedotjs, SiReact, 
  SiVite, SiElectron, SiDart, SiFlutter, 
  SiJavascript, SiGit, SiGithub, SiTailwindcss, 
  SiHtml5, SiCss3, SiGo, SiCplusplus, SiUnocss, 
  SiFirebase, SiSupabase, SiVercel 
} from "react-icons/si";

const Tecnologias: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tecnologias - Blayy Dev</title>
        <meta name="description" content="Minhas Tecnologias e Habilidades" />
      </Head>

      <main className={styles.main} style={{ padding: '4rem 0', minHeight: '80vh' }}>
        <h1 className={styles.title} style={{ marginBottom: '2rem' }}>- Tecnologias -</h1>
        <p className={styles.description} style={{ marginBottom: '3rem' }}>
          As ferramentas, linguagens e frameworks que utilizo.
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          
          <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Frontend & UI</h2>
          <div className={styles.techGrid} style={{ marginBottom: '3rem' }}>
            <span className={styles.techItem}><SiReact size={14} /> React</span>
            <span className={styles.techItem}><SiNextdotjs size={14} /> Next.js</span>
            <span className={styles.techItem}><SiVite size={14} /> Vite</span>
            <span className={styles.techItem}><SiTailwindcss size={14} /> Tailwind CSS</span>
            <span className={styles.techItem}><SiUnocss size={14} /> UnoCSS</span>
            <span className={styles.techItem}><SiHtml5 size={14} /> HTML5</span>
            <span className={styles.techItem}><SiCss3 size={14} /> CSS3</span>
          </div>

          <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Linguagens</h2>
          <div className={styles.techGrid} style={{ marginBottom: '3rem' }}>
            <span className={styles.techItem}><SiTypescript size={14} /> TypeScript</span>
            <span className={styles.techItem}><SiJavascript size={14} /> JavaScript</span>
            <span className={styles.techItem}><SiGo size={14} /> Golang</span>
            <span className={styles.techItem}><SiCplusplus size={14} /> C++</span>
            <span className={styles.techItem}><SiDart size={14} /> Dart</span>
          </div>

          <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Backend & Ferramentas</h2>
          <div className={styles.techGrid} style={{ marginBottom: '3rem' }}>
            <span className={styles.techItem}><SiNodedotjs size={14} /> Node.js</span>
            <span className={styles.techItem}><SiElectron size={14} /> Electron</span>
            <span className={styles.techItem}><SiFlutter size={14} /> Flutter</span>
            <span className={styles.techItem}><SiFirebase size={14} /> Firebase</span>
            <span className={styles.techItem}><SiSupabase size={14} /> Supabase</span>
            <span className={styles.techItem}><SiVercel size={14} /> Vercel</span>
            <span className={styles.techItem}><SiGit size={14} /> Git</span>
            <span className={styles.techItem}><SiGithub size={14} /> GitHub</span>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Tecnologias;
