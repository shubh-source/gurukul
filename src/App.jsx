import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialFloating from './components/SocialFloating';
import SearchModal from './components/SearchModal';
import AudioPlayer from './components/AudioPlayer';

import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Events from './pages/Events';
import News from './pages/News';
import Contact from './pages/Contact';

const PATH_MAP = {
  '/': 'home',
  '/about': 'about',
  '/academics': 'academics',
  '/admissions': 'admissions',
  '/campus': 'campus',
  '/events': 'events',
  '/news': 'news',
  '/contact': 'contact'
};

const PAGE_TO_PATH = {
  'home': '/',
  'about': '/about',
  'academics': '/academics',
  'admissions': '/admissions',
  'campus': '/campus',
  'events': '/events',
  'news': '/news',
  'contact': '/contact'
};

export default function App() {
  const getInitialPage = () => {
    const path = window.location.pathname;
    return PATH_MAP[path] || 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gurukul_theme') || 'dark';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync state with theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gurukul_theme', theme);
  }, [theme]);

  // Handle true multi-page URL routing & browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = PATH_MAP[path] || 'home';
      setActivePage(page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate between true pages
  const handleNavigate = (pageId) => {
    const targetPath = PAGE_TO_PATH[pageId] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setActivePage(pageId);
    window.scrollTo(0, 0); // Instant reset to top for true multi-page feel
  };

  // Global shortcut for Search (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'academics':
        return <Academics onNavigate={handleNavigate} />;
      case 'admissions':
        return <Admissions onNavigate={handleNavigate} />;
      case 'campus':
        return <CampusLife onNavigate={handleNavigate} />;
      case 'events':
        return <Events onNavigate={handleNavigate} />;
      case 'news':
        return <News onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="page-container">
      {/* Automatic Background Calm Music */}
      <AudioPlayer />

      {/* Navigation Header Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Floating Sticky Social Bar */}
      <SocialFloating />

      {/* Global Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Active Page View */}
      <main className="main-content" key={activePage}>
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={handleNavigate} />
    </div>
  );
}
