import React, { useState } from 'react';
import { Images } from '../assets/images';
import { Newspaper, Bell, Sparkles, Calendar, User, ArrowRight, Share2, Search, Tag, X, CheckCircle2 } from 'lucide-react';

const NEWS_ARTICLES = [
  {
    id: 'n1',
    title: 'VedaTech Gurukul Inks Landmark MoU with National Vedic Science & AI Research Council',
    category: 'Institutional News',
    date: 'JULY 28, 2026',
    author: 'Editorial Board',
    image: Images.stemVedicLab,
    summary: 'A historic partnership establishing a joint Quantum-Vedic research laboratory on campus to study natural language algorithms in Paninian Sanskrit.',
    fullText: 'Rishikesh — VedaTech Gurukul Academy has officially signed a Memorandum of Understanding with the National Research Council. Under this partnership, a state-of-the-art computational linguistics facility will be launched on the 50-acre eco-campus. Shishyas from Class IX onward will participate in supervised research projects applying ancient binary algorithms to high-performance computing.'
  },
  {
    id: 'n2',
    title: 'Shishyas Achieve 100% Distinction in National Vedic STEM Olympiad 2026',
    category: 'Student Achievements',
    date: 'JULY 15, 2026',
    author: 'Academic Desk',
    image: Images.heroCampus,
    summary: 'Gurukul scholars secure top national ranks in mental mathematics, astrophysics calculations, and robotics programming.',
    fullText: 'New Delhi — Students of VedaTech Gurukul demonstrated extraordinary brilliance at the 2026 National Olympiad. Master Aarav Sharma of Class X secured 1st place in Vedic Mathematics by solving matrix equations in under 45 seconds using Ekadhikena Purvena algorithms.'
  },
  {
    id: 'n3',
    title: 'Annual Vasant Panchami International Conclave Announced for February 2027',
    category: 'Announcements',
    date: 'JULY 02, 2026',
    author: 'Events Committee',
    image: Images.guruParampara,
    summary: 'Global scholars from 15 countries will convene at Rishikesh for three days of Vedic music, astronomy workshops, and spiritual discourses.',
    fullText: 'Rishikesh — Registrations have officially opened for the Vasant Panchami Saraswati Mahotsav 2027. The 3-day global summit will feature Hindustani classical renditions, Yajnashala chanting, and interactive STEM exhibitions built by Gurukul shishyas.'
  },
  {
    id: 'n4',
    title: 'Campus Solar Energy Expansion: VedaTech Gurukul Achieves 100% Green Energy Status',
    category: 'Sustainability',
    date: 'JUNE 20, 2026',
    author: 'Eco-Warriors Club',
    image: Images.yogaMeditation,
    summary: 'Installation of 250kW solar roof panels and organic bio-gas digestion makes the Rishikesh ashram completely self-sustaining.',
    fullText: 'Rishikesh — In line with the Sanatana principle of environmental reverence (Bhoomi Suktam), VedaTech Gurukul has transitioned to 100% renewable solar and biogas energy, cutting carbon emissions to net zero.'
  }
];

export default function News({ onNavigate }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Institutional News', 'Student Achievements', 'Announcements', 'Sustainability'];

  const filteredNews = selectedCat === 'All' 
    ? NEWS_ARTICLES 
    : NEWS_ARTICLES.filter(item => item.category === selectedCat);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag"><Newspaper size={14} /> LIVE BULLETIN & PRESS</span>
          <h1 className="section-title font-serif">Gurukul News & Updates</h1>
          <p className="section-subtitle">
            Stay updated with official announcements, research breakthroughs, student achievements, and campus press releases.
          </p>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <div 
        style={{
          background: 'rgba(212, 175, 55, 0.12)',
          borderBottom: '1px solid var(--border-color)',
          padding: '0.6rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
          <span className="badge-gold" style={{ background: 'var(--accent-saffron)', color: '#fff', fontSize: '0.75rem', shrink: 0 }}>
            <Bell size={12} /> BREAKING
          </span>
          <marquee style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: '600' }}>
            🔔 Admissions Open for Session 2026-27 | 🏆 Gurukul Students Win National Vedic STEM Olympiad 1st Rank | 📜 VedaTech Partners with National Research Council
          </marquee>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <section style={{ padding: '3rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: selectedCat === cat ? '700' : '500',
                  background: selectedCat === cat ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: selectedCat === cat ? '#0f0d0e' : 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredNews.map(item => (
              <div 
                key={item.id}
                className="glass-panel"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition)'
                }}
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '210px', objectFit: 'cover' }} />

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="badge-gold" style={{ fontSize: '0.75rem' }}>{item.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-saffron)', fontWeight: '700' }}>{item.date}</span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {item.summary}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>By {item.author}</span>
                    <button
                      onClick={() => setSelectedArticle(item)}
                      className="gold-outline-btn"
                      style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                    >
                      Read Story <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FULL ARTICLE READING MODAL */}
      {selectedArticle && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--bg-primary)',
              padding: '2.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--accent-gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{selectedArticle.category}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-saffron)', fontWeight: '700', marginLeft: '0.75rem' }}>{selectedArticle.date}</span>
              </div>
              <button onClick={() => setSelectedArticle(null)} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <h2 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem', lineHeight: 1.3 }}>
              {selectedArticle.title}
            </h2>

            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title} 
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }} 
            />

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
              {selectedArticle.fullText}
            </p>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={handleShare} className="gold-outline-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <Share2 size={16} /> {copiedLink ? "Link Copied!" : "Share Article"}
              </button>
              <button onClick={() => setSelectedArticle(null)} className="saffron-gradient-btn" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
