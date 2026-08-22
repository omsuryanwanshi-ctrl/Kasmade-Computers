import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{ background: '#060c18', borderTop: '2px solid rgba(212, 175, 55, 0.3)', color: '#94A3B8', paddingTop: '4.5rem', paddingBottom: '2rem' }}>
      <div className="kdc-container">
        {/* Main 4-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size="md" variant="light" />
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '1.25rem' }}>
              Kasmade Data Corporation is a trusted multi-brand computer sales and service store established in 2012. We provide laptops, desktops, printers, CCTV systems, components, and certified technical solutions.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.4rem 0.85rem', borderRadius: '6px', color: '#F3C343', fontSize: '0.825rem', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>“SATISFACTION IS OUR MOTTO”</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Quick Navigation
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '2px', background: '#D4AF37' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'products', label: 'All Products Catalog' },
                { id: 'services', label: 'Technical Services' },
                { id: 'brands', label: 'Our Brands' },
                { id: 'software', label: 'Software Solutions' },
                { id: 'about', label: 'About Kasmade' },
                { id: 'why-us', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'all 0.2s ease',
                      padding: 0
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F3C343')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <ArrowRight size={13} color="#D4AF37" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Categories & Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Products & Services
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '2px', background: '#D4AF37' }}></span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
              <div>
                <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', textTransform: 'uppercase' }}>Products</strong>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {['Laptops', 'Desktops', 'Printers', 'CCTV Kits', 'Components', 'Accessories'].map((p) => (
                    <li key={p}>
                      <button
                        onClick={() => {
                          onNavigate('products');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        • {p}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', textTransform: 'uppercase' }}>Services</strong>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {['Computer Repair', 'Laptop Repair', 'AMC Support', 'Networking', 'CCTV Service', 'Custom PC'].map((s) => (
                    <li key={s}>
                      <button
                        onClick={() => {
                          onNavigate('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        • {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Col 4: Store Contact Info */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Store Location & Contact
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '2px', background: '#D4AF37' }}></span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#E63946" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cbd5e1' }}>{BUSINESS_INFO.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} color="#D4AF37" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${BUSINESS_INFO.phones[0]}`} style={{ color: '#ffffff', fontWeight: 600 }}>+91 {BUSINESS_INFO.phones[0]}</a> /{' '}
                  <a href={`tel:${BUSINESS_INFO.phones[1]}`} style={{ color: '#ffffff', fontWeight: 600 }}>+91 {BUSINESS_INFO.phones[1]}</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} color="#94A3B8" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1' }}>Office: <strong>{BUSINESS_INFO.officePhone}</strong></span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} color="#D4AF37" style={{ flexShrink: 0 }} />
                <a href={`mailto:${BUSINESS_INFO.email}`} style={{ color: '#93C5FD' }}>{BUSINESS_INFO.email}</a>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Clock size={16} color="#F3C343" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1' }}>Mon - Sat: 9:30 AM - 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
          <div>
            © 2026 <strong>Kasmade Data Corporation</strong>. All Rights Reserved. Multi-Brand Computer Sales & Technical Service Store.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>Owner: <strong>{BUSINESS_INFO.owner}</strong></span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ color: '#F3C343' }}>Since 2012</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
