import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { navItems } from './data/navigation';
import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Parcours } from './components/sections/Parcours';
import { Certifications } from './components/sections/Certifications';
import { QuantaDynamic } from './components/sections/QuantaDynamic';
import { Contact } from './components/sections/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollProgress } from './components/common/ScrollProgress';

export function App() {
  const { isDark, toggleTheme } = useTheme();
  const sectionIds = navItems.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 relative">
        <ScrollProgress />
        <SkipLink />
        <Navbar activeSection={activeSection} isDark={isDark} toggleTheme={toggleTheme} />

      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Parcours />
        <Certifications />
        <QuantaDynamic />
        <Contact />
      </main>

      <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
