import React, { useState } from 'react';
import { Search, X, BookOpen, Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

const SEARCH_DATABASE = [
  { id: '1', title: 'Vedic STEM & Quantum Computing', type: 'course', category: 'Academics', page: 'academics', desc: 'Blending ancient Indian algorithms with modern quantum mechanics.' },
  { id: '2', title: 'Ayurveda & Bio-Hermeneutics', type: 'course', category: 'Academics', page: 'academics', desc: 'Holistic health, plant science, and natural medicine.' },
  { id: '3', title: 'Kalaripayattu & Martial Arts Guild', type: 'course', category: 'Sports & Discipline', page: 'academics', desc: 'Traditional martial art of body focus and vital points (Marma).' },
  { id: '4', title: 'Vasant Panchami Knowledge Festival', type: 'event', category: 'Events', page: 'events', desc: 'Annual festival celebrating Saraswati, arts, and innovation.' },
  { id: '5', title: 'Acharya Dr. Devavrat Shastri', type: 'guru', category: 'Faculty', page: 'about', desc: 'Head of Vedic Mathematics & Astronomy Department.' },
  { id: '6', title: 'Interactive Fee & Scholarship Calculator', type: 'tool', category: 'Admissions', page: 'admissions', desc: 'Calculate tuition, hostel, and merit scholarship financial aid.' },
  { id: '7', title: '50-Acres Eco Campus Virtual Tour', type: 'facility', category: 'Campus Life', page: 'campus', desc: 'Explore Yajnashala, Gaushala, STEM Lab, and Anna Kshetra.' },
  { id: '8', title: 'Online Admission Application Form', type: 'form', category: 'Admissions', page: 'admissions', desc: 'Apply online for Session 2026-27.' }
];

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredResults = query.trim() === ''
    ? SEARCH_DATABASE
    : SEARCH_DATABASE.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (page) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 1rem 2rem 1rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'var(--bg-primary)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--accent-gold)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <Search size={22} style={{ color: 'var(--accent-gold)' }} />
          <input
            type="text"
            placeholder="Search courses, events, faculty, admissions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          />
          <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
          {filteredResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              No matching results found for "{query}".
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {filteredResults.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.page)}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                  className="search-item-hover"
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span className="badge-gold" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>{item.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--accent-gold)' }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
