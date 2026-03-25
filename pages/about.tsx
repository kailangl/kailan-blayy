import { useAppContext } from "../contexts/AppContext";
import Head from "next/head";

function About() {
  const { theme } = useAppContext();

  return (
    <main className={theme === "dark" ? "dark-theme" : "light-theme"} style={{ minHeight: '80vh', padding: '2rem' }}>
      <Head>
        <title>Sobre Mim - Blayy Dev</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h1>Sobre Mim</h1>
        <p>Página em construção.</p>
      </div>
    </main>
  );
}

export default About;