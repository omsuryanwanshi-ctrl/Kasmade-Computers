import React from 'react';
import { SOFTWARE_SUITES, BUSINESS_INFO } from '../data/initialData';
import { Monitor, FileText, Shield, HardDrive, Sparkles, CheckCircle2, MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';
import { AppStore } from '../services/store';

interface SoftwarePageProps {
  onOpenQuote: (softwareName?: string) => void;
}

export const SoftwarePage: React.FC<SoftwarePageProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return Monitor;
      case 'FileText': return FileText;
      case 'Shield': return Shield;
      default: return HardDrive;
    }
  };

  const handleWhatsAppConsult = (title: string) => {
    const msg = `Hello Kasmade Data Corporation, I need genuine software license consultation for: *${title}*. Please share pricing and details.`;
    window.open(AppStore.generateWhatsAppUrl('9545943951', msg), '_blank');
  };

  return (
    <div className="bg-networking-tech" style={{ minHeight: '85vh', paddingBottom: '5rem' }}>
      {/* Banner with Network Infrastructure Background */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(6, 12, 24, 0.94) 0%, rgba(15, 30, 58, 0.90) 100%), url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&auto=format&fit=crop&q=80) center/cover no-repeat',
          color: '#ffffff',
          padding: '4.5rem 0',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)',
          marginBottom: '3.5rem'
        }}
      >
        <div className="kdc-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag light" style={{ marginBottom: '0.65rem' }}>
              <Sparkles size={13} /> Genuine & Licensed Software
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Software Solutions
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Official Microsoft Windows licenses, Microsoft 365 cloud subscriptions, enterprise antivirus protection, and automated data backup utilities.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container">
        {/* Software Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {SOFTWARE_SUITES.map((suite, index) => {
            const Icon = getIcon(suite.icon);
            return (
              <div
                key={index}
                className="kdc-card"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3.5px solid #D4AF37'
                }}
              >
                <div style={{ width: '54px', height: '54px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.14)', border: '1.5px solid rgba(212, 175, 55, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B58E22', marginBottom: '1.25rem' }}>
                  <Icon size={26} />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1528', marginBottom: '1.25rem' }}>
                  {suite.title}
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flex: 1 }}>
                  {suite.items.map((item, iIdx) => (
                    <li key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.45 }}>
                      <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                  <button
                    onClick={() => onOpenQuote(suite.title)}
                    className="btn btn-navy"
                    style={{ width: '100%' }}
                  >
                    <span>Get Best Price</span>
                    <ArrowRight size={15} color="#F3C343" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppConsult(suite.title)}
                    className="btn btn-whatsapp"
                    title="Enquire on WhatsApp"
                    style={{ padding: '0.75rem 1rem' }}
                  >
                    <MessageSquare size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Enquiry Callout */}
        <div
          className="kdc-glass-dark"
          style={{
            padding: '3.5rem 2.5rem',
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: '880px',
            margin: '0 auto'
          }}
        >
          <span className="section-tag light" style={{ marginBottom: '0.75rem' }}>
            Official Licensing Center
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Need Software? Talk to Our Team
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#E2E8F0', lineHeight: 1.75, marginBottom: '2.25rem', maxWidth: '640px', margin: '0 auto 2.25rem auto' }}>
            Avoid counterfeit software and security vulnerabilities. Get genuine licenses, official activation keys, and seamless installation directly from Kasmade Data Corporation.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={() => onOpenQuote('Software Licensing & Installation')}
              className="btn btn-gold btn-lg"
            >
              <span>Request Software Quotation</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="btn btn-outline-white btn-lg"
            >
              <PhoneCall size={18} color="#D4AF37" />
              <span>Call +91 {BUSINESS_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
