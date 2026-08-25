import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/initialData';
import { Logo } from '../components/Logo';
import { Calendar, CheckCircle2, HeartHandshake, Award, ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';
import { AppStore } from '../services/store';
import { SiteBanners } from '../types';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [banners, setBanners] = useState<SiteBanners>(() => AppStore.getBanners());

  useEffect(() => {
    const handleBannersUpdated = () => {
      setBanners(AppStore.getBanners());
    };
    window.addEventListener('kdc_banners_updated', handleBannersUpdated);
    return () => window.removeEventListener('kdc_banners_updated', handleBannersUpdated);
  }, []);

  const ownerPhoto = banners.ownerPhoto || './assets/owner_manoj_kandekar.jpg';

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
              <Calendar size={13} /> Established 2012 • 14+ Years of Trust
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              About Kasmade Data Corporation
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Serving Deola, Nashik, and North Maharashtra with genuine computer systems, reliable CCTV surveillance, and dedicated technical support.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Founder & Business Profile Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4.5rem' }}>
          
          {/* Left: Founder Profile Card with Image */}
          <div
            className="kdc-glass-dark"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderTop: '4px solid #D4AF37'
            }}
          >
            {/* Photo with glowing gold border */}
            <div
              style={{
                width: '190px',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '3px solid #D4AF37',
                boxShadow: '0 12px 30px rgba(212, 175, 55, 0.25), 0 4px 12px rgba(0,0,0,0.5)',
                marginBottom: '1.5rem',
                background: '#0B1528',
                position: 'relative'
              }}
            >
              <img
                src={ownerPhoto}
                alt="Manoj A. Kandekar - Owner & Founder"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
                onError={(e) => { e.currentTarget.src = './assets/owner_manoj_kandekar.jpg'; }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(11,21,40,0.95), transparent)',
                  padding: '0.4rem 0.5rem',
                  fontSize: '0.72rem',
                  color: '#F3C343',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}
              >
                FOUNDER & DIRECTOR
              </div>
            </div>

            <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF' }}>
                Manoj A. Kandekar
              </h3>
              <ShieldCheck size={20} color="#22C55E" />
            </div>

            <p style={{ fontSize: '0.88rem', color: '#F3C343', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Owner & Technical Head
            </p>

            <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: 1.7, maxWidth: '420px', marginBottom: '1.5rem' }}>
              Leading <strong>Kasmade Data Corporation</strong> since 2012 with a steadfast commitment to genuine computing products, transparent technical repair, and customer satisfaction across Deola and Nashik.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', width: '100%' }}>
              <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="btn btn-gold" style={{ flex: 1, justifyContent: 'center' }}>
                <PhoneCall size={16} />
                <span>Call Owner</span>
              </a>
              <button onClick={onOpenQuote} className="btn btn-outline-white" style={{ flex: 1, justifyContent: 'center' }}>
                <span>Get Quote</span>
              </button>
            </div>
          </div>

          {/* Right: Company Story & Details */}
          <div className="kdc-glass-dark" style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Logo size="md" variant="light" />
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.3 }}>
              “Satisfaction Is Our Motto”
            </h2>

            <p style={{ fontSize: '1.02rem', color: '#E2E8F0', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              <strong>Kasmade Data Corporation</strong> is a premier multi-brand computer sales and service store established in 2012. We provide computers, laptops, printers, CCTV security systems, networking hardware, components, and professional chip-level technical services.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Over the past 14+ years, our reputation has been built on genuine product authenticity, certified warranty support, and quick turnaround diagnostics for individuals, offices, schools, and institutions.
            </p>

            {/* Stats Counter Strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
                <div style={{ color: '#F3C343', fontWeight: 800, fontSize: '1.4rem' }}>2012</div>
                <div style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>Established</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
                <div style={{ color: '#F3C343', fontWeight: 800, fontSize: '1.4rem' }}>16+</div>
                <div style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>Top Brands</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
                <div style={{ color: '#F3C343', fontWeight: 800, fontSize: '1.4rem' }}>100%</div>
                <div style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>Genuine Parts</div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', fontSize: '0.9rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={16} color="#E63946" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="#93C5FD" />
                <a href={`mailto:${BUSINESS_INFO.email}`} style={{ color: '#93C5FD' }}>{BUSINESS_INFO.email}</a>
              </div>
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
              We focus on honest recommendations, authentic products, and dependable technical service.
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
