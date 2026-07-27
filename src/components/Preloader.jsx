import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Preloader({ onComplete }) {
  const { t } = useLanguage();
  const [text, setText] = useState("");
  
  const fullText = `${t('preloader', 'l1')}
${t('preloader', 'l2')}
${t('preloader', 'l3')}
${t('preloader', 'l4')}
${t('preloader', 'l5')}
${t('preloader', 'l6')}`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="mono"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#050505",
        color: "#00ff66",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "5vw",
        fontSize: "clamp(1rem, 3vw, 1.5rem)",
        whiteSpace: "pre-wrap",
        lineHeight: 1.6,
      }}
    >
      <div>
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ display: "inline-block", width: "10px", height: "1.2em", backgroundColor: "#00ff66", verticalAlign: "middle", marginLeft: "4px" }}
        />
      </div>
    </motion.div>
  );
}
