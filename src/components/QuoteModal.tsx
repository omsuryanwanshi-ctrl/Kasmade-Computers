import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, PhoneCall, Send, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { AppStore } from '../services/store';
import { BUSINESS_INFO } from '../data/initialData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  defaultRequirementType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  defaultRequirementType
}) => {
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

  useEffect(() => {
    if (selectedProduct) {
      setProductOrService(selectedProduct.name);
      setBrandPreference(selectedProduct.brand);
      if (selectedProduct.category === 'laptops') setRequirementType('Laptop');
      else if (selectedProduct.category === 'desktops') setRequirementType('Desktop');
      else if (selectedProduct.category === 'cctv') setRequirementType('CCTV');
      else if (selectedProduct.category === 'peripherals') setRequirementType('Printer');
      else if (selectedProduct.category === 'components') setRequirementType('Computer Components');
      else if (selectedProduct.category === 'networking') setRequirementType('Networking');
      else setRequirementType('Accessories');
    } else if (defaultRequirementType) {
      setRequirementType(defaultRequirementType);
      setProductOrService(defaultRequirementType);
    }
  }, [selectedProduct, defaultRequirementType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile) {
      alert('Please provide your name and mobile number.');
      return;
    }

    setSubmitting(true);

    try {
      AppStore.submitEnquiry({
        customerName: fullName,
        mobile,
        email: email || 'Not Provided',
        requirementType,
        productOrService: productOrService || requirementType,
        brandPreference: brandPreference || 'Any Leading Brand',
        quantity: Number(quantity) || 1,
        budget: budgetRange,
        message: message || `Enquiry for ${requirementType}`
      });

      setSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitting(false);
      console.error(err);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = `*NEW ENQUIRY - KASMADE DATA CORPORATION*\n--------------------------------\n*Name:* ${fullName}\n*Mobile:* ${mobile}\n*Requirement:* ${requirementType}\n*Product/Service:* ${productOrService || requirementType}\n*Brand:* ${brandPreference || 'Best Recommendation'}\n*Quantity:* ${quantity}\n*Budget:* ${budgetRange}\n*Note:* ${message || 'Please send quotation.'}\n--------------------------------\n_Submitted via KDC Official Website_`;
    window.open(AppStore.generateWhatsAppUrl('9545943951', text), '_blank');
    onClose();
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobile('');
    setEmail('');
    setMessage('');
    onClose();
  };

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

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '2px solid #22C55E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={40} color="#22C55E" />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
              Enquiry Received!
            </h3>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '440px', margin: '0 auto 2rem auto' }}>
              Thank you, <strong>{fullName}</strong>! Your quotation request has been logged. Our technical sales team will contact you shortly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button
                onClick={handleWhatsAppRedirect}
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%' }}
              >
                <MessageSquare size={20} />
                <span>Instant Connect on WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="btn btn-outline-gold btn-lg"
                style={{ width: '100%' }}
              >
                <PhoneCall size={18} />
                <span>Call Store (+91 {BUSINESS_INFO.phones[0]})</span>
              </a>

              <button
                onClick={handleResetAndClose}
                style={{ background: 'transparent', border: 'none', color: '#94A3B8', marginTop: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="section-tag light" style={{ marginBottom: '0.4rem' }}>
                <Sparkles size={13} /> Official Store Quotation
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff' }}>
                Get the Best Price & Quote
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                Kasmade Data Corporation • Quick technical consultation & official brand pricing
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* Mobile Number */}
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="e.g. 9822100000"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Requirement Type */}
                <div className="form-group">
                  <label className="form-label">Requirement Type *</label>
                  <select
                    className="form-select"
                    value={requirementType}
                    onChange={(e) => setRequirementType(e.target.value)}
                  >
                    {requirementOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: '#0B1528', color: '#ffffff' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Product / Service Name */}
              <div className="form-group">
                <label className="form-label">Product / Service Specification</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. HP Laptop Core i5 / CCTV 4 Camera Setup / RAM Upgrade"
                  value={productOrService}
                  onChange={(e) => setProductOrService(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                {/* Brand Preference */}
                <div className="form-group">
                  <label className="form-label">Brand Preference</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="HP, Dell, Lenovo, ASUS, CP Plus..."
                    value={brandPreference}
                    onChange={(e) => setBrandPreference(e.target.value)}
                  />
                </div>

                {/* Quantity */}
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

                {/* Budget Range */}
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

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Additional Message / Note</label>
                <textarea
                  rows={2}
                  className="form-textarea"
                  placeholder="Mention any custom specifications, delivery preference, or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.5rem' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-gold btn-lg"
                  style={{ flex: 1 }}
                >
                  <Send size={18} />
                  <span>{submitting ? 'Submitting...' : 'Send Enquiry'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
