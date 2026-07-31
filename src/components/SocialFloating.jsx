import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, Linkedin, Send, PhoneCall, Music2 } from 'lucide-react';

export default function SocialFloating() {
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, color: '#ff0000', url: 'https://youtube.com' },
    { name: 'Instagram', icon: Instagram, color: '#e1306c', url: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, color: '#1877f2', url: 'https://facebook.com' },
    { name: 'X / Twitter', icon: Twitter, color: '#1da1f2', url: 'https://x.com' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0a66c2', url: 'https://linkedin.com' },
    { name: 'Telegram', icon: Send, color: '#0088cc', url: 'https://telegram.org' },
    { name: 'Spotify', icon: Music2, color: '#1ed760', url: 'https://spotify.com' }
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '0.6rem 0.4rem',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {socialLinks.map((item, i) => {
        const IconComponent = item.icon;
        return (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Follow VedaTech Gurukul on ${item.name}`}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              transition: 'var(--transition)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.15)';
              e.currentTarget.style.color = item.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <IconComponent size={18} />
          </a>
        );
      })}
    </div>
  );
}
