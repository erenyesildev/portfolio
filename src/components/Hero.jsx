import { data } from "../data";
import { motion } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();
  const profile = data[language].profile;
  const skills = data[language].skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="hakkimda" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <motion.div 
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="avatar">
          <Terminal size={40} color="var(--accent-1)" />
        </motion.div>
        
        <motion.p variants={itemVariants} className="eyebrow mono" style={{color: 'var(--accent-4)'}}>
          <span style={{opacity: 0.7}}>&gt; </span>{language === 'tr' ? 'Merhaba, ben' : 'Hello, I am'}
        </motion.p>
        
        <motion.h1 variants={itemVariants}>{profile.name}</motion.h1>
        
        <motion.h2 variants={itemVariants} className="hero__role mono" style={{color: 'var(--accent-1)'}}>
          {profile.title}
        </motion.h2>
        
        <motion.p variants={itemVariants} className="hero__tagline">{profile.tagline}</motion.p>

        <motion.div variants={itemVariants} className="hero__cta">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--primary" 
            href="#projeler"
          >
            {t('hero', 'viewProjects')} <ChevronRight size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="btn btn--ghost mono" 
            href="#iletisim"
          >
            ./{language === 'tr' ? 'iletisim.sh' : 'contact.sh'}
          </motion.a>
        </motion.div>

        <motion.p variants={itemVariants} className="hero__bio">{profile.bio}</motion.p>

        <motion.div variants={itemVariants} className="tag-cloud">
          {skills.map((s, i) => (
            <motion.span 
              key={s} 
              className="tag mono"
              whileHover={{ 
                scale: 1.1, 
                color: 'var(--bg)', 
                backgroundColor: 'var(--accent-4)',
                borderColor: 'var(--accent-4)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.05) }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
