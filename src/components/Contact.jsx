import { data } from "../data";
import { motion } from "framer-motion";
import { Mail, Code2, User, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const profile = data[language].profile;

  return (
    <section id="iletisim" className="section section--contact">
      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--gradient-text)' }} />
        
        <h2 className="section__title mono">
          <span style={{color: 'var(--accent-4)'}}>&gt; </span>{t('contact', 'title')}
        </h2>
        <p className="section__subtitle">
          {t('contact', 'subtitle')}
        </p>

        <div className="contact-links">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--accent-1)" }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--primary mono" 
            href={`mailto:${profile.email}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Mail size={18} /> {profile.email}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--ghost mono"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Code2 size={18} /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--ghost mono"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <User size={18} /> LinkedIn
          </motion.a>
        </div>

        <p className="contact-location mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-3)' }}>
          <MapPin size={16} /> {profile.location}
        </p>
      </motion.div>
    </section>
  );
}
