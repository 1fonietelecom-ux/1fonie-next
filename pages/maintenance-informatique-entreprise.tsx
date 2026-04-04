import Head from 'next/head';

const services = [
  { icon: '🖥️', title: 'Supervision 24/7', desc: 'Monitoring continu via Datto RMM : postes, serveurs, bornes WiFi, switches, routeurs et firewall. Alertes automatiques avant la panne.' },
  { icon: '🔧', title: 'Maintenance préventive', desc: 'Interventions planifiées, nettoyage des systèmes, vérification des sauvegardes. Zéro mauvaise surprise.' },
  { icon: '⚡', title: 'Télémaintenance', desc: "Prise en main à distance sécurisée via Kaseya 365. Résolution de 90% des incidents sans déplacement, en quelques minutes." },
  { icon: '🎫', title: 'Ticketing', desc: 'Vos utilisateurs ouvrent un ticket, nous traitons. Historique complet, SLA garanti. Support 9h-17h du lundi au vendredi.' },
  { icon: '🛡️', title: 'EDR + Antivirus', desc: 'Protection endpoint avancée contre ransomwares et malwares. Mise à jour automatique. Sauvegardes toutes les 2h.' },
  { icon: '🎓', title: 'Formation UseSecure', desc: "Quizz et formations cybersécurité pour vos équipes. L'erreur humaine, premier vecteur d'attaque, maîtrisée en continu." },
];

const packs = [
  { nom: 'Pack Essentiel', prix: '47€', unite: 'HT/poste/mois', desc: 'La protection de base pour votre entreprise', color: false, features: ['Maintenance préventive', 'EDR + Antivirus avancé', 'Supervision Datto RMM 24/7', 'Mises à jour automatiques', 'Support ticketing 9h-17h L-V', 'Formation UseSecure'] },
  { nom: 'Pack Business', prix: '87€', unite: 'HT/poste/mois', desc: 'Protection maximale + DMARC inclus', color: true, badge: '⭐ Recommandé', features: ['Tout le Pack Essentiel', 'SOC 24/7/365 Kaseya', 'Blocage applis non autorisées', 'Blocage clés USB', '✅ Protection DMARC incluse'] },
];

export default function Maintenance() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>Maintenance informatique préventive TPE/PME | 1fonie MSP</title>
        <meta name="description" content="MSP certifié : supervision Datto RMM, télémaintenance Kaseya 365, EDR, ticketing 9h-17h, sauvegardes toutes les 2h. Pack Essentiel 47€ ou Business 87€/poste/mois." />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>🔧 MSP — Datto RMM — Kaseya 365 — UseSecure</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Maintenance informatique<br />
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>préventive pour TPE/PME</span>
          </h1>
          <p style={{ color: '#c084fc', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
            Supervision Datto RMM, EDR, ticketing, télémaintenance Kaseya 365 et formation UseSecure. Votre parc informatique entre de bonnes mains — à partir de 47€/poste/mois.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>🚀 Demander un devis</a>
            <a href="tel:0320492900" style={{ background: 'transparent', color: '#c084fc', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(124,58,237,0.5)' }}>📞 03 20 49 29 00</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Ce qui est inclus</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>Un seul contrat, une seule facture, zéro surprise</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 15px rgba(124,58,237,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1e0b3e', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Nos packs maintenance</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>Par poste, par mois — leasing possible sur le matériel</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="grid-2-1f">
            {packs.map((p, i) => (
              <div key={i} style={{ background: p.color ? 'linear-gradient(135deg, #1e0b3e, #2d1458)' : '#faf5ff', borderRadius: '20px', padding: '40px 32px', border: p.color ? '2px solid #7c3aed' : '2px solid rgba(124,58,237,0.2)', position: 'relative' }}>
                {p.badge && <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>{p.badge}</div>}
                <div style={{ color: p.color ? '#a855f7' : '#7c3aed', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{p.nom}</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: p.color ? '#fff' : '#1e0b3e', marginBottom: '4px' }}>{p.prix} <span style={{ fontSize: '15px', fontWeight: '400', color: p.color ? '#c084fc' : '#6b7280' }}>{p.unite}</span></div>
                <p style={{ color: p.color ? '#c084fc' : '#6b7280', fontSize: '14px', marginBottom: '28px' }}>{p.desc}</p>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: p.color ? '#e9d5ff' : '#374151', fontSize: '14px' }}>
                    <span style={{ color: p.color ? '#a855f7' : '#7c3aed', fontWeight: '700', flexShrink: 0 }}>✓</span> {f}
                  </div>
                ))}
                <a href="/#contact" style={{ display: 'block', textAlign: 'center', marginTop: '28px', padding: '14px', background: p.color ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'rgba(124,58,237,0.1)', color: p.color ? '#fff' : '#7c3aed', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', border: p.color ? 'none' : '2px solid rgba(124,58,237,0.3)' }}>Demander un devis</a>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:640px){.grid-2-1f{grid-template-columns:1fr !important;}}`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1e0b3e, #2d1458)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Audit de votre parc informatique</h2>
          <p style={{ color: '#c084fc', fontSize: '18px', marginBottom: '36px' }}>Gratuit et sans engagement — réponse sous 24h</p>
          <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
            🔧 Demander mon audit gratuit
          </a>
        </div>
      </section>
    </div>
  );
}
