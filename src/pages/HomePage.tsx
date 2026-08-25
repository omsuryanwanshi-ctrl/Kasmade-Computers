import React from 'react';
import { Product, ServiceItem } from '../types';
import { ProductCard } from '../components/ProductCard';
import { TrustBanner } from '../components/TrustBanner';
import { BUSINESS_INFO, BRANDS_DATA, WHY_CHOOSE_US_ITEMS } from '../data/initialData';
import {
  Laptop,
  Award,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Layers,
  Wrench,
  Camera,
  Printer,
  Sparkles,
  MapPin
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { AppStore } from '../services/store';
import { SiteBanners } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HomePageProps {
  products: Product[];
  services: ServiceItem[];
  onNavigate: (tab: string) => void;
  onEnquireProduct: (product: Product) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  services,
  onNavigate,
  onEnquireProduct,
  onOpenQuote
}) => {
  const { t } = useLanguage();
  const [banners, setBanners] = React.useState<SiteBanners>(() => AppStore.getBanners());

  React.useEffect(() => {
    const handleBannersUpdated = () => {
      setBanners(AppStore.getBanners());
    };
    window.addEventListener('kdc_banners_updated', handleBannersUpdated);
    return () => window.removeEventListener('kdc_banners_updated', handleBannersUpdated);
  }, []);

  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  const stats = [
    {
      icon: Calendar,
      number: t('stats.since'),
      title: t('stats.sinceTitle'),
      desc: t('stats.sinceDesc')
    },
    {
      icon: Layers,
      number: t('stats.brands'),
      title: t('stats.brandsTitle'),
      desc: t('stats.brandsDesc')
    },
    {
      icon: Award,
      number: t('stats.satisfaction'),
      title: t('stats.satisfactionTitle'),
      desc: t('stats.satisfactionDesc')
    },
    {
      icon: Wrench,
      number: t('stats.expert'),
      title: t('stats.expertTitle'),
      desc: t('stats.expertDesc')
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION WITH REALISTIC STORE BACKGROUND & NAVY OVERLAY */}
      <section
        className="bg-hero-tech"
        style={{
          backgroundImage: banners.heroBg
            ? `linear-gradient(135deg, rgba(6, 12, 24, 0.94) 0%, rgba(11, 21, 40, 0.88) 45%, rgba(15, 30, 58, 0.82) 100%), url(${banners.heroBg})`
            : undefined,
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 'clamp(2.75rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)'
        }}
      >
        {/* Subtle geometric gold ambient line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
          }}
        />

        <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              {/* Prominent KDC Logo Badge */}
              <div style={{ marginBottom: '1.25rem', display: 'inline-block', background: 'rgba(11, 21, 40, 0.8)', padding: '0.5rem 0.9rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.4)', backdropFilter: 'blur(10px)' }}>
                <Logo size="md" variant="light" />
              </div>

              {/* Tagline Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid rgba(212, 175, 55, 0.45)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  color: '#F3C343',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}
              >
                <span>{t('hero.tagline')}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
              >
                {t('hero.title1')} <span style={{ background: 'linear-gradient(135deg, #FFF2BE 0%, #F3C343 50%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('hero.title2')}</span> {t('hero.title3')}
              </h1>

              <p
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#93C5FD',
                  lineHeight: 1.4,
                  marginBottom: '1.75rem',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                {t('hero.subtitle')}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                <button
                  onClick={() => onNavigate('products')}
                  className="btn btn-gold btn-lg"
                >
                  <span>{t('hero.exploreProducts')}</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="btn btn-outline-white btn-lg"
                >
                  <PhoneCall size={18} color="#D4AF37" />
                  <span>{t('hero.contactUs')}</span>
                </button>
              </div>
            </div>

            {/* Right Visual Tech Grid */}
            <div>
              <div
                className="kdc-glass-dark"
                style={{
                  padding: '1.75rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.75rem' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>{t('hero.storeTitle')}</div>
                  <span style={{ fontSize: '0.75rem', background: '#D4AF37', color: '#0B1528', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 800 }}>{t('hero.storeLocation')}</span>
                </div>

                {/* Tech Highlights Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Laptop size={24} color="#F3C343" style={{ marginBottom: '0.4rem' }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.15rem' }}>Laptops & PCs</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.75rem' }}>HP, Dell, Lenovo, ASUS</p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Camera size={24} color="#F3C343" style={{ marginBottom: '0.4rem' }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.15rem' }}>CCTV Security</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.75rem' }}>CP Plus & Hikvision</p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Printer size={24} color="#F3C343" style={{ marginBottom: '0.4rem' }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.15rem' }}>Printers & Ink</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Epson, HP, Canon</p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Wrench size={24} color="#F3C343" style={{ marginBottom: '0.4rem' }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.15rem' }}>Repairs & Upgrades</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Fast Chip Diagnostics</p>
                  </div>
                </div>

                {/* Instant Quote Callout Card */}
                <div
                  style={{
                    background: 'linear-gradient(90deg, #132A54 0%, #1E3F78 100%)',
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '1.5px solid #D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#F3C343', fontWeight: 800, textTransform: 'uppercase' }}>
                      {t('hero.needPrice')}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>
                      {t('hero.quickQuote')}
                    </div>
                  </div>

                  <button
                    onClick={onOpenQuote}
                    className="btn btn-gold btn-sm"
                    style={{ flexShrink: 0 }}
                  >
                    {t('hero.getQuote')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BANNER */}
      <TrustBanner />

      {/* 3. BUSINESS STATS & HIGHLIGHTS */}
      <section className="bg-trust-tech kdc-section">
        <div className="kdc-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="kdc-card"
                  style={{
                    padding: '2.25rem 1.75rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTop: '3.5px solid #D4AF37'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B58E22',
                      marginBottom: '1rem'
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0B1528', marginBottom: '0.25rem' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.35rem' }}>
                    {stat.title}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
                    {stat.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE WITH HARDWARE BACKGROUND */}
      <section className="bg-products-tech kdc-section">
        <div className="kdc-container">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={13} /> {t('section.products.tag')}
            </span>
            <h2 className="section-title">{t('section.products.title')}</h2>
            <p className="section-desc">
              {t('section.products.desc')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={onEnquireProduct}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('products')}
              className="btn btn-navy btn-lg"
            >
              <span>{t('section.products.viewAll')} ({products.length}+ Items)</span>
              <ArrowRight size={18} color="#F3C343" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW WITH TECHNICIAN REPAIR WORKSPACE BACKGROUND */}
      <section className="bg-services-tech kdc-section" style={{ color: '#FFFFFF' }}>
        <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="section-tag light">
              <Wrench size={13} /> {t('section.services.tag')}
            </span>
            <h2 className="section-title light">{t('section.services.title')}</h2>
            <p className="section-desc light">
              {t('section.services.desc')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
            {services.slice(0, 6).map((srv) => (
              <div key={srv.id} className="kdc-card-dark" style={{ padding: '1.85rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C343' }}>
                    <Wrench size={22} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#93C5FD', background: 'rgba(147, 197, 253, 0.12)', padding: '0.25rem 0.65rem', borderRadius: '4px', border: '1px solid rgba(147, 197, 253, 0.3)' }}>
                    {srv.turnaroundTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {srv.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                  {srv.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: '#E2E8F0' }}>
                      <CheckCircle2 size={13} color="#22C55E" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenQuote()}
                  className="btn btn-outline-gold btn-sm"
                  style={{ width: '100%' }}
                >
                  {t('services.enquire')}
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('services')}
              className="btn btn-gold btn-lg"
            >
              <span>{t('section.services.viewAll')}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. BRANDS SPOTLIGHT */}
      <section className="kdc-section" style={{ background: '#FFFFFF' }}>
        <div className="kdc-container">
          <div className="section-header">
            <span className="section-tag">
              <Layers size={13} /> {t('section.brands.tag')}
            </span>
            <h2 className="section-title">{t('section.brands.title')}</h2>
            <p className="section-desc">
              {t('section.brands.desc')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {BRANDS_DATA.slice(0, 10).map((brand) => (
              <div
                key={brand.id}
                className="kdc-card"
                style={{
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0B1528', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                  {brand.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.3 }}>
                  {brand.popularFor}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onNavigate('brands')}
              className="btn btn-outline-gold btn-md"
              style={{ color: '#B58E22', borderColor: '#D4AF37' }}
            >
              <span>{t('section.brands.viewAll')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="bg-trust-tech kdc-section">
        <div className="kdc-container">
          <div className="section-header">
            <span className="section-tag">
              <Award size={13} /> {t('section.whyUs.tag')}
            </span>
            <h2 className="section-title">{t('section.whyUs.title')}</h2>
            <p className="section-desc">
              {t('section.whyUs.desc')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
              <div key={idx} className="kdc-card" style={{ padding: '2rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B58E22', flexShrink: 0 }}>
                    <Award size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#0B1528' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SHOP LOCATION WITH TECHNOLOGY SHOWROOM BACKGROUND */}
      <section className="bg-showroom-tech" style={{ color: '#FFFFFF', padding: '5rem 0', borderTop: '1.5px solid rgba(212, 175, 55, 0.4)' }}>
        <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-tag light" style={{ marginBottom: '0.5rem' }}>
                <MapPin size={13} /> {t('cta.tag')}
              </span>
              <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                {t('cta.title')}
              </h2>
              <p style={{ fontSize: '1.08rem', color: '#E2E8F0', lineHeight: 1.75, marginBottom: '2rem', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {t('cta.desc')}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="btn btn-gold btn-lg">
                  <PhoneCall size={18} />
                  <span>{t('cta.call')} +91 {BUSINESS_INFO.phones[0]}</span>
                </a>

                <button onClick={onOpenQuote} className="btn btn-outline-white btn-lg">
                  <span>{t('cta.getQuotation')}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="kdc-glass-dark" style={{ padding: '2.25rem' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Award size={22} color="#F3C343" />
                <span>{t('cta.storeInfo')}</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.94rem' }}>
                <div>
                  <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>{t('cta.address')}</strong>
                  <span style={{ color: '#E2E8F0' }}>{BUSINESS_INFO.address}</span>
                </div>

                <div>
                  <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>{t('cta.owner')}</strong>
                  <span style={{ color: '#E2E8F0' }}>{BUSINESS_INFO.owner}</span>
                </div>

                <div>
                  <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>{t('cta.phones')}</strong>
                  <span style={{ color: '#E2E8F0' }}>+91 {BUSINESS_INFO.phones.join(' / +91 ')} | Office: {BUSINESS_INFO.officePhone}</span>
                </div>

                <div>
                  <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>{t('cta.email')}</strong>
                  <span style={{ color: '#93C5FD' }}>{BUSINESS_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
