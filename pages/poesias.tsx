import type { NextPage } from "next";
import Head from "next/head";
import { useAppContext } from "../contexts/AppContext";
import styles from "../styles/Home.module.css";
import lang from "../lang.json";

const Poesias: NextPage = () => {
  const { language } = useAppContext();
  
  // Opcional, mantido caso você queira traduzir o título/descrição depois
  const currentLang = lang[language as keyof typeof lang] || lang["pt_br"];
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Poesias - Blayy Dev</title>
        <meta name="description" content="Minhas Poesias" />
      </Head>

      <main className={`${styles.main} py-16 min-h-[80vh]`}>
        <h1 className={`${styles.title} mb-8`}>- Livros e Ebooks -</h1>
        <p className={`${styles.description} mb-12`}>
          Em breve...
        </p>
      </main>
    </div>
  );
};

export default Poesias;
