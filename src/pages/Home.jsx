import React, { useState, useEffect } from 'react';
import { Images } from '../assets/images';
import { ArrowRight, Sparkles, BookOpen, Clock, ShieldCheck, Award, Users, Play, HeartHandshake, CheckCircle2, ChevronRight } from 'lucide-react';

const DAILY_SCHEDULE = [
  { time: '05:00 AM - 06:00 AM', title: 'Brahma Muhurta & Meditation', icon: '🌅', desc: 'Pranayama, Silent Chanting, and Sun Salutations at dawn shala.' },
  { time: '06:00 AM - 07:30 AM', title: 'Yajnashala & Yogic Sadhana', icon: '🔥', desc: 'Vedic Mantra chanting and physical wellness sittings.' },
  { time: '07:30 AM - 08:30 AM', title: 'Sattvic Ahara (Breakfast)', icon: '🥗', desc: 'Organic farm-to-table meal at Anna Kshetra.' },
  { time: '08:30 AM - 12:30 PM', title: 'Vedic STEM & Academic Classes', icon: '💻', desc: 'Quantum Math, AI Programming, Physics, and Sanskrit Grammar.' },
  { time: '12:30 PM - 02:00 PM', title: 'Midday Rest & Reflection', icon: '🌿', desc: 'Self-study and eco-gardening at Gaushala.' },
  { time: '02:00 PM - 04:30 PM', title: 'Research & Innovation Labs', icon: '🔬', desc: 'Robotics, Astronomy Yantras, and Herbal Science projects.' },
  { time: '04:30 PM - 06:00 PM', title: 'Kalaripayattu & Sports', icon: '🏹', desc: 'Traditional martial arts, archery, swimming, and athletics.' },
  { time: '06:00 PM - 07:30 PM', title: 'Evening Sandhya & Cultural Arts', icon: '🪔', desc: 'Classical Hindustani music, Veena, and Satsang.' },
  { time: '07:30 PM - 09:00 PM', title: 'Dinner & Guru Samvad (Discourse)', icon: '✨', desc: 'Informal Q&A with Acharyas around evening fire.' }
];

const PILLARS = [
  { title: 'Sanatana Wisdom & Ethics', icon: '🕉️', color: 'var(--accent-saffron)', desc: 'Cultivating unshakeable moral compass, Dharma, character integrity, and environmental reverence.' },
  { title: 'Vedic STEM & Quantum AI', icon: '⚡', color: 'var(--accent-indigo)', desc: 'Applying binary algorithms of Pingala and Vedic math to modern quantum computing and artificial intelligence.' },
  { title: 'Yogic Discipline & Marma', icon: '🧘', color: 'var(--accent-emerald)', desc: 'Mastering mental focus, stress resilience, physical flexibility, and traditional martial arts.' },
  { title: 'Ayurveda & Bio-Sciences', icon: '🌿', color: 'var(--accent-gold)', desc: 'Exploring plant pharmacology, organic farming, gaushala care, and holistic wellness.' }
];

