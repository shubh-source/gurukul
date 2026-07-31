import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Search, Menu, X, Sparkles, BookOpen, GraduationCap, Phone, Calendar, Compass, Shield, ArrowRight, Youtube, Instagram, Send, PhoneCall, Newspaper } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme, onOpenSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', desc: 'Welcome overview & daily rhythm', icon: Compass },
    { id: 'about', label: 'About Us', desc: 'Sanatana heritage & Guru Parampara', icon: Shield },
    { id: 'academics', label: 'Academics', desc: 'Vedic STEM, Quantum AI & Ayurveda', icon: BookOpen },
    { id: 'admissions', label: 'Admissions & Fees', desc: 'Calculator & online registration', icon: GraduationCap },
    { id: 'campus', label: 'Campus Life', desc: '360° virtual tour & facilities', icon: Sparkles },
    { id: 'events', label: 'Events & Conclaves', desc: 'Conclaves & annual festival calendar', icon: Calendar },
    { id: 'news', label: 'Gurukul News & Press', desc: 'Live announcements & articles', icon: Newspaper },
    { id: 'contact', label: 'Contact Us', desc: 'Direct helpline, address & FAQs', icon: Phone }
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    setActivePage(id);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 180);
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Notice Bar */}
      <div 
        style={{
          background: 'linear-gradient(90deg, #1c1917 0%, var(--accent-saffron) 50%, #1c1917 100%)',
          color: '#fff',
          fontSize: '0.8rem',
          fontWeight: '600',
          textAlign: 'center',
          padding: '0.35rem 1rem',
          letterSpacing: '0.03em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.6rem'
        }}
      >
        <span>🚩 Admissions Open for Session 2026-27 | Vedic STEM & Holistic Gurukul Stream</span>
        <button 
          onClick={() => handleNavClick('admissions')}
          style={{ textDecoration: 'underline', color: '#fff', fontWeight: '800', cursor: 'pointer' }}
        >
          Apply Online →
        </button>
      </div>

      {/* Main Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-color)',
          transition: 'var(--transition)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          >
            <div 
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-saffron) 0%, var(--accent-gold) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(230, 81, 0, 0.4)',
                color: '#fff',
                fontSize: '1.4rem'
              }}
            >
              🕉️
            </div>
            <div>
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.35rem', fontWeight: '800', display: 'block', lineHeight: 1.1 }}>
                VEDATECH
              </span>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                GURUKUL ACADEMY
              </span>
            </div>
          </div>

          {/* Right Action Tools + HOVER EXPANDING SEARCH BUTTON + HAMBURGER */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            
            {/* Magnifier Icon that Expands into Search Pill on Hover or Touch */}
            <div
              onMouseEnter={() => setIsSearchHovered(true)}
              onMouseLeave={() => setIsSearchHovered(false)}
              style={{ position: 'relative' }}
            >
              <button
                onClick={onOpenSearch}
                title="Search Gurukul"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  height: '40px',
                  padding: isSearchHovered ? '0.5rem 1rem' : '0 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid',
                  borderColor: isSearchHovered ? 'var(--accent-gold)' : 'var(--border-color)',
                  color: isSearchHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  width: isSearchHovered ? '135px' : '40px',
                  transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, border-color 0.3s ease, background-color 0.3s ease',
                  boxShadow: isSearchHovered ? 'var(--shadow-sm)' : 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <Search size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                
                {/* Content visible when cursor hovers or tapped on mobile */}
                <span 
                  style={{ 
                    opacity: isSearchHovered ? 1 : 0, 
                    transition: 'opacity 0.25s ease 0.1s',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}
                >
                  Search...
                </span>
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? "Switch to Surya Gold Light Theme" : "Switch to Chandra Ashram Dark Theme"}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Apply Now CTA */}
            <button
              onClick={() => handleNavClick('admissions')}
              className="saffron-gradient-btn"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              Apply Now
            </button>

            {/* Hover-activated Hamburger Menu Button */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ display: 'inline-block' }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: isMenuOpen ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  border: '1px solid var(--border-glow)',
                  color: isMenuOpen ? '#0f0d0e' : 'var(--accent-gold)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background 0.4s ease, color 0.4s ease, border-color 0.4s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Menu size={22} />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ALWAYS MOUNTED HOVER DRAWER WITH CURVED CORNERS & GENTLE SLIDE */}
      <div 
        onMouseEnter={() => setIsMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: isMenuOpen ? 'blur(16px)' : 'blur(0px)',
          WebkitBackdropFilter: isMenuOpen ? 'blur(16px)' : 'blur(0px)',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          display: 'flex',
          justifyContent: 'flex-end',
          transition: 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 0.55s cubic-bezier(0.22, 1, 0.36, 1), -webkit-backdrop-filter 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: '100%',
            maxWidth: '460px',
            height: '100vh',
            background: 'var(--bg-primary)',
            borderLeft: '1px solid var(--accent-gold)',
            borderTopLeftRadius: '28px',
            borderBottomLeftRadius: '28px',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.75rem',
            overflowY: 'auto',
            position: 'relative',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            overflow: 'hidden'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.6rem' }}>🕉️</span>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                  VEDATECH GURUKUL
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Navigation Menu</p>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem' }}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
                    border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div 
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: isActive ? 'var(--accent-gold)' : 'var(--bg-primary)',
                        color: isActive ? '#0f0d0e' : 'var(--accent-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <IconComponent size={17} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: isActive ? '800' : '600', color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                        {item.label}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={15} style={{ color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)' }} />
                </div>
              );
            })}
          </div>

          {/* Drawer Quick Contact & Socials Footer */}
          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <PhoneCall size={14} style={{ color: 'var(--accent-saffron)' }} />
              <span>Admissions: +91 (0135) 289-VEDA</span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                <Youtube size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                <Instagram size={16} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                <Send size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
