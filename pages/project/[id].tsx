import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import lang from "../../lang.json";
import projects from "../../projects.json";

const sites = [
  {
  src: "rock-mine.vercel.app",
  title: "Rock Mine Website",
  img: "https://wallpaperaccess.com/full/284553.jpg",
  contributors: ["BlayyDev;https://github.com/kailangl", "Matt;https://github.com/minecodebr"]
  }
]
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

  
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt_br");

  useEffect(() => {
   
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);


  const bg = theme === "dark" ? styles.maind : styles.main;
  const bgButton = theme === "dark" ? styles.buttond : styles.button;

  
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
 const idc = project.type
  return (
    
    <div className={styles.container}>
    
      <main className={bg}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{currentLang[project.description]}</p>
      <Link href="/">
    <button className={bgButton}>{currentLang.back}</button>
  </Link>
       {id == "soundtracks" ? (
        <div>
     
 
  


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
) : id == "sites" ? ( 
  <div className={styles.container_m}>

 {sites.map((site, index) => (
   <div key={index} className={styles.card}>
   
     <img    width="100%"
       height="200"  src={site.img}></img>
     <div className={styles.cardContent}>
       
       
       <a
         href={site.src}
         title={site.title}
         target="_blank"
         rel="noopener noreferrer"
         className={styles.linkSecondary}
       >
         {site.title}
         <br></br>
       </a>
       
       {site.contributors.map((cont, index) => (
       
 <span key={index}>
          <a href={cont.split(";")[1]}>{cont.split(";")[0]}, </a>
        </span>
       
       
       ))}
     </div>
   </div>
   
 ))}
 </div>
  ) : (
    <h1>nao tem, arrombado</h1>
  )}
        

       
      </main>
    </div>
  );
};

export default ProjectPage;
