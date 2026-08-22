import React from 'react';
import { ServiceItem } from '../types';
import { Wrench, CheckCircle2, Clock, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';

interface ServicesPageProps {
  services: ServiceItem[];
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ services, onOpenQuote }) => {
  return (
    <div className="bg-services-tech" style={{ minHeight: '85vh', paddingBottom: '5rem', color: '#FFFFFF' }}>
      {/* Banner with Technician Workspace Background */}
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
              <Wrench size={13} /> Certified Support Center • Est. 2012
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Professional Technical Services
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Comprehensive chip-level hardware repair, component upgrades, licensed software setup, enterprise AMC maintenance, CCTV surveillance, and office networking in Deola, Nashik.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Services Grid (9 modules) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {services.map((srv) => (
            <div
              key={srv.id}
              className="kdc-card-dark"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '3.5px solid #D4AF37'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: 'rgba(212, 175, 55, 0.18)',
                    border: '1.5px solid rgba(212, 175, 55, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F3C343'
                  }}
                >
                  <Wrench size={26} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#93C5FD', background: 'rgba(147, 197, 253, 0.12)', padding: '0.3rem 0.75rem', borderRadius: '6px', border: '1px solid rgba(147, 197, 253, 0.3)', fontWeight: 600 }}>
                  <Clock size={13} color="#D4AF37" />
                  <span>{srv.turnaroundTime || 'Prompt Service'}</span>
                </div>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#F3C343', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                {srv.category}
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                {srv.title}
              </h2>

              <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {srv.description}
              </p>

              {/* Service Features Checklist */}
              <div style={{ background: 'rgba(6, 13, 24, 0.6)', padding: '1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.75rem', flex: 1 }}>
                <strong style={{ fontSize: '0.78rem', color: '#F3C343', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.65rem' }}>
                  Key Capabilities:
                </strong>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: '#E2E8F0', lineHeight: 1.4 }}>
                      <CheckCircle2 size={14} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                <button
                  onClick={() => onOpenQuote(srv.title)}
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <span>Book Service / Enquire</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="btn btn-outline-white"
                  title="Call Technician"
                  style={{ padding: '0.75rem 1rem' }}
                >
                  <PhoneCall size={18} color="#D4AF37" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* AMC Callout Box */}
        <div
          className="kdc-glass-dark"
          style={{
            padding: '3.5rem 3rem',
            color: '#FFFFFF',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <span className="section-tag light" style={{ marginBottom: '0.5rem' }}>
              <ShieldCheck size={14} /> Institutions & Offices
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Annual Maintenance Contracts (AMC)
            </h3>
            <p style={{ fontSize: '1.02rem', color: '#CBD5E1', lineHeight: 1.7 }}>
              Customized yearly IT maintenance contracts for schools, colleges, gram panchayats, hospitals, banks, and commercial offices across Deola and Nashik. Zero downtime guarantee with regular preventive checks.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', alignItems: 'flex-start' }}>
            <button
              onClick={() => onOpenQuote('Annual Maintenance Contract (AMC)')}
              className="btn btn-gold btn-lg"
              style={{ width: '100%' }}
            >
              <span>Request AMC Proposal</span>
              <ArrowRight size={18} />
            </button>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8', textAlign: 'center', width: '100%' }}>
              Direct on-site support from Manoj A. Kandekar & certified team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
