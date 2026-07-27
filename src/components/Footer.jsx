import { data } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const profile = data[language].profile;

  return (
    <footer className="footer mono">
      <p>
        <span style={{ color: 'var(--accent-2)' }}>© {year}</span> {profile.name} — <span style={{ color: 'var(--accent-4)' }}>{profile.title}</span>
      </p>
    </footer>
  );
}
