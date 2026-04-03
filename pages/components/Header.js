import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'linear-gradient(135deg, #1e0b3e 0%, #2d1458 100%)',
      borderBottom: '1px solid rgba(124,58,237,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(124,58,237,0.2)'
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px'
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '24px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>1FONIE</span>
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
              color: '#c084fc', textDecoration: 'none', fontSize: '14px',
              fontWeight: '500', whiteSpace: 'nowrap'
            }}>{link.label}</Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:0320492900" style={{
            color: '#a855f7', textDecoration: 'none', fontWeight: '700',
            fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap'
          }}>📞 03 20 49 29 00</a>
          <Link href="/#contact" style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff',
            padding: '9px 20px', borderRadius: '8px', textDecoration: 'none',
            fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap',
            boxShadow: '0 4px 15px rgba(124,58,237,0.4)'
          }}>Devis gratuit</Link>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: '#fff', fontSize: '24px',
            cursor: 'pointer', display: 'none', padding: '4px'
          }} className="burger-1f" aria-label="Menu">☰</button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: '#2d1458', borderTop: '1px solid rgba(124,58,237,0.3)', padding: '16px 24px' }}>
          {[
            { label: 'Services', href: '/#services' },
            { label: 'Tarifs', href: '/#tarifs' },
            { label: 'Témoignages', href: '/#temoignages' },
            { label: 'Leasing', href: '/leasing' },
            { label: 'Contact', href: '/#contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: '#c084fc', textDecoration: 'none',
              padding: '10px 0', borderBottom: '1px solid rgba(124,58,237,0.15)', fontWeight: '500'
            }}>{link.label}</Link>
          ))}
          <a href="tel:0320492900" style={{
            display: 'block', color: '#a855f7', textDecoration: 'none',
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
