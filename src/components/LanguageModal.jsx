import React, { useState, useEffect } from 'react';
import { Languages, Globe, Check } from 'lucide-react';

export default function LanguageModal({ currentLang, onSelectLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open language selector if language hasn't been chosen yet
    const savedLang = localStorage.getItem('gurukul_lang');
    if (!savedLang) {
      setIsOpen(true);
    }
  }, []);

  const handleSelect = (lang) => {
    localStorage.setItem('gurukul_lang', lang);
    onSelectLanguage(lang);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
    >
      <div 
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.25rem 2rem',
          textAlign: 'center',
          border: '2px solid var(--accent-gold)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
        }}
      >
        <div 
          style={{
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-vermillion) 0%, var(--accent-gold) 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
            boxShadow: '0 0 25px rgba(212,175,55,0.5)'
          }}
        >
          <Globe size={28} />
        </div>

        <h2 className="font-serif gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          भाषा का चयन करें / Select Language
        </h2>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          श्री आत्मानन्द संस्कृत शिक्षण संस्थान की आधिकारिक वेबसाइट में आपका स्वागत है। कृपया अपनी पसंदीदा भाषा चुनें:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          
          {/* Hindi Choice */}
          <button
            onClick={() => handleSelect('hi')}
            style={{
              padding: '1.25rem 1rem',
              borderRadius: 'var(--radius-md)',
              background: currentLang === 'hi' ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
              border: '2px solid var(--accent-gold)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition)'
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>🇮🇳</span>
            <strong className="font-serif" style={{ fontSize: '1.15rem', color: 'var(--accent-gold)' }}>हिंदी (Hindi)</strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>संस्कृत शिक्षा व मूल विवरण</span>
          </button>

          {/* English Choice */}
          <button
            onClick={() => handleSelect('en')}
            style={{
              padding: '1.25rem 1rem',
              borderRadius: 'var(--radius-md)',
              background: currentLang === 'en' ? 'rgba(212, 175, 55, 0.15)' : 'var(--bg-secondary)',
              border: '2px solid var(--accent-gold)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition)'
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>🇬🇧</span>
            <strong style={{ fontSize: '1.15rem', color: 'var(--accent-gold)' }}>English</strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Global Portal View</span>
          </button>

        </div>
      </div>
    </div>
  );
}
