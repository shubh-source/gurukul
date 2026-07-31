import React, { useState } from 'react';
import { GraduationCap, Calculator, FileText, CheckCircle2, Award, Printer, ArrowRight, User, Mail, Phone, MapPin } from 'lucide-react';

export default function Admissions() {
  // Fee Calculator State
  const [grade, setGrade] = useState('VI');
  const [hostelType, setHostelType] = useState('full-residential');
  const [scholarship, setScholarship] = useState('merit-25');

  // Online Application Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    gradeApplying: 'Class VI',
    stream: 'Vedic STEM & Science',
    city: '',
    message: ''
  });

  const [submittedReceipt, setSubmittedReceipt] = useState(null);

  // Fee calculation logic
  const baseTuition = grade === 'VI' || grade === 'VII' || grade === 'VIII' ? 60000 : 80000;
  const hostelFee = hostelType === 'full-residential' ? 70000 : 35000;
  const foodUniformFee = 30000;

  const grossTotal = baseTuition + hostelFee + foodUniformFee;
  let scholarshipDiscount = 0;
  if (scholarship === 'merit-50') scholarshipDiscount = grossTotal * 0.5;
  else if (scholarship === 'merit-25') scholarshipDiscount = grossTotal * 0.25;
  else if (scholarship === 'veda-scholar') scholarshipDiscount = grossTotal * 0.4;

  const netAnnualFee = Math.round(grossTotal - scholarshipDiscount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parentName || !formData.phone) {
      alert("Please fill in Student Name, Parent Name, and Contact Phone Number.");
      return;
    }

    const applicationNo = 'VG-2026-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedReceipt({
      ...formData,
      applicationNo,
      date: new Date().toLocaleDateString(),
      estimatedFee: netAnnualFee
    });
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-tag">SESSION 2026-27</span>
          <h1 className="section-title font-serif">Admissions & Interactive Fee Calculator</h1>
          <p className="section-subtitle">
            Transparent admissions process. Calculate annual tuition, hostel fees, and merit scholarship aid in real time.
          </p>
        </div>
      </section>

      {/* ADMISSION STEPS ROADMAP */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">4-STEP JOURNEY</span>
            <h2 className="section-title font-serif">How to Join VedaTech Gurukul</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            
            <div className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-saffron)', fontWeight: '800', marginBottom: '0.5rem' }}>01</div>
              <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>Online Registration</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Fill out the application form below to register for the entrance samvad.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-gold)', fontWeight: '800', marginBottom: '0.5rem' }}>02</div>
              <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>Gurukul Samvad</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>An informal interactive conversation with student & parents by Acharyas.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-emerald)', fontWeight: '800', marginBottom: '0.5rem' }}>03</div>
              <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>2-Day Immersion Camp</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Student experiences 48 hours of campus life, meditation, and STEM labs.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-indigo)', fontWeight: '800', marginBottom: '0.5rem' }}>04</div>
              <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>Final Enrolment</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Document verification, hostel room allocation, and orientation.</p>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE FEE CALCULATOR & APPLICATION FORM GRID */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          
          {/* FEE CALCULATOR CARD */}
          <div>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <Calculator size={24} style={{ color: 'var(--accent-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800' }}>
                  Interactive Fee Calculator
                </h3>
              </div>

              {/* Grade Selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Select Grade / Class Level:
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontWeight: '600' }}
                >
                  <option value="VI">Class VI (Junior Shishya)</option>
                  <option value="VII">Class VII (Junior Shishya)</option>
                  <option value="VIII">Class VIII (Middle Shishya)</option>
                  <option value="IX">Class IX (Senior Acharya Prep)</option>
                  <option value="X">Class X (Senior Acharya Prep)</option>
                  <option value="XI">Class XI (Vedic STEM & Research)</option>
                  <option value="XII">Class XII (Vedic STEM & Research)</option>
                </select>
              </div>

              {/* Residency Option */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Hostel / Residence Option:
                </label>
                <select
                  value={hostelType}
                  onChange={(e) => setHostelType(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontWeight: '600' }}
                >
                  <option value="full-residential">100% Full Boarding Residential Ashram</option>
                  <option value="day-boarding">Day Boarding (7 AM - 6 PM with Meals)</option>
                </select>
              </div>

              {/* Scholarship Tier */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Merit / Need Scholarship Tier:
                </label>
                <select
                  value={scholarship}
                  onChange={(e) => setScholarship(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontWeight: '600' }}
                >
                  <option value="none">Standard Fee Structure (0% Discount)</option>
                  <option value="merit-25">25% Merit Scholarship (Academic Excellence)</option>
                  <option value="merit-50">50% Super Merit Scholarship (Top 5% Entrance)</option>
                  <option value="veda-scholar">40% Veda Scholar Aid (Traditional Sanskrit background)</option>
                </select>
              </div>

              {/* Breakdown Display */}
              <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <span>Tuition & Lab Fee:</span>
                  <strong>₹{baseTuition.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <span>Hostel & Ashram Lodging:</span>
                  <strong>₹{hostelFee.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <span>Organic Food & Robes/Uniform:</span>
                  <strong>₹{foodUniformFee.toLocaleString()}</strong>
                </div>
                {scholarshipDiscount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <span>Scholarship Discount:</span>
                    <span>- ₹{scholarshipDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem', marginTop: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem', fontWeight: '800' }}>Est. Annual Total:</span>
                  <span className="font-serif gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: '900' }}>
                    ₹{netAnnualFee.toLocaleString()} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ yr</span>
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                *Includes 4 organic meals daily, textbooks, STEM kits, sports gear, medical care, and laundry. Installment options available.
              </p>
            </div>
          </div>

          {/* ONLINE APPLICATION FORM */}
          <div>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <FileText size={24} style={{ color: 'var(--accent-saffron)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '800' }}>
                  Online Admission Application
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Applying For Class
                    </label>
                    <select
                      value={formData.gradeApplying}
                      onChange={(e) => setFormData({...formData, gradeApplying: e.target.value})}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class XI">Class XI</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      Preferred Stream
                    </label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({...formData, stream: e.target.value})}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    >
                      <option value="Vedic STEM & Science">Vedic STEM & Science</option>
                      <option value="AI & Bio-Technology">AI & Bio-Technology</option>
                      <option value="Humanities & Sanskrit">Humanities & Sanskrit</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    City & State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New Delhi, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <button type="submit" className="saffron-gradient-btn" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '0.85rem' }}>
                  Submit Admission Application
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* PRINTABLE RECEIPT MODAL */}
      {submittedReceipt && (
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
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '600px',
              width: '100%',
              background: '#fff',
              color: '#1c1917',
              padding: '2.5rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', borderBottom: '2px solid #d4af37', paddingBottom: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>🕉️</div>
              <h2 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '800', color: '#c59b27' }}>
                VEDATECH GURUKUL ACADEMY
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#57534e' }}>Official Admission Registration Receipt</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <div><strong>Application No:</strong> {submittedReceipt.applicationNo}</div>
              <div><strong>Date:</strong> {submittedReceipt.date}</div>
              <div><strong>Student Name:</strong> {submittedReceipt.studentName}</div>
              <div><strong>Parent Name:</strong> {submittedReceipt.parentName}</div>
              <div><strong>Grade Applying:</strong> {submittedReceipt.gradeApplying}</div>
              <div><strong>Stream:</strong> {submittedReceipt.stream}</div>
              <div><strong>Phone:</strong> {submittedReceipt.phone}</div>
              <div><strong>City:</strong> {submittedReceipt.city || 'N/A'}</div>
            </div>

            <div style={{ padding: '1rem', background: '#f6f0e6', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: '#57534e' }}>Estimated Annual Fee:</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#c59b27' }}>
                ₹{submittedReceipt.estimatedFee.toLocaleString()} / year
              </div>
              <p style={{ fontSize: '0.75rem', color: '#78716c', marginTop: '0.2rem' }}>
                Our Admission Counselor will reach out to schedule your Gurukul Samvad session.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => window.print()}
                className="saffron-gradient-btn"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Printer size={16} /> Print Confirmation Slip
              </button>
              <button
                onClick={() => setSubmittedReceipt(null)}
                style={{ padding: '0.75rem 1.25rem', border: '1px solid #78716c', borderRadius: '9999px', fontWeight: '600' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
