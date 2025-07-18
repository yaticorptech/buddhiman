// components/WhatsAppFloatingButton.js
import React from 'react';

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/918951193682"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '80px',
        backgroundColor: '#fff',
        color: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '28px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: 999,
        textDecoration: 'none',
        cursor: 'pointer',
        border: '3px solid #25D366'
      }}
    >
      <i className="fab fa-whatsapp"> </i>
    </a>
  );
};

export default WhatsAppFloatingButton;
