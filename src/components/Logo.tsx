import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'light' }) => {
  const iconSizes = {
    sm: { w: 38, h: 38, font: '1.1rem', sub: '0.65rem' },
    md: { w: 48, h: 48, font: '1.35rem', sub: '0.72rem' },
    lg: { w: 58, h: 58, font: '1.65rem', sub: '0.82rem' }
  };

  const isLight = variant === 'light';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', textDecoration: 'none' }}>
      {/* Hexagonal Shield Emblem */}
      <div
        style={{
          width: iconSizes[size].w,
          height: iconSizes[size].h,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F1E3A 0%, #060D18 100%)',
          borderRadius: '10px',
          border: '1.5px solid #D4AF37',
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)',
          flexShrink: 0
        }}
      >
        {/* Subtle inner corner red tech dot */}
        <span
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#E63946',
            boxShadow: '0 0 6px #E63946'
          }}
        />

        <div style={{ textAlign: 'center', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: size === 'sm' ? '0.95rem' : size === 'md' ? '1.15rem' : '1.35rem',
              background: 'linear-gradient(135deg, #FFF2BE 0%, #F3C343 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.05em',
              display: 'block'
            }}
          >
            KDC
          </span>
          <span
            style={{
              fontSize: '0.45rem',
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            2012
          </span>
        </div>
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: iconSizes[size].font,
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
            fontSize: iconSizes[size].sub,
            color: '#93C5FD',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <span>Multi Brand Store</span>
          <span style={{ color: '#D4AF37' }}>•</span>
          <span style={{ color: '#E2E8F0', opacity: 0.85 }}>Since 2012</span>
        </div>
      </div>
    </div>
  );
};
