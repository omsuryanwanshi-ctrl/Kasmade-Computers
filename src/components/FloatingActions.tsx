import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { AppStore } from '../services/store';
import { BUSINESS_INFO } from '../data/initialData';

export const FloatingActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = AppStore.generateWhatsAppUrl(
      '9545943951',
      'Hello Kasmade Data Corporation, I am visiting your website and would like to enquire about computers, products or services.'
    );
    window.open(url, '_blank');
  };

  return (
    <div className="floating-actions">
      {/* Click-to-Call on mobile */}
      <a
        href={`tel:${BUSINESS_INFO.phones[0]}`}
        className="floating-btn floating-phone"
        title={`Call Store: +91 ${BUSINESS_INFO.phones[0]}`}
      >
        <PhoneCall size={22} />
      </a>

      {/* Floating WhatsApp Action */}
      <button
        onClick={handleWhatsAppClick}
        className="floating-btn floating-whatsapp"
        title="Chat with us on WhatsApp"
      >
        <MessageSquare size={26} />
      </button>
    </div>
  );
};
