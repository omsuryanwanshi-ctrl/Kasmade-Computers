import React from 'react';
import { WHY_CHOOSE_US_ITEMS, BUSINESS_INFO } from '../data/initialData';
import { TrustBanner } from '../components/TrustBanner';
import { ShieldCheck, Award, Zap, Layers, Cpu, HeartHandshake, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

interface WhyChooseUsPageProps {
  onOpenQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'Zap': return Zap;
      case 'Layers': return Layers;
      case 'Cpu': return Cpu;
      case 'HeartHandshake': return HeartHandshake;
      default: return ShieldCheck;
    }
  };

  return (
    <div className="bg-trust-tech" style={{ minHeight: '85vh', paddingBottom: '5rem' }}>
      {/* Banner with Subtle Overlay */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(6, 12, 24, 0.94) 0%, rgba(11, 21, 40, 0.90) 100%), url(./assets/hero_bg.jpg) center/cover no-repeat',
          color: '#ffffff',
          padding: '4.5rem 0',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)',
          marginBottom: '3.5rem'
        }}
      >
        <div className="kdc-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag light" style={{ marginBottom: '0.65rem' }}>
              <ShieldCheck size={13} /> The Kasmade Difference
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Why Choose Kasmade Data Corporation?
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Established in 2012 with a dedication to genuine technology, honest guidance, and reliable technical after-sales support.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={{ marginBottom: '4rem' }}>
        <TrustBanner />
      </div>

      <div className="kdc-container">
        {/* 6 Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="kdc-card"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3.5px solid #D4AF37'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: 'rgba(212, 175, 55, 0.14)',
                      border: '1.5px solid rgba(212, 175, 55, 0.38)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B58E22',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1528' }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                  {item.desc}
                </p>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#16A34A', fontWeight: 700 }}>
                    <CheckCircle2 size={15} />
                    <span>Verified Store Commitment</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar with Showroom Background */}
        <div
          className="kdc-glass-dark"
          style={{
            padding: '3.5rem 2.5rem',
            color: '#FFFFFF',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Experience Trusted Computing Solutions Today
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#E2E8F0', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2.25rem auto' }}>
            Whether you need a new laptop, desktop upgrade, CCTV system or urgent technical diagnostics, we are ready to assist.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={onOpenQuote} className="btn btn-gold btn-lg">
              <span>Request Quotation</span>
              <ArrowRight size={18} />
            </button>

            <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="btn btn-outline-white btn-lg">
              <PhoneCall size={18} color="#D4AF37" />
              <span>Call Us: +91 {BUSINESS_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
