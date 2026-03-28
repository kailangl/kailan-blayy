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

const frontendTechs = [
  { name: "React", Icon: SiReact, url: "https://react.dev/" },
  { name: "Next.js", Icon: SiNextdotjs, url: "https://nextjs.org/" },
  { name: "Vite", Icon: SiVite, url: "https://vitejs.dev/" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, url: "https://tailwindcss.com/" },
  { name: "UnoCSS", Icon: SiUnocss, url: "https://unocss.dev/" },
  { name: "HTML5", Icon: SiHtml5, url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { name: "CSS3", Icon: SiCss3, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

const languageTechs = [
  { name: "TypeScript", Icon: SiTypescript, url: "https://www.typescriptlang.org/" },
  { name: "JavaScript", Icon: SiJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Golang", Icon: SiGo, url: "https://go.dev/" },
  { name: "C++", Icon: SiCplusplus, url: "https://cplusplus.com/" },
  { name: "Dart", Icon: SiDart, url: "https://dart.dev/" },
];

const backendTechs = [
  { name: "Node.js", Icon: SiNodedotjs, url: "https://nodejs.org/" },
  { name: "Electron", Icon: SiElectron, url: "https://www.electronjs.org/" },
  { name: "Flutter", Icon: SiFlutter, url: "https://flutter.dev/" },
  { name: "Firebase", Icon: SiFirebase, url: "https://firebase.google.com/" },
  { name: "Supabase", Icon: SiSupabase, url: "https://supabase.com/" },
  { name: "Vercel", Icon: SiVercel, url: "https://vercel.com/" },
  { name: "Git", Icon: SiGit, url: "https://git-scm.com/" },
  { name: "GitHub", Icon: SiGithub, url: "https://github.com/" },
];

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
            {frontendTechs.map((tech) => (
              <a 
                key={tech.name}
                href={tech.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.techItem} 
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <tech.Icon size={14} /> {tech.name}
              </a>
            ))}
          </div>

          <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Linguagens</h2>
          <div className={styles.techGrid} style={{ marginBottom: '3rem' }}>
            {languageTechs.map((tech) => (
              <a 
                key={tech.name}
                href={tech.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.techItem} 
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <tech.Icon size={14} /> {tech.name}
              </a>
            ))}
          </div>

          <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Backend & Ferramentas</h2>
          <div className={styles.techGrid} style={{ marginBottom: '3rem' }}>
            {backendTechs.map((tech) => (
              <a 
                key={tech.name}
                href={tech.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.techItem} 
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <tech.Icon size={14} /> {tech.name}
              </a>
            ))}
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Tecnologias;
