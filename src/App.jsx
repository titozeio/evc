import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Vehicles from './components/Vehicles';
import Prices from './components/Prices';
import Footer from './components/Footer';
import { translations } from './i18n/translations';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Load saved preferences
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');

    if (savedLanguage) setLanguage(savedLanguage);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Save preferences
    localStorage.setItem('language', language);
    localStorage.setItem('theme', theme);

    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
  }, [language, theme]);

  const t = translations[language];

  return (
    <div className="app">
      <Navigation
        t={t}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero t={t} />
      <Calculator t={t} />
      <Vehicles t={t} />
      <Prices t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
