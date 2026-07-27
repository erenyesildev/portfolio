import { data } from "../data";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();
  const projects = data[language].projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="projeler" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="section__title mono" 
        >
          <span style={{color: 'var(--accent-4)'}}>&gt; </span>{t('projects', 'title')}
        </motion.h2>
        <motion.p 
          className="section__subtitle"
        >
          {t('projects', 'subtitle')}
        </motion.p>

        <motion.div 
          className="grid grid--projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="card card--project"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
                borderColor: "var(--accent-1)"
              }}
            >
              <div className="card__accent" aria-hidden="true" />
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FolderGit2 size={20} color="var(--accent-2)" />
                {p.title}
              </h3>
              <p>{p.description}</p>
              <div className="tag-cloud tag-cloud--small">
                {p.tags.map((t) => (
                  <span key={t} className="tag tag--outline mono" style={{ fontSize: '0.75rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
