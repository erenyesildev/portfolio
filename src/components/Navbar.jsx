import { data } from "../data";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const profile = data[language].profile;

  const links = [
    { href: "#hakkimda", label: language === 'tr' ? "Hakkımda" : "About" },
    { href: "#projeler", label: t('nav', 'projects') },
    { href: "#cv", label: t('nav', 'resume') },
    { href: "#iletisim", label: t('nav', 'contact') },
  ];

  return (
    <motion.header 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <a href="#top" className="navbar__brand mono">
        <span className="navbar__brand-tag">&lt;</span>
        {profile.name.split(' ')[0]}
        <span className="navbar__brand-tag">/&gt;</span>
      </a>
      
      <div className="navbar__menu">
        <nav className="navbar__links">
          {links.map((l) => (
            <motion.a 
              key={l.href} 
              href={l.href}
              className="mono"
              whileHover={{ color: 'var(--accent-1)' }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
        
        <button 
          onClick={toggleLanguage} 
          className="mono" 
          style={{ 
            padding: '0.2rem', 
            fontSize: '0.8rem', 
            display: 'flex', 
            alignItems: 'center', 
            borderRadius: '20px', 
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            left: language === 'tr' ? '2px' : '50%',
            width: 'calc(50% - 2px)',
            height: 'calc(100% - 4px)',
            backgroundColor: 'var(--accent-1)',
            borderRadius: '20px',
            transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0
          }} />
          <span style={{ 
            padding: '0.2rem 0.6rem', 
            zIndex: 1, 
            color: language === 'tr' ? '#050505' : 'rgba(255,255,255,0.7)', 
            transition: 'color 0.3s',
            fontWeight: language === 'tr' ? 'bold' : 'normal'
          }}>TR</span>
          <span style={{ 
            padding: '0.2rem 0.6rem', 
            zIndex: 1, 
            color: language === 'en' ? '#050505' : 'rgba(255,255,255,0.7)', 
            transition: 'color 0.3s',
            fontWeight: language === 'en' ? 'bold' : 'normal'
          }}>EN</span>
        </button>
      </div>
    </motion.header>
  );
}
