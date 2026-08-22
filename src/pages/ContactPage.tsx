import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/initialData';
import { AppStore } from '../services/store';
import { MapPin, Phone, Mail, Clock, MessageSquare, PhoneCall, Send, Navigation, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    AppStore.submitEnquiry({
      customerName: name,
      mobile: phone,
      email: email || 'Not Provided',
      requirementType: 'General Enquiry',
      productOrService: 'Direct Contact Message',
      quantity: 1,
      message: msg || 'Contact form submission'
    });

    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const url = AppStore.generateWhatsAppUrl(
      '9545943951',
      'Hello Kasmade Data Corporation, I would like to enquire about your store location and services in Deola.'
    );
    window.open(url, '_blank');
  };

  const handleDirections = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      'Shop No. 2, Near Munjoba Par, Subhash Road, Deola, Nashik, Maharashtra'
    )}`;
    window.open(mapUrl, '_blank');
  };

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
              <MapPin size={13} /> Deola, Nashik, Maharashtra
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Contact Kasmade Data Corporation
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Visit our computer showroom and service center or connect directly via phone, WhatsApp, or email for instant support.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Contact Info + Form Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Store Details Card with Glassmorphism */}
          <div
            className="kdc-glass-dark"
            style={{
              padding: '2.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.75rem' }}>
                Store Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.96rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <MapPin size={22} color="#E63946" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>Store Address</strong>
                    <span style={{ color: '#E2E8F0', lineHeight: 1.6 }}>
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Phone size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>Direct Phone Numbers</strong>
                    <div style={{ color: '#E2E8F0' }}>
                      Mobile: <a href={`tel:${BUSINESS_INFO.phones[0]}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>+91 {BUSINESS_INFO.phones[0]}</a><br />
                      Mobile: <a href={`tel:${BUSINESS_INFO.phones[1]}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>+91 {BUSINESS_INFO.phones[1]}</a><br />
                      Office Landline: <strong style={{ color: '#FFFFFF' }}>{BUSINESS_INFO.officePhone}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Mail size={20} color="#93C5FD" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>Official Email</strong>
                    <a href={`mailto:${BUSINESS_INFO.email}`} style={{ color: '#93C5FD', fontWeight: 500 }}>
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Clock size={20} color="#F3C343" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#F3C343', display: 'block', marginBottom: '0.2rem' }}>Store Timings</strong>
                    <span style={{ color: '#E2E8F0' }}>
                      Monday – Saturday: 9:30 AM – 8:30 PM <br />
                      Sunday: Available on appointment / emergency
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="btn btn-gold">
                <PhoneCall size={16} />
                <span>Call Now</span>
              </a>

              <button onClick={handleWhatsApp} className="btn btn-whatsapp">
                <MessageSquare size={16} />
                <span>WhatsApp Us</span>
              </button>

              <button onClick={handleDirections} className="btn btn-outline-white" style={{ gridColumn: 'span 2' }}>
                <Navigation size={16} color="#D4AF37" />
                <span>Get Directions (Google Maps)</span>
              </button>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="kdc-glass-dark" style={{ padding: '2.75rem' }}>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Send Direct Message
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#CBD5E1', marginBottom: '1.75rem' }}>
              Have questions regarding prices, availability, or technical repair? Send us a quick note.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={48} color="#22C55E" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: '#CBD5E1', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{name}</strong>. We will get back to you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-gold">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="e.g. 9545943951"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    rows={4}
                    className="form-textarea"
                    placeholder="What can we help you with?"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map Section */}
        <div
          className="kdc-glass-dark"
          style={{
            overflow: 'hidden'
          }}
        >
          <div style={{ padding: '1.5rem 2rem', background: '#0B1528', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <MapPin size={20} color="#E63946" />
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                Store Location Map • Deola, Nashik
              </span>
            </div>

            <button onClick={handleDirections} className="btn btn-gold btn-sm">
              Open in Google Maps
            </button>
          </div>

          <div style={{ height: '360px', width: '100%', position: 'relative' }}>
            <iframe
              title="Kasmade Data Corporation Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                'Shop No. 2, Near Munjoba Par, Subhash Road, Deola, Nashik, Maharashtra'
              )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
