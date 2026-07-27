import { data } from "../data";
import { motion } from "framer-motion";
import { DownloadCloud, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Resume() {
  const { language, t } = useLanguage();
  const profile = data[language].profile;
  const experience = data[language].experience;
  const education = data[language].education;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="cv" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="section__title mono"
        >
          <span style={{color: 'var(--accent-4)'}}>&gt; </span>{t('resume', 'title')}
        </motion.h2>
        <motion.p 
          className="section__subtitle"
        >
          {t('resume', 'subtitle')}
        </motion.p>

        <motion.div>
          <a className="btn btn--primary btn--download mono" href={profile.resumeFile} download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <DownloadCloud size={18} /> {t('resume', 'download')}
          </a>
        </motion.div>

        <div className="resume-columns">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="resume-columns__heading mono" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={20} /> {t('resume', 'experience')}
            </h3>
            <ul className="timeline">
              {experience.map((e) => (
                <motion.li variants={itemVariants} key={e.role + e.company} className="timeline__item">
                  <div className="timeline__dot" aria-hidden="true" style={{ background: 'var(--accent-1)', boxShadow: '0 0 10px var(--accent-1)' }} />
                  <div>
                    <p className="timeline__period mono" style={{ color: 'var(--accent-4)' }}>{e.period}</p>
                    <h4 style={{ color: 'var(--text)' }}>{e.role}</h4>
                    <p className="timeline__company mono">{e.company}</p>
                    <p className="timeline__desc">{e.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="resume-columns__heading mono" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={20} /> {t('resume', 'education')}
            </h3>
            <ul className="timeline">
              {education.map((ed) => (
                <motion.li variants={itemVariants} key={ed.school} className="timeline__item">
                  <div className="timeline__dot" aria-hidden="true" style={{ background: 'var(--accent-2)', boxShadow: '0 0 10px var(--accent-2)' }} />
                  <div>
                    <p className="timeline__period mono" style={{ color: 'var(--accent-4)' }}>{ed.period}</p>
                    <h4 style={{ color: 'var(--text)' }}>{ed.degree}</h4>
                    <p className="timeline__company mono">{ed.school}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
