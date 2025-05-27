import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { 
  FiMoon, 
  FiSun, 
  FiMenu,
  FiX,
  FiUser,
  FiSettings,
  FiMail,
  FiChevronDown
} from "react-icons/fi";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

interface HeadBarProps {
  theme: string;
  language: string;
  onThemeChange: (theme: string) => void;
  onLanguageChange: (lang: string) => void;
}

const HeadBar = ({ 
  theme, 
  language, 
  onThemeChange, 
  onLanguageChange 
}: HeadBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  // Atualiza a seção ativa quando a rota muda
  useEffect(() => {
    const path = router.asPath.split('/')[1] || 'home';
    setActiveSection(path);
  }, [router.asPath]);

  // Efeito para detectar scroll apenas na página inicial
  useEffect(() => {
    if (router.pathname !== '/') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['about', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  const toggleTheme = () => {
    onThemeChange(theme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value);
  };

  const languageOptions = {
    pt_br: { flag: "🇧🇷", label: "Português" },
    en_us: { flag: "🇺🇸", label: "English" },
    es_mx: { flag: "🇲🇽", label: "Español" }
  };

  const navItems = [
    { id: "home", path: "/", icon: <FiUser className={styles.navIcon} />, label: "Home" },
    { id: "about", path: "/about", icon: <FiSettings className={styles.navIcon} />, label: "Sobre" },
    { id: "contact", path: "/contact", icon: <FiMail className={styles.navIcon} />, label: "Contato" }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoContainer}>
        {/* Seu logo aqui */}
      </div>

      <button 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <FiX size={24} className={styles.menuIcon} />
        ) : (
          <FiMenu size={24} className={styles.menuIcon} />
        )}
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.languageSelector}>
          <select
            value={language}
            onChange={handleLanguageChange}
            className={styles.select}
            aria-label="Selecionar idioma"
          >
            {Object.entries(languageOptions).map(([code, {flag, label}]) => (
              <option key={code} value={code}>
                {flag} {label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={toggleTheme}
          className={styles.themeButton}
          aria-label="Alternar tema"
          data-theme={theme}
        >
          <div className={styles.themeToggle}>
            {theme === "dark" ? (
              <FiMoon className={styles.themeIcon} />
            ) : (
              <FiSun className={styles.themeIcon} />
            )}
            <span className={styles.themeText}>
              {theme === "dark" ? "Modo Escuro" : "Modo Claro"}
            </span>
          </div>
        </button>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link 
              href={item.path} 
              key={item.id}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ""
              }`}
            >
              <span>
                {item.icon}
                {item.label}
                {activeSection === item.id && (
                  <FiChevronDown className={styles.activeArrow} />
                )}
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.socialLinks}>
          <a href="https://discord.com/users/481534167893540874" target="_blank" rel="noopener noreferrer">
            <FaDiscord className={styles.socialIcon} />
          </a>
          <a href="https://github.com/kailangl" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.socialIcon} />
          </a>
          <a href="https://x.com/blayyrandom" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.socialIcon} />
          </a>
          <a href="https://www.instagram.com/kailan.gl" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.socialIcon} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeadBar;