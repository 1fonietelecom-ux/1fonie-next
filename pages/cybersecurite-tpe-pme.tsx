import Head from 'next/head';

const menaces = [
  { icon: '🦠', title: 'Ransomware', desc: 'Chiffrement de vos données contre rançon. Notre EDR détecte et bloque en temps réel.' },
  { icon: '🎣', title: 'Phishing', desc: 'Emails frauduleux ciblant vos collaborateurs. UseSecure les forme à reconnaître les tentatives.' },
  { icon: '🔓', title: 'Intrusion réseau', desc: 'Accès non autorisé à votre infrastructure. Le SOC 24/7 détecte toute anomalie.' },
  { icon: '💾', title: 'Fuite de données', desc: 'Blocage clés USB et applis non autorisées. Zéro exfiltration possible.' },
  { icon: '📧', title: 'Usurpation domaine', desc: "Quelqu'un envoie des emails en se faisant passer pour vous. DMARC l'empêche." },
  { icon: '⚠️', title: 'Erreur humaine', desc: "La 1ère cause de cyberincident. UseSecure forme et teste vos équipes en continu." },
];

const packs = [
  { nom: 'Pack Essentiel', prix: '47€', unite: 'HT/poste/mois', desc: 'La base pour protéger votre entreprise', color: false, features: ['Maintenance préventive', 'EDR + Antivirus avancé', 'Supervision réseau 24/7', 'Mises à jour automatiques', 'Support ticketing', 'Formation UseSecure'] },
  { nom: 'Pack Business', prix: '87€', unite: 'HT/poste/mois', desc: 'Protection maximale + DMARC inclus', color: true, badge: '⭐ Recommandé', features: ['Tout le Pack Essentiel', 'SOC 24/7/365 Kaseya', 'Blocage applis non autorisées', 'Blocage clés USB', '✅ Protection DMARC incluse'] },
];

export default function Cybersecurite() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>Cybersécurité TPE/PME — EDR, SOC 24/7, UseSecure | 1fonie</title>
        <meta name="description" content="Protection cybersécurité complète pour TPE/PME : EDR, SOC 24/7/365 Kaseya, supervision Datto RMM, UseSecure, DMARC. Pack Essentiel 47€ ou Business 87€/poste/mois." />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1a2744 0%, #1e3460 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(77,184,232,0.2)', border: '1px solid rgba(77,184,232,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ color: '#7dcef0', fontSize: '13px', fontWeight: '600' }}>🛡️ MSP certifié — SOC Kaseya 24/7/365 — Datto RMM — UseSecure</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Cybersécurité pour<br />
            <span style={{ background: 'linear-gradient(135deg, #2aa8de, #4db8e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TPE & PME</span>
          </h1>
          <p style={{ color: '#7dcef0', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
            EDR, SOC 24/7, supervision réseau, ticketing, formation UseSecure et protection DMARC. Tout votre SI protégé à partir de 47€/poste/mois.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(77,184,232,0.5)' }}>🚀 Audit gratuit de votre sécurité</a>
            <a href="tel:0320492900" style={{ background: 'transparent', color: '#7dcef0', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(77,184,232,0.5)' }}>📞 03 20 49 29 00</a>
          </div>
        </div>
      </section>

      {/* MENACES */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1a2744', marginBottom: '12px' }}>Les menaces que nous bloquons</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>En France, 1 PME sur 2 a subi une cyberattaque en 2023</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {menaces.map((m, i) => (
              <div key={i} style={{ background: '#f0f8ff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(77,184,232,0.12)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{m.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a2744', marginBottom: '8px' }}>{m.title}</h3>
                <p style={{ color: '#4a6080', fontSize: '13px', lineHeight: '1.6' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section style={{ padding: '80px 24px', background: '#f0f8ff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1a2744', marginBottom: '12px' }}>Nos packs cybersécurité</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>Tarifs transparents — par poste — sans engagement minimum</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="grid-2-1f">
            {packs.map((p, i) => (
              <div key={i} style={{ background: p.color ? 'linear-gradient(135deg, #1a2744, #1e3460)' : '#fff', borderRadius: '20px', padding: '40px 32px', border: p.color ? '2px solid #4db8e8' : '2px solid rgba(77,184,232,0.2)', position: 'relative' }}>
                {p.badge && <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>{p.badge}</div>}
                <div style={{ color: p.color ? '#2aa8de' : '#4db8e8', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{p.nom}</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: p.color ? '#fff' : '#1a2744', marginBottom: '4px' }}>{p.prix} <span style={{ fontSize: '15px', fontWeight: '400', color: p.color ? '#7dcef0' : '#4a6080' }}>{p.unite}</span></div>
                <p style={{ color: p.color ? '#7dcef0' : '#4a6080', fontSize: '14px', marginBottom: '28px' }}>{p.desc}</p>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: p.color ? '#e9d5ff' : '#374151', fontSize: '14px' }}>
                    <span style={{ color: p.color ? '#2aa8de' : '#4db8e8', fontWeight: '700', flexShrink: 0 }}>✓</span> {f}
                  </div>
                ))}
                <a href="/#contact" style={{ display: 'block', textAlign: 'center', marginTop: '28px', padding: '14px', background: p.color ? 'linear-gradient(135deg, #4db8e8, #2aa8de)' : 'rgba(77,184,232,0.1)', color: p.color ? '#fff' : '#4db8e8', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', border: p.color ? 'none' : '2px solid rgba(77,184,232,0.3)' }}>Demander un devis</a>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:640px){.grid-2-1f{grid-template-columns:1fr !important;}}`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1a2744, #1e3460)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Audit gratuit de votre sécurité</h2>
          <p style={{ color: '#7dcef0', fontSize: '18px', marginBottom: '36px' }}>Nous analysons votre niveau de protection actuel — sans engagement</p>
          <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(77,184,232,0.5)' }}>
            🛡️ Demander mon audit gratuit
          </a>
        </div>
      </section>
    </div>
  );
}
