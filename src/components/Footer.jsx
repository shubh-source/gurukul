import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, Linkedin, Send, Music2, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', handle: '@VedaTechGurukul' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', handle: '@gurukul_official' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', handle: '/VedaTechGurukul' },
    { name: 'X / Twitter', icon: Twitter, url: 'https://x.com', handle: '@GurukulSanctuary' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', handle: 'VedaTech Gurukul Academy' },
    { name: 'Telegram', icon: Send, url: 'https://telegram.org', handle: 't.me/GurukulNews' },
    { name: 'Spotify', icon: Music2, url: 'https://spotify.com', handle: 'Gurukul Vedic Chants & Podcast' }
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        marginTop: '5rem',
        color: 'var(--text-primary)'
      }}
    >
      <div className="container">
        
        {/* Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.6rem' }}>🕉️</span>
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.4rem', fontWeight: '800' }}>
                VEDATECH GURUKUL
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              A sacred sanctuary of learning where ancient Indian Sanatana wisdom, character building, and Yogic discipline converge with futuristic STEM, AI, and global leadership.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '600' }}>
              <span>📍 Rishikesh Ashram Foothills & Digital AI Campus</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><button onClick={() => handlePageChange('home')} style={{ color: 'var(--text-secondary)' }}>Home Overview</button></li>
              <li><button onClick={() => handlePageChange('about')} style={{ color: 'var(--text-secondary)' }}>About Our Heritage & Gurus</button></li>
              <li><button onClick={() => handlePageChange('academics')} style={{ color: 'var(--text-secondary)' }}>Academic Curriculum</button></li>
              <li><button onClick={() => handlePageChange('admissions')} style={{ color: 'var(--text-secondary)' }}>Admissions & Fee Calculator</button></li>
              <li><button onClick={() => handlePageChange('campus')} style={{ color: 'var(--text-secondary)' }}>360° Campus Virtual Tour</button></li>
              <li><button onClick={() => handlePageChange('events')} style={{ color: 'var(--text-secondary)' }}>Gurukul Events & Conclaves</button></li>
              <li><button onClick={() => handlePageChange('news')} style={{ color: 'var(--text-secondary)' }}>Live News & Press Releases</button></li>
            </ul>
          </div>

          {/* Col 3: Key Streams */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
              Educational Streams
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Vedic STEM & Quantum Physics</li>
              <li>• Ayurveda & Bio-Hermeneutics</li>
              <li>• Kalaripayattu & Martial Arts</li>
              <li>• Yogic Science & Meditation</li>
              <li>• Sanskrit, Computational Linguistics</li>
              <li>• Astronomy & Ancient Yantras</li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
              Gurukul Newsletter
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
              Subscribe to monthly discourses, research papers, and event updates.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="email"
                placeholder="Enter email address"
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  flex: 1
                }}
              />
              <button className="saffron-gradient-btn" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}>
                Join
              </button>
            </div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              📞 Admissions Hotline: +91 (0135) 289-VEDA
            </div>
          </div>

        </div>

        {/* Social Media Ecosystem Bar */}
        <div 
          style={{
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-color)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span className="section-tag" style={{ fontSize: '0.75rem' }}>CONNECT ACROSS CHANNELS</span>
            <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: '700' }}>
              Our Social Media & Community Ecosystem
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            {socialLinks.map((item, i) => {
              const IconComp = item.icon;
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    transition: 'var(--transition)'
                  }}
                  className="social-footer-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconComp size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{item.name}</span>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 VedaTech Gurukul Educational Trust. All rights reserved. Dharma & Science in Harmony.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Gurukul Code of Conduct</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
