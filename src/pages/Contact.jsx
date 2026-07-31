import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, Youtube, Instagram, Facebook, Twitter, Linkedin, Music2 } from 'lucide-react';

const FAQS = [
  {
    q: 'What age/class levels do you accept for residential admissions?',
    a: 'We admit students for Class VI through XII in full residential boarding. Primary grade day-boarding options are available for local Rishikesh region residents.'
  },
  {
    q: 'Is the academic syllabus affiliated with recognized national boards?',
    a: 'Yes! Students complete standard CBSE/ICSE curriculum requirements alongside advanced Vedic Mathematics, Computer Science, and Sanskrit certification.'
  },
  {
    q: 'What is the food & dietary arrangement in the Ashram?',
    a: '100% pure vegetarian Sattvic meals are prepared fresh daily using organic produce from our campus farms and A2 milk from native Gir cows at our Gaushala.'
  },
  {
    q: 'Are parents allowed to visit students during the term?',
    a: 'Yes, parents can visit on designated weekend Samvad days and join morning Yajnashala rituals.'
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sentMessage, setSentMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentMessage(true);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">REACH OUT</span>
          <h1 className="section-title font-serif">Contact Us & Social Media Hub</h1>
          <p className="section-subtitle">
            Connect with our admissions desk, schedule a physical campus tour, or join our broadcast channels.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* CONTACT INFO & MAP PREVIEW */}
          <div>
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>OFFICE & HELPLINE</span>
            <h2 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>
              VedaTech Gurukul Academy
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} style={{ color: 'var(--accent-saffron)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Campus Address:</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    VedaTech Gurukul Sanctuary, Tapovan Foothills, Rishikesh, Uttarakhand - 249192, India
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={22} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Admissions Hotline & WhatsApp:</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    +91 (0135) 289-VEDA (8332) / +91 98765 43210
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={22} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Official Email Desk:</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    admissions@vedatechgurukul.org / info@vedatechgurukul.org
                  </span>
                </div>
              </div>
            </div>

            {/* MAP SIMULATION BOX */}
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <h4 className="font-serif" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                🗺️ How to Reach Campus
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                • <strong>By Air:</strong> Jolly Grant Airport, Dehradun (22 km)<br />
                • <strong>By Train:</strong> Yog Nagari Rishikesh Railway Station (8 km)<br />
                • <strong>By Road:</strong> Direct highway connectivity from New Delhi (235 km)
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                Send Direct Message
              </h3>

              {!sentMessage ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Email or Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Email or phone"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Topic of Inquiry
                    </label>
                    <select
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >
                      <option>Admissions & Fee Calculator</option>
                      <option>Schedule Campus Physical Tour</option>
                      <option>Media & Press Inquiry</option>
                      <option>Guru Samvad / General Query</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Your Message / Question *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Type your message here..."
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="saffron-gradient-btn" style={{ justifyContent: 'center' }}>
                    <Send size={16} /> Send Inquiry
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🙏</div>
                  <h4 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                    Message Received!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Namaste. Our Gurukul admission team will respond to your inquiry within 24 hours.
                  </p>
                  <button onClick={() => setSentMessage(false)} className="gold-outline-btn">
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FAQS SECTION */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div className="section-header">
            <span className="section-tag"><HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title font-serif">Parents & Scholars FAQ</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass-panel"
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                      {faq.q}
                    </h3>
                    {isOpen ? <ChevronUp size={20} style={{ color: 'var(--accent-gold)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                  </div>

                  {isOpen && (
                    <p style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
