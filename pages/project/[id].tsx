import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import lang from "../../lang.json";
import projects from "../../projects.json";

const tracks = [
  {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1942645151&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    artist: "BlayySTK",
    title: "Fantastic Mission",
    artistLink: "https://soundcloud.com/blay-2k",
    trackLink: "https://soundcloud.com/blay-2k/fantastic-mission",
  },
  {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1763612727&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    artist: "BlayySTK",
    title: "FutureTech Network",
    artistLink: "https://soundcloud.com/blay-2k",
    trackLink: "https://soundcloud.com/blay-2k/blayystk-futuretech-network",
  },
  {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1490040229&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    artist: "BlayySTK",
    title: "The Phantom Garden",
    artistLink: "https://soundcloud.com/blay-2k",
    trackLink: "https://soundcloud.com/blay-2k/blayy-the-phantom-garden-m4a",
  },
];
const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Estados para idioma e tema
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt_br");

  useEffect(() => {
    // Carregar configurações do localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  // Determina os estilos com base no tema
  const bg = theme === "dark" ? styles.maind : styles.main;
  const bgButton = theme === "dark" ? styles.buttond : styles.button;

  // Encontra o projeto pelo ID
  const project = projects.find((proj) => proj.id === id);

  const currentLang = lang[language];

  if (!project) {
    return (
      <div className={styles.container}>
        <main className={bg}>
          <p className={styles.description}>{currentLang.projectNotFound}</p>
          <Link href="/">
            <button className={bgButton}>{currentLang.back}</button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    
    <div className={styles.container}>
      
      <main className={bg}>
        
       {id == "soundtracks" ? (
        <div>
           <h1 className={styles.title}>- {currentLang.pj2_title} &rarr;</h1>
           <p className={styles.description}>{currentLang.pj2_description}</p>
 <div className={styles.container_m}>
 
 {tracks.map((track, index) => (
   <div key={index} className={styles.card}>
     <iframe
       width="100%"
       height="200"
       allow="autoplay"
       src={track.src}
       className={styles.iframe}
     ></iframe>
     <div className={styles.cardContent}>
       <a
         href={track.artistLink}
         title={track.artist}
         target="_blank"
         rel="noopener noreferrer"
         className={styles.link}
       >
         {track.artist}
       </a>
       <span> · </span>
       <a
         href={track.trackLink}
         title={track.title}
         target="_blank"
         rel="noopener noreferrer"
         className={styles.linkSecondary}
       >
         {track.title}
       </a>
     </div>
   </div>
   
 ))}
 </div>
</div>
) : ( 
  <h1>nao tem arrombado</h1>
  )}
        

        <Link href="/">
          <button className={bgButton}>{currentLang.back}</button>
        </Link>
      </main>
    </div>
  );
};

export default ProjectPage;
