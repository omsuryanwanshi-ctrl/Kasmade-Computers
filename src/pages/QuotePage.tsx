import React, { useState } from 'react';
import { AppStore } from '../services/store';
import { BUSINESS_INFO } from '../data/initialData';
import { Send, CheckCircle2, MessageSquare, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [requirementType, setRequirementType] = useState('Laptop');
  const [productOrService, setProductOrService] = useState('');
  const [brandPreference, setBrandPreference] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [budgetRange, setBudgetRange] = useState('Best Market Value');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const requirementOptions = [
    'Laptop',
    'Desktop',
    'Custom PC',
    'Printer',
    'CCTV',
    'Computer Components',
    'Networking',
    'Accessories',
    'Computer Repair',
    'Laptop Repair',
    'AMC',
    'Software',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile) {
      alert('Please provide your name and mobile number.');
      return;
    }

    setSubmitting(true);
    AppStore.submitEnquiry({
      customerName: fullName,
      mobile,
      email: email || 'Not Provided',
      requirementType,
      productOrService: productOrService || requirementType,
      brandPreference: brandPreference || 'Any Leading Brand',
      quantity: Number(quantity) || 1,
      budget: budgetRange,
      message: message || `Quotation enquiry for ${requirementType}`
    });

    setSubmitting(false);
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*FORMAL QUOTATION REQUEST*\n*Customer:* ${fullName}\n*Mobile:* ${mobile}\n*Requirement Type:* ${requirementType}\n*Product/Service:* ${productOrService || requirementType}\n*Brand Preference:* ${brandPreference || 'Best Value'}\n*Quantity:* ${quantity}\n*Budget:* ${budgetRange}\n*Note:* ${message || 'Please provide quotation.'}\n--------------------------------\n_Submitted on Kasmade Data Corporation Portal_`;
    window.open(AppStore.generateWhatsAppUrl('9545943951', text), '_blank');
  };

  return (
    <div className="bg-hero-tech" style={{ minHeight: '85vh', paddingBottom: '5rem', color: '#FFFFFF' }}>
      {/* Banner */}
      <section
        style={{
          padding: '4.5rem 0',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div className="kdc-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag light" style={{ marginBottom: '0.65rem' }}>
              <Sparkles size={13} /> Official Quotation Portal
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Get the Best Quote for Your Requirement
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Fill out your technical requirements below for laptops, custom PCs, CCTV systems, enterprise networking, or technical services. Our team will prepare a formal price proposal for you.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {/* Main Form Box with Glassmorphism */}
          <div
            className="kdc-glass-dark"
            style={{
              padding: '2.75rem',
              color: '#FFFFFF'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '2px solid #22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle2 size={46} color="#22C55E" />
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Thank you!
                </h3>

                <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2.25rem' }}>
                  Your enquiry has been received. Our team will contact you shortly with the best available pricing and technical advice.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <button onClick={handleWhatsAppSend} className="btn btn-whatsapp btn-lg">
                    <MessageSquare size={20} />
                    <span>Send via WhatsApp for Instant Reply</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setMobile('');
                      setMessage('');
                    }}
                    className="btn btn-outline-white"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.75rem' }}>
                  Quotation Request Details
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Ramesh Patil"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="e.g. 9545943951"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email (Optional)</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Requirement Type *</label>
                    <select
                      className="form-select"
                      value={requirementType}
                      onChange={(e) => setRequirementType(e.target.value)}
                    >
                      {requirementOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: '#0B1528' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Product / Service / Model Specification</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. HP Core i5 16GB / CP Plus 4 Cam Kit / RAM 16GB"
                    value={productOrService}
                    onChange={(e) => setProductOrService(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Brand Preference</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="HP, Dell, Lenovo, ASUS..."
                      value={brandPreference}
                      onChange={(e) => setBrandPreference(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      className="form-input"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Budget Range</label>
                    <select
                      className="form-select"
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                    >
                      <option value="Best Market Value" style={{ background: '#0B1528' }}>Best Market Value</option>
                      <option value="Under ₹25,000" style={{ background: '#0B1528' }}>Under ₹25,000</option>
                      <option value="₹25,000 - ₹50,000" style={{ background: '#0B1528' }}>₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹80,000" style={{ background: '#0B1528' }}>₹50,000 - ₹80,000</option>
                      <option value="₹80,000+" style={{ background: '#0B1528' }}>₹80,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Specific Requirements</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    placeholder="Tell us any specific requirements, timeline, or site delivery location..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-gold btn-lg"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  <Send size={18} />
                  <span>{submitting ? 'Processing...' : 'Submit Quotation Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info & Assurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="kdc-glass-dark" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#F3C343', fontWeight: 700 }}>
                <ShieldCheck size={22} />
                <span>DIRECT STORE QUOTATION GUARANTEE</span>
              </div>
              <h4 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Why Request a Quote from KDC?
              </h4>
              <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We believe in personalized pricing that matches your exact technical requirements, ensuring you never pay for unnecessary features or under-spec hardware.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                {['100% genuine box pack stock with manufacturer warranty', 'Competitive transparent pricing with official GST invoice', 'Expert compatibility validation by certified technicians', 'Optional on-site installation & data transfer service'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#22C55E" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Card */}
            <div className="kdc-glass-dark" style={{ padding: '2.25rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                Prefer Direct Communication?
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#CBD5E1', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                Call our store directly or chat with Manoj A. Kandekar on WhatsApp for urgent product stock inquiries.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="btn btn-gold">
                  <PhoneCall size={16} />
                  <span>Call: +91 {BUSINESS_INFO.phones[0]}</span>
                </a>

                <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="btn btn-outline-white">
                  <PhoneCall size={16} />
                  <span>Call: +91 {BUSINESS_INFO.phones[1]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
