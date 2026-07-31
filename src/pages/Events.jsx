import React, { useState } from 'react';
import { Images } from '../assets/images';
import { Calendar, Ticket, CheckCircle2, X, ArrowRight, UserCheck } from 'lucide-react';

const EVENTS = [
  {
    id: 'e1',
    title: 'International Science & Veda Conclave 2026',
    date: 'OCTOBER 15-17, 2026',
    category: 'Academic Symposium',
    image: Images.stemVedicLab,
    location: 'Maharishi Kanad Auditorium, VedaTech Gurukul',
    desc: 'Bringing together global quantum physicists, AI ethicists, and Vedic scholars to discuss consciousness and computation.',
    speakers: 'Dr. Ananya Vedant, Acharya Shastri, Global Delegates'
  },
  {
    id: 'e2',
    title: 'Vasant Panchami Saraswati Mahotsav',
    date: 'FEBRUARY 02, 2027',
    category: 'Cultural & Spiritual',
    image: Images.guruParampara,
    location: 'Sacred Yajnashala Grounds',
    desc: 'Grand celebration of learning, music performances, book launches, and sacred initiation of new shishyas.',
    speakers: 'Acharya Board & Visiting Music Maestros'
  },
  {
    id: 'e3',
    title: 'National Kalaripayattu & Archery Championship',
    date: 'DECEMBER 10-12, 2026',
    category: 'Sports & Martial Arts',
    image: Images.yogaMeditation,
    location: 'Gurukul Sports Complex & Akhada',
    desc: 'Demonstration of traditional physical mastery, flexibility, balance, and precision archery.',
    speakers: 'Kalaripayattu Gurukkals from Kerala & Rishikesh'
  }
];

const ARTICLES = [
  {
    title: 'Why Pingalas Chhandas is the Foundation of Modern Binary Systems',
    author: 'Acharya Dr. Devavrat Shastri',
    readTime: '5 min read',
    snippet: 'Exploring how 3rd-century BCE Indian scholar Pingala mapped binary combinations (Laghu & Guru) 2,000 years before Leibniz.'
  },
  {
    title: 'The Neuroscience of Morning Chanting & Pranayama',
    author: 'Dr. Ananya Vedant',
    readTime: '7 min read',
    snippet: 'EEG analysis shows 432Hz Sanskrit chanting reduces cortisol and enhances prefrontal cortex neuroplasticity.'
  }
];

export default function Events() {
  const [activeRsvpEvent, setActiveRsvpEvent] = useState(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpSuccess(true);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">CALENDAR & PRESS</span>
          <h1 className="section-title font-serif">Events, Festivals & Gurukul Journal</h1>
          <p className="section-subtitle">
            Join our annual conclaves, cultural celebrations, and read insightful papers published by our faculty.
          </p>
        </div>
      </section>

      {/* EVENTS CALENDAR */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag"><Calendar size={14} /> UPCOMING CONCLAVES</span>
            <h2 className="section-title font-serif">Flagship Campus Events</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {EVENTS.map(ev => (
              <div key={ev.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={ev.image} alt={ev.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge-gold">{ev.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-saffron)', fontWeight: '700' }}>{ev.date}</span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {ev.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                    {ev.desc}
                  </p>

                  <button
                    onClick={() => {
                      setActiveRsvpEvent(ev);
                      setRsvpSuccess(false);
                    }}
                    className="saffron-gradient-btn"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
                  >
                    <Ticket size={16} /> Reserve Guest Pass / RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GURUKUL JOURNAL & ARTICLES */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">RESEARCH & DISCOURSES</span>
            <h2 className="section-title font-serif">The Gurukul Journal</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {ARTICLES.map((art, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>
                  {art.readTime} • By {art.author}
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  {art.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {art.snippet}
                </p>
                <a href="#article" style={{ color: 'var(--accent-saffron)', fontWeight: '700', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Full Paper →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RSVP MODAL */}
      {activeRsvpEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveRsvpEvent(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '500px',
              width: '100%',
              background: 'var(--bg-primary)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--accent-gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800' }}>
                RSVP for Event
              </h3>
              <button onClick={() => setActiveRsvpEvent(null)} style={{ color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            {!rsvpSuccess ? (
              <form onSubmit={handleRsvpSubmit}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Event: <strong>{activeRsvpEvent.title}</strong> ({activeRsvpEvent.date})
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                    Number of Attendees
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    defaultValue="1"
                    style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <button type="submit" className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Confirm Event Pass
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <UserCheck size={48} style={{ color: 'var(--accent-emerald)', marginBottom: '1rem' }} />
                <h4 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  RSVP Confirmed!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{attendeeName}</strong>. Your entry pass for <strong>{activeRsvpEvent.title}</strong> has been generated and logged.
                </p>
                <button onClick={() => setActiveRsvpEvent(null)} className="gold-outline-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
