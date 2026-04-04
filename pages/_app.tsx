import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: 'linear-gradient(135deg, #1e0b3e 0%, #2d1458 100%)', borderBottom: '1px solid rgba(124,58,237,0.3)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(124,58,237,0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
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
            <Link key={link.href} href={link.href} style={{ color: '#c084fc', textDecoration: 'none', fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap' }}>{link.label}</Link>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:0320492900" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>📞 03 20 49 29 00</a>
          <Link href="/#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '9px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>Devis gratuit</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', display: 'none', padding: '4px' }} className="burger-1f" aria-label="Menu">☰</button>
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
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#c084fc', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid rgba(124,58,237,0.15)', fontWeight: '500' }}>{link.label}</Link>
          ))}
          <a href="tel:0320492900" style={{ display: 'block', color: '#a855f7', textDecoration: 'none', padding: '12px 0', fontWeight: '700' }}>📞 03 20 49 29 00</a>
        </div>
      )}
      <style>{`
        @media (max-width: 900px) { .nav-desktop-1f { display: none !important; } .burger-1f { display: block !important; } }
      `}</style>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#0f0520', padding: '48px 24px 24px', borderTop: '1px solid rgba(124,58,237,0.2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>1FONIE</div>
            <p style={{ color: '#c084fc', fontSize: '13px', lineHeight: '1.6' }}>Expert IT & téléphonie pour TPE/PME — France entière</p>
            <a href="tel:0320492900" style={{ display: 'block', color: '#a855f7', fontWeight: '700', marginTop: '12px', textDecoration: 'none' }}>📞 03 20 49 29 00</a>
            <a href="mailto:contact@1fonie.fr" style={{ display: 'block', color: '#c084fc', fontSize: '13px', marginTop: '4px', textDecoration: 'none' }}>contact@1fonie.fr</a>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', marginBottom: '16px' }}>Services</div>
            {[
              { label: 'Téléphonie IP Yealink', href: '/telephonie-entreprise' },
              { label: 'Cybersécurité TPE/PME', href: '/cybersecurite-tpe-pme' },
              { label: 'Réseau & WiFi Pro', href: '/reseau-wifi-professionnel' },
              { label: 'Maintenance IT', href: '/maintenance-informatique-entreprise' },
              { label: 'Leasing', href: '/leasing' },
            ].map(l => <a key={l.href} href={l.href} style={{ display: 'block', color: '#c084fc', fontSize: '13px', marginBottom: '8px', textDecoration: 'none' }}>{l.label}</a>)}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', marginBottom: '16px' }}>Villes principales</div>
            {['paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'lille', 'nantes', 'strasbourg', 'montpellier', 'nice'].map(v => (
              <a key={v} href={`/prestataire-informatique-${v}`} style={{ display: 'block', color: '#c084fc', fontSize: '13px', marginBottom: '6px', textDecoration: 'none', textTransform: 'capitalize' }}>{v}</a>
            ))}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', marginBottom: '16px' }}>Départements</div>
            {[
              { slug: 'rhone', nom: 'Rhône' },
              { slug: 'nord', nom: 'Nord' },
              { slug: 'gironde', nom: 'Gironde' },
              { slug: 'herault', nom: 'Hérault' },
              { slug: 'haute-garonne', nom: 'Haute-Garonne' },
              { slug: 'bouches-du-rhone', nom: 'Bouches-du-Rhône' },
              { slug: 'hauts-de-seine', nom: 'Hauts-de-Seine' },
              { slug: 'seine-saint-denis', nom: 'Seine-Saint-Denis' },
              { slug: 'val-de-marne', nom: 'Val-de-Marne' },
              { slug: 'yvelines', nom: 'Yvelines' },
            ].map(d => (
              <a key={d.slug} href={`/prestataire-informatique-departement-${d.slug}`} style={{ display: 'block', color: '#c084fc', fontSize: '13px', marginBottom: '6px', textDecoration: 'none' }}>{d.nom}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(124,58,237,0.2)', paddingTop: '24px', textAlign: 'center', color: '#6b21a8', fontSize: '12px' }}>
          © 2025 1FONIE — Nord VoIP SASU — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