export default function Home({ onNavigate }) {
  const [activeRoutineIndex, setActiveRoutineIndex] = useState(3);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    // Determine current routine based on local time hour
    const h = new Date().getHours();
    setCurrentHour(h);
    if (h >= 5 && h < 6) setActiveRoutineIndex(0);
    else if (h >= 6 && h < 8) setActiveRoutineIndex(1);
    else if (h >= 8 && h < 13) setActiveRoutineIndex(3);
    else if (h >= 13 && h < 14) setActiveRoutineIndex(4);
    else if (h >= 14 && h < 16) setActiveRoutineIndex(5);
    else if (h >= 16 && h < 18) setActiveRoutineIndex(6);
    else if (h >= 18 && h < 20) setActiveRoutineIndex(7);
    else setActiveRoutineIndex(8);
  }, []);

  return (
    <div className="animate-fade-in">
      
      {/* HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          padding: '4rem 0 6rem 0',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} /> REINVENTING ANCIENT GURUKUL FOR 21ST CENTURY
            </div>

            <h1 className="font-serif" style={{ fontSize: ' clamp(2.2rem, 5vw, 3.6rem)', fontWeight: '900', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Where Ancient <span className="gold-gradient-text">Vedic Wisdom</span> Meets <span style={{ color: 'var(--accent-saffron)' }}>Future Vision</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2.25rem', maxWidth: '580px' }}>
              VedaTech Gurukul is a 100% residential knowledge sanctuary empowering young minds through Sanatana ethics, Yogic mastery, advanced STEM labs, AI research, and self-realization.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => onNavigate('admissions')} 
                className="saffron-gradient-btn"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                Apply for Admission 2026 <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onNavigate('campus')} 
                className="gold-outline-btn"
                style={{ fontSize: '1rem', padding: '0.9rem 1.8rem' }}
              >
                <Play size={16} /> Take Virtual Tour
              </button>
            </div>

            {/* Key Stat Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: '800' }}>100%</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>Residential Campus</p>
              </div>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: '800' }}>1 : 8</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>Guru-Shishya Ratio</p>
              </div>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: '800' }}>50+</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>Acres Eco Campus</p>
              </div>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div style={{ position: 'relative' }}>
            <div 
              className="glass-panel pulse-glow"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img 
                src={Images.heroCampus} 
                alt="VedaTech Gurukul Campus"
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  insetInline: 0,
                  padding: '1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  color: '#fff'
                }}
              >
                <div className="badge-gold" style={{ display: 'inline-block', marginBottom: '0.4rem' }}>
                  Rishikesh Foothills Sanctuary
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                  Holistic Architecture & Vedic STEM Labs
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">FOUR PILLARS OF EDUCATION</span>
            <h2 className="section-title font-serif">Nurturing Character, Mind & Soul</h2>
            <p className="section-subtitle">
              Our holistic curriculum ensures students don't just gain degrees, but achieve self-mastery, leadership, and unwavering moral clarity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2rem 1.5rem',
                  transition: 'var(--transition)',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{pillar.icon}</div>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: pillar.color }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIVE DAILY GURUKUL ROUTINE TRACKER */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag"><Clock size={14} /> LIVE GURUKUL DAY TIMELINE</span>
            <h2 className="section-title font-serif">A Day in the Life of a Shishya</h2>
            <p className="section-subtitle">
              Experience the disciplined rhythm from Brahma Muhurta at dawn to evening Satsang. Currently highlighting live activity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            
            {/* Timeline Selection Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {DAILY_SCHEDULE.map((item, index) => {
                const isSelected = activeRoutineIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveRoutineIndex(index)}
                    style={{
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'var(--bg-primary)' : 'transparent',
                      border: isSelected ? '1px solid var(--accent-gold)' : '1px solid transparent',
                      boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: isSelected ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                          {item.time}
                        </span>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: isSelected ? '700' : '600', color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    {isSelected && <ChevronRight size={18} style={{ color: 'var(--accent-gold)' }} />}
                  </div>
                );
              })}
            </div>

            {/* Routine Detail Card */}
            <div 
              className="glass-panel"
              style={{
                padding: '2.5rem',
                border: '1px solid var(--accent-gold)',
                background: 'var(--bg-primary)'
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                {DAILY_SCHEDULE[activeRoutineIndex].icon}
              </div>
              <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                {DAILY_SCHEDULE[activeRoutineIndex].time}
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>
                {DAILY_SCHEDULE[activeRoutineIndex].title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {DAILY_SCHEDULE[activeRoutineIndex].desc}
              </p>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-saffron)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                💡 <strong>Guru Principle:</strong> "Discipline in time brings freedom of mind. The daily rhythm synchronizes the body with nature's circadian energy."
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CAMPUS VISUAL SPOTLIGHT */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">CAMPUS HIGHLIGHTS</span>
            <h2 className="section-title font-serif">State-of-the-Art Eco Campus</h2>
            <p className="section-subtitle">
              Combining tranquil natural beauty with modern innovation centers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-panel" style={{ overflow: 'hidden' }}>
              <img src={Images.guruParampara} alt="Guru Parampara" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Guru Parampara Mentorship
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  1:8 intimate student to acharya guidance under ancient sacred trees and digital labs.
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ overflow: 'hidden' }}>
              <img src={Images.stemVedicLab} alt="Vedic STEM Lab" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Vedic STEM & AI Lab
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Advanced robotics, astronomy yantras, and high-performance computing setups.
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ overflow: 'hidden' }}>
              <img src={Images.yogaMeditation} alt="Yoga Meditation Hall" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Mountain View Yoga Shala
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Open-air dawn meditation hall surrounded by pristine mountain air.
                </p>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => onNavigate('campus')} className="gold-outline-btn">
              Explore All Campus Facilities →
            </button>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #1c1917 0%, #2e261f 100%)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="font-serif gold-gradient-text" style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '1rem' }}>
            Ready to Gift Your Child a Transformative Education?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#d6cfc4', marginBottom: '2rem' }}>
            Admissions for Class VI to XII (Residential Stream) are now open. Experience our campus during an interactive orientation weekend.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('admissions')} className="saffron-gradient-btn" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
              Start Online Application
            </button>
            <button onClick={() => onNavigate('contact')} className="gold-outline-btn" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem', color: '#fff', borderColor: '#fff' }}>
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
