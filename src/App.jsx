import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Preloader from "./components/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div id="top">
          <Background />
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
