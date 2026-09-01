import React from 'react';
import { Images } from '../assets/images';
import { Sparkles, BookOpen, Scroll, Award } from 'lucide-react';

export default function Research({ onNavigate }) {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">भारतीय ज्ञान परंपरा (IKS)</span>
          <h1 className="section-title font-serif">अनुसंधान एवं पाण्डुलिपि अध्ययन</h1>
          <p className="section-subtitle">
            भारतीय ज्ञान परंपरा, वेद-शास्त्रों एवं प्राचीन संस्कृत साहित्य का वैज्ञानिक दृष्टिकोण से शोध।
          </p>
        </div>
      </section>

      {/* Main Research Overview */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">शोध के प्रमुख विषय</span>
            <h2 className="section-title font-serif">पांच मुख्य अनुसंधान श्रेणियां</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            
            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📜</div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-saffron)' }}>
                संस्कृत साहित्य शोध
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                काव्य, नाटक, व्याकरण (अष्टाध्यायी) एवं महाकाव्यों की गूढ़ व्याख्या का संपादन।
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📖</div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                वेद एवं उपनिषद शास्त्र
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                वैदिक ऋचाओं का मन्त्रार्थ, संहिता पाठ एवं वैज्ञानिक संदर्भों का अध्ययन।
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏛️</div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-vermillion)' }}>
                भारतीय दर्शन (Philosophy)
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                न्याय, वैशेषिक, सांख्य, योग, मीमांसा एवं वेदांत षड्दर्शन का गहन अध्ययन।
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', background: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✨</div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--accent-indigo)' }}>
                ज्योतिष गणित एवं खगोल
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                सिद्धान्त ज्योतिष, पञ्चाङ्ग निर्माण एवं प्राचीन भारतीय खगोल विज्ञान शोध।
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
