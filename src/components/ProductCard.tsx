import React from 'react';
import { Product } from '../types';
import { MessageSquare, FileText, CheckCircle2 } from 'lucide-react';
import { AppStore } from '../services/store';

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const handleWhatsAppQuick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hello Kasmade Data Corporation, I am interested in getting the best price for: *${product.name}* (Brand: ${product.brand}). Please provide quotation and availability.`;
    window.open(AppStore.generateWhatsAppUrl('9545943951', msg), '_blank');
  };

  return (
    <div className="kdc-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Product Image Container */}
      <div style={{ position: 'relative', height: '210px', width: '100%', overflow: 'hidden', background: '#F1F5F9' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          onError={(e) => {
            // Fallback tech graphic if external image fails
            e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80';
          }}
        />

        {/* Brand Pill */}
        <span
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(11, 21, 40, 0.85)',
            backdropFilter: 'blur(4px)',
            color: '#FFFFFF',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            padding: '0.25rem 0.65rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}
        >
          {product.brand}
        </span>

        {/* Badge if featured/best seller */}
        {product.badge && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'linear-gradient(135deg, #F3C343 0%, #D4AF37 100%)',
              color: '#0B1528',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              fontSize: '0.72rem',
              fontWeight: 800,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
          {product.subCategory || product.category}
        </div>

        <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: '#0B1528', marginBottom: '0.6rem', lineHeight: 1.35 }}>
          {product.name}
        </h3>

        <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
          {product.description}
        </p>

        {/* Specs Highlights */}
        {product.specifications && product.specifications.length > 0 && (
          <div style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', background: '#F8FAFC', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
            {product.specifications.slice(0, 3).map((spec, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: '#334155' }}>
                <CheckCircle2 size={13} color="#22C55E" style={{ flexShrink: 0 }} />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        )}

        {/* Card Actions */}
        <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.6rem', paddingTop: '0.5rem', borderTop: '1px solid #F1F5F9' }}>
          <button
            onClick={() => onEnquire(product)}
            className="btn btn-navy btn-sm"
            style={{ width: '100%' }}
          >
            <FileText size={15} color="#F3C343" />
            <span>Get Best Price</span>
          </button>

          <button
            onClick={handleWhatsAppQuick}
            className="btn btn-whatsapp btn-sm"
            title="Enquire on WhatsApp"
            style={{ padding: '0.5rem 0.75rem' }}
          >
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
