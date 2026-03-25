import { useAppContext } from "../contexts/AppContext";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Contact() {
  const { theme } = useAppContext();
  const themeClass = theme === "dark" ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.main} ${themeClass}`} style={{ minHeight: '80vh', padding: '2rem' }}>
      <Head>
        <title>Contato - Blayy Dev</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h1>Contato</h1>
        <p>Formulário de contato em construção.</p>
      </div>
    </div>
  );
}

export default Contact;