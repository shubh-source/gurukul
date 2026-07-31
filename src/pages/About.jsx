import React from 'react';
import { Images } from '../assets/images';
import { Shield, BookOpen, Award, Heart, Compass, CheckCircle2 } from 'lucide-react';

const GURU_TEAM = [
  { name: 'Acharya Dr. Devavrat Shastri', role: 'Head of Vedic Math & Astronomy', degree: 'Ph.D. Sanskrit & Physics (BHU)', img: Images.guruParampara, bio: '30+ years researching Pingala binary structures, Vedic geometry, and astronomical calculation models.' },
  { name: 'Dr. Ananya Vedant', role: 'Dean of STEM & Artificial Intelligence', degree: 'Ph.D. Robotics (IIT Bombay)', img: Images.stemVedicLab, bio: 'Pioneering ethical AI applications guided by Upaniṣadic principles of consciousness.' },
  { name: 'Yogacharya Swami Prakashananda', role: 'Master of Yogic Sciences & Marma', degree: 'M.Sc. Yoga Therapy (SVYASA)', img: Images.yogaMeditation, bio: 'Guiding shishyas in breath mastery, mental endurance, and classical Kalaripayattu marma points.' },
  { name: 'Dr. Rajeshwari Sharma', role: 'Head of Ayurveda & Bio-Sciences', degree: 'BAMS, MD (Ayurveda)', img: Images.library, bio: 'Expert in medicinal plant taxonomy, organic farming, and holistic nutritional science.' }
];

export default function About({ onNavigate }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Page Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">HERITAGE & VISION</span>
          <h1 className="section-title font-serif">The VedaTech Gurukul Philosophy</h1>
          <p className="section-subtitle">
            Founded on the eternal principles of Sanatana Dharma and modern scientific inquiry, we bridge ancient ashram traditions with modern world leadership.
          </p>
        </div>
      </section>

      {/* Heritage Story */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div>
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>OUR MISSION</span>
            <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.25rem' }}>
              Restoring the Sacred Bond of Guru & Shishya
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              In ancient India, the Gurukul was not merely a school—it was a living ecosystem where students lived alongside enlightened masters, learning discipline, self-reliance, martial arts, astronomy, and profound spiritual wisdom.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              At VedaTech Gurukul, we preserve this authentic residential atmosphere while equipping every student with high-end STEM laboratories, coding, robotics, and global competitive competencies.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> 100% Organic Sattvic Dining & Gaushala
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> Daily Yajnashala Chanting & Mental Clarity
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-saffron)' }} /> AI, Quantum Computing & STEM Innovation
              </div>
            </div>
          </div>

          <div>
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <img src={Images.guruParampara} alt="Guru Parampara" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>

        </div>
      </section>

      {/* GURU PARAMPARA (FACULTY GRID) */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">DISTINGUISHED MENTORS</span>
            <h2 className="section-title font-serif">The Guru Parampara</h2>
            <p className="section-subtitle">
              Our faculty comprises revered Vedic scholars, IIT/BHU scientists, and Yogacharyas dedicated to individual student growth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {GURU_TEAM.map((guru, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  background: 'var(--bg-primary)',
                  overflow: 'hidden',
                  transition: 'var(--transition)'
                }}
              >
                <img src={guru.img} alt={guru.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <span className="badge-gold" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', display: 'inline-block' }}>{guru.degree}</span>
                  <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.25rem' }}>{guru.name}</h3>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-saffron)', fontWeight: '700', marginBottom: '0.85rem' }}>{guru.role}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {guru.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
