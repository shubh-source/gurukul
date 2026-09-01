import React, { useState } from 'react';
import { Images } from '../assets/images';
import { ArrowRight, Sparkles, BookOpen, Clock, ShieldCheck, Award, Heart, Flame, Compass as JyotishIcon, CheckCircle2, ChevronRight, Bell, FileText } from 'lucide-react';

const OBJECTIVES = [
  { title: 'संस्कृत शिक्षा एवं वेद-शास्त्र', icon: '📖', color: 'var(--accent-saffron)', desc: 'वेद, वेदांग, संस्कृत साहित्य एवं व्याकरण का गहन अध्ययन तथा आधुनिक विषयों का समन्वय।' },
  { title: 'गुरुकुल परंपरा एवं अनुशासन', icon: '🏛️', color: 'var(--accent-gold)', desc: 'आवासीय वातावरण में विद्यार्थियों का सर्वांगीण विकास, सदाचार, योग एवं चरित्र निर्माण।' },
  { title: 'भारतीय संस्कार एवं धर्म निष्ठा', icon: '🪔', color: 'var(--accent-vermillion)', desc: 'वैदिक रीति-रिवाजों, अनुष्ठान, संध्या-वंदन एवं सांस्कृतिक मूल्यों का संरक्षण।' },
  { title: 'गौसेवा एवं गौवंश संवर्धन', icon: '🐄', color: 'var(--accent-emerald)', desc: 'देशी गिर एवं कपिला गौवंश का संरक्षण, नित्य गौसेवा तथा जैविक कृषि संवर्धन।' },
  { title: 'अनुसंधान एवं पाण्डुलिपि कार्य', icon: '📜', color: 'var(--accent-indigo)', desc: 'भारतीय ज्ञान परंपरा एवं प्राचीन संस्कृत ग्रंथों का आधुनिक दृष्टिकोण से अध्ययन।' }
];

