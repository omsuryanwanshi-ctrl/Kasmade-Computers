import React from 'react';
import { BRANDS_DATA } from '../data/initialData';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface BrandsPageProps {
  onOpenQuote: (brandName?: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="bg-products-tech" style={{ minHeight: '85vh', paddingBottom: '5rem' }}>
      {/* Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(6, 12, 24, 0.94) 0%, rgba(15, 30, 58, 0.90) 100%), url(https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1920&auto=format&fit=crop&q=80) center/cover no-repeat',
          color: '#ffffff',
          padding: '4.5rem 0',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)',
          marginBottom: '3.5rem'
        }}
      >
        <div className="kdc-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag light" style={{ marginBottom: '0.65rem' }}>
              <Layers size={13} /> Official Hardware Partners
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Multi Brand Store – All Your Technology Needs Under One Roof
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              At Kasmade Data Corporation, we bring you genuine products from global computing leaders like HP, Lenovo, Dell, ASUS, Acer, Epson, Canon, CP Plus, Brother and more.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container">
        {/* Brands Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="kdc-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '3.5px solid #D4AF37'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0B1528', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.03em' }}>
                  {brand.name}
                </div>
                <span style={{ fontSize: '0.72rem', background: '#0B1528', color: '#F3C343', border: '1px solid #D4AF37', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 800 }}>
                  GENUINE
                </span>
              </div>

              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#B58E22', textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.04em' }}>
                {brand.category}
              </div>

              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.5rem', flex: 1 }}>
                Popular for: <strong>{brand.popularFor}</strong>
              </p>

              <button
                onClick={() => onOpenQuote(`Brand: ${brand.name}`)}
                className="btn btn-navy btn-sm"
                style={{ width: '100%' }}
              >
                <span>Enquire {brand.name} Products</span>
                <ArrowRight size={14} color="#F3C343" />
              </button>
            </div>
          ))}
        </div>

        {/* Brand Promise Banner */}
        <div
          className="kdc-card"
          style={{
            padding: '2.75rem',
            border: '1.5px solid rgba(212, 175, 55, 0.4)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#B58E22', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <ShieldCheck size={18} />
                <span>100% BRAND AUTHENTICITY</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0B1528', marginBottom: '0.6rem' }}>
                Manufacturer Warranty & Verified Box Packs
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#64748B', lineHeight: 1.65 }}>
                Every device sold through Kasmade Data Corporation comes with genuine manufacturer warranty coverage, bill of sale, and direct service center support.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Official brand warranty cards & valid GST invoices', 'Pre-delivery testing & configuration support', 'Post-purchase technical guidance in Deola showroom'].map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0 }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
