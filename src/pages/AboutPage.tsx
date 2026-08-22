import React from 'react';
import { BUSINESS_INFO } from '../data/initialData';
import { Logo } from '../components/Logo';
import { Calendar, CheckCircle2, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="bg-showroom-tech" style={{ minHeight: '85vh', paddingBottom: '5rem', color: '#FFFFFF' }}>
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
              <Calendar size={13} /> Established 2012
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              About Kasmade Data Corporation
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Serving Deola, Nashik, and North Maharashtra with genuine computer systems, reliable CCTV surveillance, and dedicated technical support for over a decade.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Core Profile Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4.5rem' }}>
          <div className="kdc-glass-dark" style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Logo size="lg" variant="light" />
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              “Satisfaction Is Our Motto”
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              <strong>Kasmade Data Corporation</strong> is a trusted multi-brand computer sales and service store established in 2012. We provide computers, laptops, printers, CCTV systems, networking equipment, components, accessories and professional technical services for individuals, businesses, offices and institutions.
            </p>

            <p style={{ fontSize: '0.98rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '2rem' }}>
              Founded and managed by <strong>Manoj A. Kandekar</strong>, our store has grown through word-of-mouth recommendations, uncompromised product authenticity, and fast turnaround technical diagnostics.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <div style={{ color: '#F3C343', fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.2rem' }}>2012</div>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>Year Established</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <div style={{ color: '#F3C343', fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.2rem' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>Genuine Products</div>
              </div>
            </div>
          </div>

          {/* Business Info Card */}
          <div
            className="kdc-glass-dark"
            style={{
              padding: '2.5rem',
              color: '#FFFFFF'
            }}
          >
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.75rem' }}>
              Official Business Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.94rem' }}>
              <div>
                <span style={{ color: '#F3C343', fontWeight: 700, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Business Name:</span>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>KASMADE DATA CORPORATION</span>
              </div>

              <div>
                <span style={{ color: '#F3C343', fontWeight: 700, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Brand & Tagline:</span>
                <span style={{ color: '#E2E8F0' }}>KDC – Multi Brand Store • “SATISFACTION IS OUR MOTTO”</span>
              </div>

              <div>
                <span style={{ color: '#F3C343', fontWeight: 700, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Owner / Contact Person:</span>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Manoj A. Kandekar</span>
              </div>

              <div>
                <span style={{ color: '#F3C343', fontWeight: 700, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Store Address:</span>
                <span style={{ color: '#E2E8F0' }}>{BUSINESS_INFO.address}</span>
              </div>

              <div>
                <span style={{ color: '#F3C343', fontWeight: 700, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Contact Numbers:</span>
                <div style={{ color: '#FFFFFF' }}>
                  +91 {BUSINESS_INFO.phones.join(' / +91 ')} <br />
                  Office: {BUSINESS_INFO.officePhone}
                </div>
              </div>

              <div>
                <span style={{ color: '#F3C343', fontWeight: 700, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Official Email:</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} style={{ color: '#93C5FD' }}>{BUSINESS_INFO.email}</a>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem' }}>
              <button onClick={onOpenQuote} className="btn btn-gold" style={{ width: '100%' }}>
                Get Quote
              </button>
              <button onClick={() => onNavigate('contact')} className="btn btn-outline-white" style={{ width: '100%' }}>
                Visit Store
              </button>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-header">
            <span className="section-tag light">
              <HeartHandshake size={13} /> Our Core Focus
            </span>
            <h2 className="section-title light">What Drives Our Work</h2>
            <p className="section-desc light">
              We focus on honest recommendations and dependable computing technology.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Genuine Products', desc: '100% genuine brand parts and systems with authentic manufacturer warranty.' },
              { title: 'Professional Service', desc: 'Systematic fault diagnosis and transparent explanation before starting repairs.' },
              { title: 'Expert Technical Support', desc: 'Qualified technicians with extensive troubleshooting and assembly experience.' },
              { title: 'Customer Satisfaction', desc: 'Our guiding motto since day one in 2012.' },
              { title: 'Multi-Brand Solutions', desc: 'Unbiased advice helping you pick the ideal brand for your specific budget.' },
              { title: 'Fast Turnaround', desc: 'Prompt service to minimize downtime for schools, shops, and individuals.' }
            ].map((p, idx) => (
              <div key={idx} className="kdc-card-dark" style={{ padding: '1.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#22C55E" />
                  <h4 style={{ fontSize: '1.18rem', color: '#FFFFFF' }}>{p.title}</h4>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
