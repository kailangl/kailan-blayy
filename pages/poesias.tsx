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
        <h1 className={`${styles.title} mb-8`}>- Poesias -</h1>
        <p className={`${styles.description} mb-12`}>
          Alguns pensamentos e poemas espalhados pelo vento.
        </p>

        <div className="grid gap-8 max-w-[800px] mx-auto px-4">
          {/* Poema 1 */}
          <article className={`${styles.card} text-left p-8 w-full`}>
            <h2 className="text-2xl mb-4 text-[var(--text-primary)]">O Silêncio da Aurora</h2>
            <p className="whitespace-pre-line leading-[1.8] text-[var(--text-secondary)] text-[1.1rem]">
              Na calma que precede o sol nascer,{"\n"}
              Encontro o tempo em raro suspender.{"\n"}
              As folhas cantam, a brisa acorda,{"\n"}
              E a minha alma, por fim, transborda.
            </p>
          </article>

          {/* Poema 2 */}
          <article className={`${styles.card} text-left p-8 w-full`}>
            <h2 className="text-2xl mb-4 text-[var(--text-primary)]">Ecos de Código</h2>
            <p className="whitespace-pre-line leading-[1.8] text-[var(--text-secondary)] text-[1.1rem]">
              Nos labirintos de uma tela escura,{"\n"}
              A mente busca a pura arquitetura.{"\n"}
              Um ponto, um laço, um simples clarão,{"\n"}
              Nasce do nada a nova invenção.
            </p>
          </article>

          {/* Poema 3 */}
          <article className={`${styles.card} text-left p-8 w-full`}>
            <h2 className="text-2xl mb-4 text-[var(--text-primary)]">Tempo Fugaz</h2>
            <p className="whitespace-pre-line leading-[1.8] text-[var(--text-secondary)] text-[1.1rem]">
              O tempo escorre como areia à mão,{"\n"}
              Deixando rastros no meu coração.{"\n"}
              Não choro o ontem, nem temo o porvir,{"\n"}
              Pois é no hoje que aprendo a florir.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Poesias;
