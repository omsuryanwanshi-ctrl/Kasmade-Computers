import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Menu, X, FileText, ChevronRight, Lock, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { id: 'home',     label: t('nav.home') },
    { id: 'products', label: t('nav.products') },
    { id: 'services', label: t('nav.services') },
    { id: 'brands',   label: t('nav.brands') },
    { id: 'software', label: t('nav.software') },
    { id: 'about',    label: t('nav.about') },
    { id: 'why-us',   label: t('nav.whyUs') },
    { id: 'contact',  label: t('nav.contact') }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => setLang(lang === 'en' ? 'mr' : 'en');

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="top-bar">
        <div className="kdc-container top-bar-content">
          <div className="top-bar-left">
            <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="top-link">
              <Phone size={13} color="#D4AF37" />
              <span>+91 {BUSINESS_INFO.phones[0]}</span>
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="top-link">
              <span>+91 {BUSINESS_INFO.phones[1]}</span>
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="top-link">
              <Mail size={13} color="#D4AF37" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          <div className="top-bar-right">
            <div className="top-link" style={{ fontSize: '0.78rem' }}>
              <MapPin size={13} color="#E63946" />
              <span>Deola, Nashik, MH</span>
            </div>
            <span style={{ opacity: 0.3 }}>|</span>
            <button
              onClick={() => handleNavClick('admin')}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem'
              }}
              title="Admin Portal"
            >
              <Lock size={11} color="#D4AF37" />
              <span>{t('nav.admin')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="kdc-header">
        <div className="kdc-container header-container">
          {/* Logo Brand */}
          <div onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            <Logo size="md" variant="light" />
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
                style={{ background: 'transparent', border: 'none', outline: 'none' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Language Toggle - Desktop */}
            <button
              onClick={toggleLang}
              className="lang-toggle-btn"
              title={lang === 'en' ? 'Switch to Marathi' : 'Switch to English'}
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'मराठी' : 'English'}</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="btn btn-gold btn-sm header-quote-btn"
            >
              <FileText size={16} />
              <span>{t('nav.getQuote')}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '8px',
                color: '#ffffff',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="mobile-hamburger"
            >
              {mobileMenuOpen ? <X size={24} color="#F3C343" /> : <Menu size={24} color="#F3C343" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-drawer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Logo size="sm" variant="light" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Language Toggle - Mobile */}
            <button
              onClick={toggleLang}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.65rem 0.9rem',
                marginBottom: '0.75rem',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '10px',
                color: '#F3C343',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                justifyContent: 'center'
              }}
            >
              <Globe size={16} />
              <span>
                {lang === 'en' ? '🇮🇳 मराठीत बघा' : '🌐 View in English'}
              </span>
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`mobile-nav-link ${activeTab === link.id ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} opacity={0.6} />
                </button>
              ))}

              <button
                onClick={() => handleNavClick('admin')}
                className="mobile-nav-link"
                style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: '#D4AF37' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={15} /> {t('nav.admin')}
                </span>
                <ChevronRight size={16} opacity={0.6} />
              </button>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                <FileText size={18} />
                <span>{t('nav.getQuote')}</span>
              </button>

              <div style={{ fontSize: '0.8rem', color: '#94A3B8', textAlign: 'center', marginTop: '0.5rem' }}>
                <p>Call Us: <strong>+91 {BUSINESS_INFO.phones[0]}</strong></p>
                <p>Office: {BUSINESS_INFO.officePhone}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
