import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const uiTranslations = {
  tr: {
    nav: { projects: "Projeler", resume: "CV", contact: "İletişim" },
    hero: { contactMe: "Bana Ulaşın", viewProjects: "Projelerimi İncele" },
    projects: { title: "Projeler", subtitle: "Öne çıkan çalışmalarımdan bazıları. Her kartın başlığına tıklayarak ilgili repoya gidebilirsin." },
    resume: { title: "CV", subtitle: "Deneyim ve eğitim geçmişimin kısa bir özeti. Detaylı CV'mi PDF olarak indirebilirsin.", download: "CV_INDIR.pdf", experience: "Deneyim", education: "Eğitim" },
    contact: { title: "İletişim", subtitle: "Bir proje mi konuşmak istiyorsun, yoksa sadece merhaba mı demek istiyorsun? Aşağıdan ulaşabilirsin." },
    preloader: {
      l1: "> INIT SYSTEM...",
      l2: "> LOADING KERNEL MODULES... [OK]",
      l3: "> BYPASSING SECURITY PROTOCOLS... [OK]",
      l4: "> ESTABLISHING SECURE CONNECTION... [OK]",
      l5: "> ACCESS GRANTED.",
      l6: "> WELCOME, PRODUCT ENGINEER."
    }
  },
  en: {
    nav: { projects: "Projects", resume: "Resume", contact: "Contact" },
    hero: { contactMe: "Contact Me", viewProjects: "View Projects" },
    projects: { title: "Projects", subtitle: "Some of my featured works. You can visit the repositories by clicking on the card titles." },
    resume: { title: "Resume", subtitle: "A brief summary of my experience and education. You can download my detailed CV as a PDF.", download: "DOWNLOAD_CV.pdf", experience: "Experience", education: "Education" },
    contact: { title: "Contact", subtitle: "Want to talk about a project, or just want to say hi? Reach out below." },
    preloader: {
      l1: "> INIT SYSTEM...",
      l2: "> LOADING KERNEL MODULES... [OK]",
      l3: "> BYPASSING SECURITY PROTOCOLS... [OK]",
      l4: "> ESTABLISHING SECURE CONNECTION... [OK]",
      l5: "> ACCESS GRANTED.",
      l6: "> WELCOME, PRODUCT ENGINEER."
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('tr');

  const t = (section, key) => {
    return uiTranslations[language][section][key];
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
