import React from 'react';
import { ShieldCheck, Award, Tag, UserCheck, Zap, Calendar } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  const trustPoints = [
    { icon: ShieldCheck, title: '100% CUSTOMER SATISFACTION', desc: 'Our Prime Motto' },
    { icon: Award, title: 'GENUINE PRODUCTS', desc: 'Direct Brand Warranty' },
    { icon: Tag, title: 'BEST PRICES', desc: 'Competitive Value' },
    { icon: UserCheck, title: 'EXPERT TECHNICIANS', desc: 'Professional Support' },
    { icon: Zap, title: 'FAST SERVICE', desc: 'Quick Turnaround' },
    { icon: Calendar, title: 'TRUSTED SINCE 2012', desc: '14+ Years in Deola' }
  ];

  return (
    <section className="trust-strip">
      <div className="kdc-container">
        <div className="trust-grid">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="trust-item">
                <div className="trust-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="trust-text">{item.title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
