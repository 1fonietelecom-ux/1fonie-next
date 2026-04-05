import Head from 'next/head';

const solutions = [
  { icon: '🌐', title: 'Internet FTTH Pro', desc: 'Fibre optique professionnelle avec IP fixe et backup 4G automatique (50Go). Jamais de coupure.', prix: '65€ HT/mois' },
  { icon: '🔒', title: 'Firewall géré', desc: 'Sécurité périmétrique, VPN, QoS téléphonie. Configuration et supervision incluses.', prix: '60€ HT/mois' },
  { icon: '📡', title: 'WiFi 6 & 7 Pro', desc: 'Bornes WiFi managées, couverture optimale, VLAN séparé invités/salariés.', prix: 'Sur devis' },
  { icon: '🔗', title: 'VPN Multi-sites', desc: 'Connectez vos sites distants et télétravailleurs en toute sécurité.', prix: '25€ HT/site/mois' },
  { icon: '🗄️', title: 'Baie de brassage', desc: 'Installation et câblage structuré catégorie 6A. Organisation et étiquetage complet.', prix: 'Sur devis' },
  { icon: '⚙️', title: 'Switches managés', desc: 'Gigabit partout, PoE+ pour téléphones et caméras, segmentation VLAN.', prix: 'Leasing 36 mois' },
];

const avantages = [
  { icon: '⚡', title: 'Backup 4G automatique', desc: 'En cas de coupure fibre, votre connexion bascule automatiquement sur 4G en moins de 60 secondes.' },
  { icon: '🔍', title: 'Monitoring 24/7', desc: 'Surveillance continue de votre réseau. Alertes automatiques avant que vous ne remarquiez un problème.' },
  { icon: '📊', title: 'QoS téléphonie', desc: 'Priorité garantie aux appels VoIP. Zéro latence, zéro coupure sur vos communications.' },
  { icon: '🛡️', title: 'Segmentation VLAN', desc: 'Isolation des équipements sensibles. Vos données comptables ne transitent pas sur le même réseau que les invités.' },
];

export default function Reseau() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>Réseau & Internet professionnel pour TPE/PME | 1fonie</title>
        <meta name="description" content="FTTH Pro 65€/mois avec backup 4G, WiFi 6/7, firewall géré, VPN multi-sites. Réseau professionnel supervisé 24/7 pour TPE/PME — Devis gratuit 03 20 49 29 00" />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1a2744 0%, #1e3460 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(77,184,232,0.2)', border: '1px solid rgba(77,184,232,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ color: '#7dcef0', fontSize: '13px', fontWeight: '600' }}>📡 FTTH Pro + backup 4G — WiFi 6/7 — VPN — Firewall</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            Réseau & Internet<br />
            <span style={{ background: 'linear-gradient(135deg, #2aa8de, #4db8e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>professionnel pour TPE/PME</span>
          </h1>
          <p style={{ color: '#7dcef0', fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
            Fibre pro avec backup 4G automatique, WiFi 6/7, firewall géré, VPN multi-sites. Une infrastructure réseau fiable, sécurisée et supervisée 24/7.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(77,184,232,0.5)' }}>
              🚀 Demander un audit réseau gratuit
            </a>
            <a href="tel:0320492900" style={{ background: 'transparent', color: '#7dcef0', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(77,184,232,0.5)' }}>
              📞 03 20 49 29 00
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '48px', maxWidth: '600px', margin: '48px auto 0' }}>
            {[
              { val: '65€', label: 'FTTH Pro + backup 4G/mois' },
              { val: '25€', label: 'VPN/site/mois' },
              { val: '24/7', label: 'supervision réseau' },
            ].map(s => (
              <div key={s.val} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(77,184,232,0.25)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#2aa8de', marginBottom: '4px' }}>{s.val}</div>
                <div style={{ color: '#7dcef0', fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section style={{ padding: '80px 24px', background: '#f0f8ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1a2744', marginBottom: '12px' }}>Nos solutions réseau</h2>
            <p style={{ color: '#6b21a8', fontSize: '17px' }}>Tout votre réseau géré par un seul prestataire</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {solutions.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(77,184,232,0.12)', boxShadow: '0 4px 15px rgba(77,184,232,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: '#4a6080', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>{s.desc}</p>
                <div style={{ color: '#4db8e8', fontWeight: '700', fontSize: '14px' }}>{s.prix}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#1a2744', marginBottom: '12px' }}>Pourquoi un réseau pro managé ?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {avantages.map((a, i) => (
              <div key={i} style={{ background: '#f0f8ff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(77,184,232,0.12)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{a.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a2744', marginBottom: '8px' }}>{a.title}</h3>
                <p style={{ color: '#4a6080', fontSize: '13px', lineHeight: '1.6' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1a2744, #1e3460)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Audit réseau gratuit
          </h2>
          <p style={{ color: '#7dcef0', fontSize: '18px', marginBottom: '36px' }}>
            Nous analysons votre infrastructure et vous proposons un plan d'amélioration — sans engagement
          </p>
          <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(77,184,232,0.5)' }}>
            📡 Demander mon audit réseau
          </a>
        </div>
      </section>
    </div>
  );
}
