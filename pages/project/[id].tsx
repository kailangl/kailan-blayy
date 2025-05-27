import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import lang from "../../lang.json";
import projects from "../../projects.json";
import HeadBar from "../../components/HeadBar";

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
const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
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
  const sites = [
    {
    src: "https://rock-mine.vercel.app",
    title: "Rock Mine Website",
    img: "/rockminesite.png",
    description: lang[language].pj1_list_desc[0],
    contributors: ["BlayyDev;https://github.com/kailangl", "Matt;https://github.com/minecodebr"]
    }
  ]
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
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    
    const [bg, setBg] = useState(styles.main);
  const [bg2, setBg2] = useState(styles.contact);
  const [bg3, setBg3] = useState(styles.button);
  const [bg4, setBg4] = useState(styles.button2);
  const [img, setImg] = useState("/darkoff.png");
    setBg(newTheme === "dark" ? styles.maind : styles.main);
    setBg3(newTheme === "dark" ? styles.buttond : styles.button);
    setBg4(newTheme === "dark" ? styles.button2d : styles.button2);
    setBg2(newTheme === "dark" ? styles.contact2 : styles.contact);
    setImg(newTheme === "dark" ? "/darkon.png" : "/darkoff.png");
  };
  return (
    
    <div className={styles.container}>
      <HeadBar 
        theme={theme}
        language={language}
        onThemeChange={toggleTheme}
        onLanguageChange={handleLanguageChange}
      />
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
  <div>

 {sites.map((site, index) => (
   
    <div key={index} className={styles.grid}>
      
      <div className={`${styles.card_site} `}>
      <div className={styles.siteImageContainer}>
        <img
          src={site.img}
          alt={site.title}
          width='100%'
          height='100%'
          className={styles.siteImage}
        />
      </div>
      <h6><a href={site.src} target="_blank" rel="noopener" className={`${styles.title}  ${styles.rUnder}`}>Rock Mine Website</a></h6> 
     <button className={bgButton} onClick={() => window.open(site.src, "_blank")}>&rarr; {site.src}</button>
        <p>{site.description}</p>
      
        <div className={styles.contributors}>
          <span><strong>{currentLang.contributors}: </strong></span>
          {site.contributors.map((contributor, i) => (
            <span key={i}>
            <button 
  className={bgButton}
  onClick={() => window.open(contributor.split(";")[1], "_blank")}
>
  {contributor.split(";")[0]}
</button>
              {i < site.contributors.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
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
