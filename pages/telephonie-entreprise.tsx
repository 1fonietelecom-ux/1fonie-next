import Head from 'next/head';

const gammeYealink = [
  { serie: 'T74W', usage: 'Entrée de gamme', desc: 'Réceptionniste, secrétariat, commercial. Écran couleur, WiFi intégré.', prix: 'À partir de 8€/mois' },
  { serie: 'T77U', usage: 'Milieu de gamme', desc: 'Écran couleur tactile, touches programmables — manager, responsable.', prix: 'À partir de 10€/mois' },
  { serie: 'T85W', usage: 'Haut de gamme', desc: 'Grand écran, Wi-Fi, Bluetooth — cadres, direction.', prix: 'À partir de 12€/mois' },
  { serie: 'T87W', usage: 'Premium', desc: 'Écran tactile HD couleur, Wi-Fi, Bluetooth — direction générale.', prix: 'À partir de 14€/mois' },
  { serie: 'T88W Pro', usage: 'Ultra Premium', desc: 'Écran tactile 7", Android, caméra — salle de réunion, DG.', prix: 'À partir de 18€/mois' },
  { serie: 'W59R', usage: 'Sans fil DECT', desc: 'Robuste, entrepôt, atelier, commerce, terrain.', prix: 'À partir de 10€/mois' },
  { serie: 'W78P', usage: 'Sans fil DECT+', desc: "Multi-combinés jusqu'à 10 postes — PME, boutiques, cliniques.", prix: 'À partir de 10€/mois' },
];

const abonnements = [
  { type: 'Au compteur', prix: '5€ HT/ligne/mois', desc: '+ consommation réelle. Idéal pour les lignes peu utilisées.', icon: '📊' },
  { type: 'Illimité', prix: '14€ HT/ligne/mois', desc: 'Appels illimités en France (fair use). Idéal pour les postes actifs.', icon: '♾️' },
];

const fonctionnalites = [
  'Standard virtuel Centrex cloud', 'Serveur vocal interactif (SVI)', "File d'attente et musique d'attente",
  'Renvoi d\'appel et double appel', 'Messagerie vocale cloud', 'Conférence téléphonique',
  'Enregistrement des appels', 'Application mobile softphone', 'Numéro géographique au choix',
  'Formation utilisateurs incluse',
];

export default function Telephonie() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>Téléphonie d'entreprise IP Yealink pour TPE/PME | 1fonie</title>
        <meta name="description" content="Standards Yealink T74W T77U T85W T87W T88W Pro W59R W78P. Centrex cloud, SVI, abonnements lignes à partir de 5€/mois. Revendeur officiel Yealink — 03 20 49 29 00" />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid-1f">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>📞 Revendeur officiel Yealink — France entière</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
              Téléphonie IP<br />
              <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Yealink pour entreprises</span>
            </h1>
            <p style={{ color: '#c084fc', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>
              Standards Centrex cloud, téléphones IP fixes et sans fil, SVI, softphone mobile. Tout votre système téléphonique géré par un seul expert.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>🚀 Demander un devis</a>
              <a href="tel:0320492900" style={{ background: 'transparent', color: '#c084fc', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(124,58,237,0.5)' }}>📞 03 20 49 29 00</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[{ val: '10€', label: 'par ligne/mois leasing' }, { val: '5€', label: 'ligne au compteur' }, { val: '14€', label: 'ligne illimitée' }, { val: '36 mois', label: 'leasing sans apport' }].map(s => (
              <div key={s.val} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#a855f7', marginBottom: '4px' }}>{s.val}</div>
                <div style={{ color: '#c084fc', fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-grid-1f{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* GAMME YEALINK */}
      <section style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Gamme Yealink</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>Séries T7x, T8x fixes — W59R & W78P sans fil</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {gammeYealink.map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid rgba(124,58,237,0.15)', boxShadow: '0 4px 15px rgba(124,58,237,0.06)' }}>
                <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '50px', display: 'inline-block', marginBottom: '10px' }}>{t.usage}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e0b3e', marginBottom: '6px' }}>{t.serie}</h3>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>{t.desc}</p>
                <div style={{ color: '#7c3aed', fontWeight: '700', fontSize: '14px' }}>{t.prix}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '13px', marginTop: '24px' }}>* Leasing 36 mois Grenke/Investitel — sans apport — charges 100% déductibles</p>
        </div>
      </section>

      {/* ABONNEMENTS */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Abonnements ligne</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>Un abonnement par téléphone, au choix</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="grid-2-1f">
            {abonnements.map((a, i) => (
              <div key={i} style={{ background: i === 1 ? 'linear-gradient(135deg, #1e0b3e, #2d1458)' : '#faf5ff', borderRadius: '20px', padding: '36px', border: i === 1 ? '2px solid #7c3aed' : '1px solid rgba(124,58,237,0.2)' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{a.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: i === 1 ? '#fff' : '#1e0b3e', marginBottom: '8px' }}>{a.type}</h3>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#a855f7', marginBottom: '12px' }}>{a.prix}</div>
                <p style={{ color: i === 1 ? '#c084fc' : '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>{a.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:600px){.grid-2-1f{grid-template-columns:1fr !important;}}`}</style>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Fonctionnalités incluses</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {fonctionnalites.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(124,58,237,0.12)' }}>
                <span style={{ color: '#7c3aed', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#374151', fontSize: '14px' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1e0b3e, #2d1458)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Demandez votre devis téléphonie</h2>
          <p style={{ color: '#c084fc', fontSize: '18px', marginBottom: '36px' }}>Réponse sous 24h — installation partout en France</p>
          <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
            📞 Demander mon devis téléphonie
          </a>
        </div>
      </section>
    </div>
  );
}
