import React from 'react';
import { Images } from '../assets/images';
import { Sparkles, Compass, Users, Heart, Shield, Award, Eye, Play } from 'lucide-react';

const FACILITIES = [
  { title: 'Residential Ashram Hostels', icon: '🛖', image: Images.heroCampus, desc: 'Clean, serene rooms designed with traditional Indian clay-brick aesthetics and natural ventilation.' },
  { title: 'Vedic Yajnashala & Temple', icon: '🔥', image: Images.guruParampara, desc: 'Sacred open-air pavilion for daily morning HAVAN, Vedic mantra chanting, and spiritual discourses.' },
  { title: 'Vedic STEM & AI Lab', icon: '🔬', image: Images.stemVedicLab, desc: 'Equipped with robotics, telescopes, 3D printers, and quantum computing workstations.' },
  { title: 'Mountain Dawn Yoga Shala', icon: '🧘', image: Images.yogaMeditation, desc: 'Wooden platform shala overlooking serene misty valleys for yoga, pranayama, and meditation.' },
  { title: 'Anna Kshetra (Dining Hall)', icon: '🥗', image: Images.dining, desc: 'Serving 100% organic, sattvic meals prepared fresh daily from campus farms and Gaushala milk.' },
  { title: 'Sports & Kalaripayattu Arena', icon: '🏹', image: Images.sports, desc: 'Archery range, swimming pool, traditional Akhada, and modern athletic fields.' }
];

const CLUBS = [
  { name: 'Vedic Astronomy Guild (Jyotisha)', count: '45 Members', desc: 'Stargazing with telescopes, tracking planetary motion, and ancient calendar calculations.' },
  { name: 'Sanskrit Debating Society', count: '60 Members', desc: 'Mastering classical logic (Nyaya Shastra) and fluent conversational Sanskrit.' },
  { name: 'Robotics & AI Guild', count: '50 Members', desc: 'Building autonomous drones, eco-sensors for the Gaushala, and computer vision projects.' },
  { name: 'Eco Warriors & Gaushala Care', count: '80 Members', desc: 'Organic composting, tree planting, and caring for native Indian Gir cows.' }
];

export default function CampusLife({ onNavigate }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">360° VIRTUAL EXPERIENCE</span>
          <h1 className="section-title font-serif">Campus Life & Facilities</h1>
          <p className="section-subtitle">
            Explore our 50-acre eco-friendly sanctuary situated in the pristine foothills of Rishikesh.
          </p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">FACILITIES & INFRASTRUCTURE</span>
            <h2 className="section-title font-serif">Living in Harmony with Nature & Tech</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {FACILITIES.map((fac, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  overflow: 'hidden',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={fac.image} alt={fac.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Eye size={12} /> 360° Preview
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{fac.icon}</div>
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {fac.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLUBS & EXTRA CURRICULAR */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">STUDENT CLUBS</span>
            <h2 className="section-title font-serif">Societies & Beyond Academics</h2>
            <p className="section-subtitle">
              Encouraging students to explore passion projects, leadership, and community service.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {CLUBS.map((club, index) => (
              <div key={index} className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-primary)' }}>
                <span className="badge-gold" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{club.count}</span>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{club.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{club.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
