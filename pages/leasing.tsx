import Head from 'next/head';

const avantages = [
  { icon: '💰', title: 'Préservez votre trésorerie', desc: "Pas de décaissement important en une seule fois. Vous payez un loyer mensuel fixe et prévisible, votre cash reste disponible pour votre activité." },
  { icon: '📊', title: "Pas d'amortissement comptable", desc: "Le matériel n'apparaît pas à votre bilan. Les loyers sont des charges déductibles à 100% de votre résultat imposable." },
  { icon: '🔄', title: 'Matériel toujours à jour', desc: "À la fin du contrat (36 mois), vous renouvelez votre parc. Vous bénéficiez toujours des dernières technologies sans reste à charge." },
  { icon: '🛡️', title: 'Budget maîtrisé', desc: "Un loyer mensuel fixe pour votre matériel IT. Zéro mauvaise surprise, zéro facture imprévue." },
  { icon: '✅', title: 'Éligible sans apport', desc: "Pas d'apport initial requis. Le dossier est traité rapidement par nos partenaires Grenke et Investitel." },
  { icon: '📝', title: 'Processus simple', desc: "Vous validez votre pré-commande sur notre site. Nous vérifions votre finançabilité gratuitement. Signature électronique du contrat en 48h." },
];

const etapes = [
  { num: '1', title: 'Pré-commande en ligne', desc: 'Vous remplissez le formulaire sur notre site avec votre besoin.' },
  { num: '2', title: 'Vérification finançabilité', desc: 'Nous soumettons votre dossier à Grenke ou Investitel. Réponse sous 24-48h.' },
  { num: '3', title: 'Signature électronique', desc: 'Vous signez le devis 1fonie et le contrat de leasing en ligne.' },
  { num: '4', title: 'Installation', desc: 'Livraison et mise en service du matériel. Votre équipe est formée.' },
];

export default function Leasing() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>Leasing informatique TPE/PME — Grenke & Investitel | 1fonie</title>
        <meta name="description" content="Équipez votre entreprise sans immobiliser votre trésorerie. Téléphones Yealink, PC, serveurs, firewall en location financière 36 mois. Grenke & Investitel — zéro apport." />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '28px' }}>
            <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>💳 Location financière 36 mois — Grenke & Investitel</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '24px' }}>
            Équipez votre entreprise<br />
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>sans immobiliser votre trésorerie</span>
          </h1>
          <p style={{ color: '#c084fc', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
            Téléphones Yealink, PC, serveurs, firewall, switches — tout votre matériel IT en location financière. Un loyer mensuel fixe, des charges 100% déductibles.
          </p>
          <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
            🚀 Vérifier ma finançabilité gratuitement
          </a>
        </div>
      </section>

      {/* AVANTAGES */}
      <section style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Pourquoi choisir le leasing ?</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>6 bonnes raisons de ne pas acheter votre matériel IT</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {avantages.map((a, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '32px 24px', border: '1px solid rgba(124,58,237,0.15)', boxShadow: '0 4px 20px rgba(124,58,237,0.06)' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{a.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e0b3e', marginBottom: '12px' }}>{a.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '48px', textAlign: 'center' }}>Achat comptant vs Leasing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="grid-2-1f">
            <div style={{ background: '#f9fafb', borderRadius: '16px', padding: '32px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#374151', marginBottom: '24px', textAlign: 'center' }}>💸 Achat comptant</h3>
              {['Décaissement immédiat important', 'Immobilise votre trésorerie', 'Amortissement sur 3-5 ans', 'Matériel obsolète en fin de vie', 'Pas de déductibilité immédiate'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#6b7280', fontSize: '14px' }}>
                  <span style={{ color: '#ef4444', fontWeight: '700', flexShrink: 0 }}>✗</span> {item}
                </div>
              ))}
            </div>
            <div style={{ background: 'linear-gradient(135deg, #1e0b3e, #2d1458)', borderRadius: '16px', padding: '32px', border: '2px solid #7c3aed' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '24px', textAlign: 'center' }}>✅ Leasing 1fonie</h3>
              {['Zéro apport, loyer mensuel fixe', 'Trésorerie préservée', 'Charges déductibles à 100%', 'Renouvellement automatique à 36 mois', 'Déductibilité immédiate'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#e9d5ff', fontSize: '14px' }}>
                  <span style={{ color: '#a855f7', fontWeight: '700', flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:600px){.grid-2-1f{grid-template-columns:1fr !important;}}`}</style>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section style={{ padding: '60px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Nos partenaires financiers</h2>
          <p style={{ color: '#6b21a8', marginBottom: '40px' }}>Des organismes spécialisés en financement IT</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="grid-2-1f">
            {[
              { name: 'Grenke', desc: 'Leader européen du leasing IT. Réponse rapide, conditions souples pour les TPE/PME.' },
              { name: 'Investitel', desc: 'Spécialiste de la location financière télécom et informatique en France.' },
            ].map(p => (
              <div key={p.name} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(124,58,237,0.2)', boxShadow: '0 4px 20px rgba(124,58,237,0.06)' }}>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#7c3aed', marginBottom: '12px' }}>{p.name}</div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px' }}>Comment ça marche ?</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>4 étapes simples pour être équipé</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {etapes.map((e, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '20px', fontWeight: '800', color: '#fff' }}>{e.num}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e0b3e', marginBottom: '8px' }}>{e.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1e0b3e, #2d1458)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Prêt à équiper votre entreprise ?</h2>
          <p style={{ color: '#c084fc', fontSize: '18px', marginBottom: '36px' }}>Vérification de finançabilité gratuite et sans engagement — réponse sous 24h</p>
          <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
            🚀 Demander mon devis leasing
          </a>
        </div>
      </section>
    </div>
  );
}
