import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'light', showText = true }) => {
  const dimensions = {
    sm: { imgHeight: 38, font: '1.05rem', sub: '0.65rem' },
    md: { imgHeight: 48, font: '1.25rem', sub: '0.72rem' },
    lg: { imgHeight: 64, font: '1.5rem', sub: '0.82rem' },
    hero: { imgHeight: 88, font: '1.75rem', sub: '0.9rem' }
  };

  const isLight = variant === 'light';
  const { imgHeight, font, sub } = dimensions[size];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', textDecoration: 'none' }}>
      {/* Official Uploaded Logo Image */}
      <div
        style={{
          height: `${imgHeight}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          background: '#060C18',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 12px rgba(212, 175, 55, 0.2)',
          flexShrink: 0,
          padding: '2px'
        }}
      >
        <img
          src="./logo.png"
          alt="Kasmade Data Corporation Official Logo"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '6px'
          }}
          onError={(e) => {
            // Fallback to assets path if relative path differs
            e.currentTarget.src = './assets/kdc_official_logo.png';
          }}
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: font,
              letterSpacing: '-0.01em',
              color: isLight ? '#FFFFFF' : '#0B1528',
              lineHeight: 1.15
            }}
          >
            KASMADE <span style={{ color: '#F3C343' }}>DATA</span> CORP.
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: sub,
              color: '#93C5FD',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginTop: '0.1rem'
            }}
          >
            <span>Multi Brand Store</span>
            <span style={{ color: '#D4AF37' }}>•</span>
            <span style={{ color: '#E2E8F0', opacity: 0.85 }}>Est. 2012</span>
          </div>
        </div>
      )}
    </div>
  );
};
