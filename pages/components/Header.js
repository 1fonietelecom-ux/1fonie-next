import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'linear-gradient(135deg, #1a2744 0%, #1e3460 100%)',
      borderBottom: '1px solid rgba(77,184,232,0.3)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 9999,
      boxShadow: '0 2px 20px rgba(26,39,68,0.4)'
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px'
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo-blanc.png" alt="1fonie" style={{ height: '36px', objectFit: 'contain' }} />
        </Link>

        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-desktop-1f">
          {[
            { label: 'Services', href: '/#services' },
            { label: 'Tarifs', href: '/#tarifs' },
            { label: 'Témoignages', href: '/#temoignages' },
            { label: 'Leasing', href: '/leasing' },
            { label: 'Contact', href: '/#contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              color: '#7dcef0', textDecoration: 'none', fontSize: '14px',
              fontWeight: '500', whiteSpace: 'nowrap'
            }}>{link.label}</Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:0320492900" style={{
            color: '#4db8e8', textDecoration: 'none', fontWeight: '700',
            fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap'
          }}>📞 03 20 49 29 00</a>
          <Link href="/#contact" style={{
            background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff',
            padding: '9px 20px', borderRadius: '8px', textDecoration: 'none',
            fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap',
            boxShadow: '0 4px 15px rgba(77,184,232,0.3)'
          }}>Devis gratuit</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: '#fff', fontSize: '24px',
            cursor: 'pointer', display: 'none', padding: '4px'
          }} className="burger-1f" aria-label="Menu">☰</button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: '#1e3460', borderTop: '1px solid rgba(77,184,232,0.2)', padding: '16px 24px' }}>
          {[
            { label: 'Services', href: '/#services' },
            { label: 'Tarifs', href: '/#tarifs' },
            { label: 'Témoignages', href: '/#temoignages' },
            { label: 'Leasing', href: '/leasing' },
            { label: 'Contact', href: '/#contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: '#7dcef0', textDecoration: 'none',
              padding: '10px 0', borderBottom: '1px solid rgba(77,184,232,0.15)', fontWeight: '500'
            }}>{link.label}</Link>
          ))}
          <a href="tel:0320492900" style={{
            display: 'block', color: '#4db8e8', textDecoration: 'none',
            padding: '12px 0', fontWeight: '700', fontSize: '16px'
          }}>📞 03 20 49 29 00</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-1f { display: none !important; }
          .burger-1f { display: block !important; }
        }
      `}</style>
    </header>
  );
}
