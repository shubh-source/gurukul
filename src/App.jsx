import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialFloating from './components/SocialFloating';
import AudioPlayer from './components/AudioPlayer';
import SearchModal from './components/SearchModal';

import Home from './pages/Home';
import About from './pages/About';
import Gurukul from './pages/Gurukul';
import Gaushala from './pages/Gaushala';
import Research from './pages/Research';
import Sanskar from './pages/Sanskar';
import Jyotish from './pages/Jyotish';
import Donate from './pages/Donate';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import Contact from './pages/Contact';

const PATH_MAP = {
  '/': 'home',
  '/about': 'about',
  '/gurukul': 'gurukul',
  '/gaushala': 'gaushala',
  '/research': 'research',
  '/sanskar': 'sanskar',
  '/jyotish': 'jyotish',
  '/donate': 'donate',
  '/admission': 'admission',
  '/gallery': 'gallery',
  '/notice': 'notice',
  '/contact': 'contact'
};

const PAGE_TO_PATH = {
  home: '/',
  about: '/about',
  gurukul: '/gurukul',
  gaushala: '/gaushala',
  research: '/research',
  sanskar: '/sanskar',
  jyotish: '/jyotish',
  donate: '/donate',
  admission: '/admission',
  gallery: '/gallery',
  notice: '/notice',
  contact: '/contact'
};

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    return PATH_MAP[currentPath] || 'home';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gurukul_theme') || 'dark';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync theme with HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gurukul_theme', theme);
  }, [theme]);

  // Handle URL history state & sync
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    const targetPath = PAGE_TO_PATH[pageId] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ pageId }, '', targetPath);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handlePopState = (e) => {
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      setActivePage(PATH_MAP[currentPath] || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About onNavigate={handlePageChange} />;
      case 'gurukul': return <Gurukul onNavigate={handlePageChange} />;
      case 'gaushala': return <Gaushala onNavigate={handlePageChange} />;
      case 'research': return <Research onNavigate={handlePageChange} />;
      case 'sanskar': return <Sanskar onNavigate={handlePageChange} />;
      case 'jyotish': return <Jyotish onNavigate={handlePageChange} />;
      case 'donate': return <Donate onNavigate={handlePageChange} />;
      case 'admission': return <Admission onNavigate={handlePageChange} />;
      case 'gallery': return <Gallery onNavigate={handlePageChange} />;
      case 'notice': return <Notice onNavigate={handlePageChange} />;
      case 'contact': return <Contact onNavigate={handlePageChange} />;
      default: return <Home onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="page-container">
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer setActivePage={handlePageChange} />

      <SocialFloating />
      <AudioPlayer />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handlePageChange}
      />
    </div>
  );
}