export default function Home({ onNavigate }) {
  return (
    <div className="animate-fade-in">
      
      {/* HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          padding: '4rem 0 5.5rem 0',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Text in Hindi */}
          <div>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              🚩 पावन तीर्थ क्षेत्र — नैमिषारण्य, सीतापुर (उत्तर प्रदेश)
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.4rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              श्री आत्मानन्द संस्कृत शिक्षण संस्थान
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="badge-gold">संस्कृत शिक्षा</span>
              <span className="badge-gold">संस्कार</span>
              <span className="badge-gold">संस्कृति</span>
              <span className="badge-gold">गौसेवा</span>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.25rem', maxWidth: '580px' }}>
              भारतीय ज्ञान परंपरा, वेद-वेदांग, गुरुकुल संस्कृति एवं गौसेवा को समर्पित नैमिषारण्य की पावन भूमि पर स्थित एक प्रमुख सनातन शिक्षण संस्थान।
            </p>

            {/* Hero CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => onNavigate('admission')} 
                className="saffron-gradient-btn"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                [ प्रवेश हेतु आवेदन करें ] <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onNavigate('donate')} 
                className="gold-outline-btn"
                style={{ fontSize: '1rem', padding: '0.9rem 1.8rem' }}
              >
                [ सहयोग / दान करें ]
              </button>
            </div>

            {/* Key Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '800' }}>100%</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>आवासीय गुरुकुल</p>
              </div>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '800' }}>कक्षा 6–12</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>संस्कृत एवं वेद शिक्षा</p>
              </div>
              <div>
                <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: '800' }}>नित्य</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>गौसेवा एवं यज्ञ</p>
              </div>
            </div>

          </div>

          {/* Right Cultural Image Showcase */}
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
                src={Images.atmanandHero} 
                alt="श्री आत्मानन्द संस्कृत शिक्षण संस्थान परिसर"
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
                  नैमिषारण्य तीर्थ क्षेत्र, सीतापुर
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                  पावन गुरुकुल वातावरण एवं वेद अध्ययन
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT INSTITUTE SECTION */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">संस्थान परिचय</span>
            <h2 className="section-title font-serif">श्री आत्मानन्द संस्कृत शिक्षण संस्थान</h2>
            <p className="section-subtitle">
              नैमिषारण्य की तपोभूमि पर स्थित यह संस्थान प्राचीन वैदिक मूल्यों, चरित्र निर्माण और गौसंरक्षण का अनुपम केंद्र है।
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                संस्थान का मुख्य उद्देश्य भारतीय ज्ञान परंपरा, संस्कृत भाषा, वेद-वेदांग, संस्कार एवं भारतीय संस्कृति को विद्यार्थियों तक पहुँचाना तथा समाज में वैदिक चेतना का प्रसार करना है।
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                गुरुकुल में 10 से 20 वर्ष के विद्यार्थियों को कक्षा 6 से 12 तक निःशुल्क आवास, सात्त्विक भोजन तथा उत्तम शिक्षा प्रदान की जाती है।
              </p>

              <button onClick={() => onNavigate('about')} className="saffron-gradient-btn">
                संस्थान का विस्तृत परिचय पढ़ें →
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <img src={Images.guruParampara} alt="गुरु शिष्य परंपरा" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>

        </div>
      </section>

      {/* CORE OBJECTIVES SECTION */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">संस्थान के प्रमुख उद्देश्य</span>
            <h2 className="section-title font-serif">पाँच मुख्य आधार स्तंभ</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {OBJECTIVES.map((obj, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1.75rem 1.5rem', background: 'var(--bg-primary)' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>{obj.icon}</div>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem', color: obj.color }}>
                  {obj.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GURUKUL & GAUSHALA SPOTLIGHTS */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {/* Gurukul Card */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>गुरुकुल परंपरा</span>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                  आवासीय गुरुकुल एवं छात्र जीवन
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  विद्यार्थियों के लिए अनुशासित जीवनशैली, प्रातः ब्रह्म मुहूर्त जागरण, संध्या-वंदन, वेद पाठ, सात्त्विक भोजन तथा उत्तम छात्रावास व्यवस्था।
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-saffron)', fontWeight: '700', marginBottom: '1.5rem' }}>
                  <span>👦 आयु: 10 – 20 वर्ष</span>
                  <span>📚 कक्षा: 6 – 12</span>
                </div>
              </div>
              <button onClick={() => onNavigate('gurukul')} className="gold-outline-btn" style={{ width: '100%', justifyContent: 'center' }}>
                गुरुकुल की पूरी जानकारी →
              </button>
            </div>

            {/* Gaushala Card */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>गौसेवा प्रकल्प</span>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                  गौशाला, गौसेवा एवं संरक्षण
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  भारतीय संस्कृति में गाय को पूजनीय माना गया है। हमारी गौशाला में देशी गायों का संवर्धन, नित्य भोजन-चारा एवं प्राथमिक चिकित्सा सेवा दी जाती है।
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: '700', marginBottom: '1.5rem' }}>
                  <span>🐄 देशी गिर व कपिला गौवंश</span>
                  <span>🌾 हरा चारा व जैविक सेवा</span>
                </div>
              </div>
              <button onClick={() => onNavigate('gaushala')} className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center' }}>
                गौशाला एवं गौ दान प्रकल्प →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SANSKAR & ANUSHTHAN SHOWCASE */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">धार्मिक अनुष्ठान</span>
            <h2 className="section-title font-serif">वैदिक संस्कार एवं पूजन सेवाएं</h2>
            <p className="section-subtitle">
              संस्थान द्वारा शास्त्रीय पद्धति से रुद्राभिषेक, महामृत्युंजय जाप, हवन-यज्ञ एवं विवाह संस्कार संपन्न कराए जाते हैं।
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', textAlignment: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🔱</div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>रुद्राभिषेक</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>शिव पूजन एवं द्रव्य अभिषेक</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', textAlignment: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🔥</div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>हवन / यज्ञ</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ग्रह शांति एवं विश्व कल्याण यज्ञ</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', textAlignment: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🪔</div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>विवाह संस्कार</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>सप्तपदी एवं पाणिग्रहण संस्कार</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', textAlignment: 'center', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>✨</div>
              <h4 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>विशेष पूजन</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>सत्यनारायण कथा एवं अनुष्ठान</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => onNavigate('sanskar')} className="gold-outline-btn">
              सभी अनुष्ठान एवं बुकिंग देखें →
            </button>
          </div>
        </div>
      </section>

      {/* DONATION & ADMISSION CTA SECTION */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1c1917 0%, #2b1d16 100%)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>पुण्य कार्य में भागीदार बनें</span>
          <h2 className="font-serif gold-gradient-text" style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '1rem' }}>
            गुरुकुल शिक्षा एवं गौसेवा हेतु अपना योगदान दें
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#d6cfc4', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            आपका लघु योगदान भी विद्यार्थियों के निःशुल्क भोजन, वस्त्र, वेद-पुस्तकों एवं गौशाला के चारे-स्वास्थ्य सेवा में अत्यंत उपयोगी सिद्ध होता है।
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('donate')} className="saffron-gradient-btn" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
              🙏 ऑनलाइन सहयोग / दान करें
            </button>
            <button onClick={() => onNavigate('admission')} className="gold-outline-btn" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem', color: '#fff', borderColor: '#fff' }}>
              📚 प्रवेश फॉर्म भरें
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
