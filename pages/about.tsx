import { useAppContext } from "../contexts/AppContext";
import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/About.module.css";
import { 
  Code2, PenTool, Feather, BrainCircuit, 
  Palette, GraduationCap, Globe2 
} from "lucide-react";

function About() {
  const { theme } = useAppContext();

  return (
    <div className={homeStyles.main}>
      <Head>
        <title>Sobre Mim - Blayy Dev</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Sobre Mim</h1>

          <div className={styles.biography}>
            <p>
              Me chamo José Kailan Gonçalves Lima, um desenvolvedor focado em sistemas de alta 
              performance e escritor dedicado à exploração da condição humana. Com formação técnica 
              em Desenvolvimento de Sistemas e futuro engenheiro de software, aplico lógica e criatividade 
              para construir soluções robustas em diversas linguagens e tecnologias. Acredito que a 
              tecnologia e a filosofia são ferramentas complementares: uma estrutura o mundo digital, 
              a outra, a nossa percepção da realidade. Busco a excelência tanto no código que escrevo 
              quanto nas ideias que transformo em livros e poesias.
            </p>
            <p>
              Meu primeiro contato com a programação foi em 2021 quando, por pura curiosidade, me afundei 
              na criação de addons/mods para o Minecraft, tendo JS e JSON como primeiras tecnologias aprendidas. 
              Nesse meio, conquistei muitas oportunidades, chegando a trabalhar de forma indireta para a empresa 
              que fez o jogo na Marketplace oficial, tornando-me um criador afiliado. Em 2023, tive contato com 
              HTML, CSS e React, e foi em 2024 que comecei minha formação no ensino médio técnico no curso de 
              Desenvolvimento de Sistemas, onde consegui complementar meus aprendizados enquanto estudava novos conceitos.
            </p>
            <p>
              Em meados de outubro de 2025, após uma intensa crise de ansiedade, descobri minha paixão pela 
              escrita e pela ideia de criar sistemas filosóficos e poesias. Mesmo que no passado eu já tivesse 
              apresentado um certo interesse, somente nessa época entendi que isso fazia parte da minha vida, 
              logo após começar a escrever meu primeiro livro.
            </p>
            <p>
              No início de 2026, após um certo tempo de inatividade, aposentei-me oficialmente da criação de 
              addons/mods para o Minecraft, tanto para a Marketplace quanto para divulgação própria. Decidi 
              utilizar todo o meu tempo livre para o desenvolvimento da minha carreira como programador e escritor, 
              e foi logo no primeiro dia do ano que comecei o projeto de poesia diária, onde, absolutamente todos 
              os dias da minha vida a partir de 2026, uma poesia seria criada. Concluí que 2026 seria o ano mais 
              produtivo de toda a minha vida; não com base em esperanças rasas, mas sim com base em tudo o que eu 
              estava conseguindo criar e desenvolver.
            </p>
            <p>
              Levando em conta, também, que este seria meu último ano antes de viver a vida adulta, entendi que 
              era o meu maior espaço de desenvolvimento e que não poderia ser desperdiçado.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>
            <BrainCircuit size={28} /> Cargos e Áreas de Atuação
          </h2>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><Code2 size={24} /></div>
              <span className={styles.roleText}>Full-Stack Dev</span>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><GraduationCap size={24} /></div>
              <span className={styles.roleText}>Téc. Dev Sistemas 3/3</span>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><PenTool size={24} /></div>
              <span className={styles.roleText}>Escritor</span>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><Feather size={24} /></div>
              <span className={styles.roleText}>Poeta</span>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><BrainCircuit size={24} /></div>
              <span className={styles.roleText}>Filósofo</span>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><Palette size={24} /></div>
              <span className={styles.roleText}>Designer</span>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIcon}><GraduationCap size={24} /></div>
              <span className={styles.roleText}>Est. Engenharia de Software</span>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>
            <Globe2 size={28} /> Idiomas
          </h2>
          <div className={styles.languages}>
            <div className={styles.langItem}>
              <span>🇧🇷</span> Português (Nativo)
            </div>
            <div className={styles.langItem}>
              <span>🇺🇸</span> Inglês
            </div>
            <div className={styles.langItem}>
              <span>🇩🇪</span> Alemão
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;