import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

const villes: Record<string, { nom: string; region: string }> = {
  'paris': { nom: 'Paris', region: 'Île-de-France' },
  'lyon': { nom: 'Lyon', region: 'Auvergne-Rhône-Alpes' },
  'marseille': { nom: 'Marseille', region: "Provence-Alpes-Côte d'Azur" },
  'toulouse': { nom: 'Toulouse', region: 'Occitanie' },
  'nice': { nom: 'Nice', region: "Provence-Alpes-Côte d'Azur" },
  'nantes': { nom: 'Nantes', region: 'Pays de la Loire' },
  'strasbourg': { nom: 'Strasbourg', region: 'Grand Est' },
  'montpellier': { nom: 'Montpellier', region: 'Occitanie' },
  'bordeaux': { nom: 'Bordeaux', region: 'Nouvelle-Aquitaine' },
  'lille': { nom: 'Lille', region: 'Hauts-de-France' },
  'rennes': { nom: 'Rennes', region: 'Bretagne' },
  'reims': { nom: 'Reims', region: 'Grand Est' },
  'grenoble': { nom: 'Grenoble', region: 'Auvergne-Rhône-Alpes' },
  'toulon': { nom: 'Toulon', region: "Provence-Alpes-Côte d'Azur" },
  'dijon': { nom: 'Dijon', region: 'Bourgogne-Franche-Comté' },
  'angers': { nom: 'Angers', region: 'Pays de la Loire' },
  'nimes': { nom: 'Nîmes', region: 'Occitanie' },
  'le-havre': { nom: 'Le Havre', region: 'Normandie' },
  'saint-etienne': { nom: 'Saint-Étienne', region: 'Auvergne-Rhône-Alpes' },
  'villeurbanne': { nom: 'Villeurbanne', region: 'Auvergne-Rhône-Alpes' },
};

export default function CybersecuritePage({ ville, nomVille }: { ville: string; nomVille: string }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>Cybersécurité à {nomVille} — Protection TPE/PME | 1fonie</title>
        <meta name="description" content={`Expert cybersécurité à ${nomVille} : EDR, SOC 24/7, supervision réseau, UseSecure. Protection complète TPE/PME à partir de 47€/poste/mois.`} />
      </Head>

      <section style={{ background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>📍 {nomVille} — Cybersécurité TPE/PME</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            🛡️ Cybersécurité<br />
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>à {nomVille}</span>
          </h1>
          <p style={{ color: '#c084fc', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>
            1fonie protège les TPE et PME de {nomVille} contre les cyberattaques. EDR, SOC 24/7/365, supervision réseau, formation UseSecure et protection DMARC. À partir de 47€/poste/mois.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
              🚀 Audit gratuit à {nomVille}
            </a>
            <a href="tel:0320492900" style={{ background: 'transparent', color: '#c084fc', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(124,58,237,0.5)' }}>
              📞 03 20 49 29 00
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '40px', textAlign: 'center' }}>
            Nos services cybersécurité à {nomVille}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🦠', title: 'EDR + Antivirus', desc: 'Protection endpoint avancée contre ransomwares et malwares. Détection en temps réel.' },
              { icon: '👁️', title: 'SOC 24/7/365', desc: 'Centre opérationnel de sécurité qui surveille votre SI en permanence.' },
              { icon: '📡', title: 'Supervision réseau', desc: 'Monitoring continu de votre infrastructure. Alertes avant que la panne arrive.' },
              { icon: '🎓', title: 'Formation UseSecure', desc: 'Quizz et formations pour vos équipes. Le facteur humain maîtrisé.' },
              { icon: '🔒', title: 'Blocage applis', desc: 'Blocage des applications non autorisées et des clés USB (Pack Business).' },
              { icon: '📧', title: 'Protection DMARC', desc: 'Empêche l\'usurpation de votre domaine email. Inclus dans le Pack Business.' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 15px rgba(124,58,237,0.06)' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e0b3e', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e0b3e', marginBottom: '24px' }}>
            1fonie intervient aussi dans ces villes
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {Object.entries(villes).filter(([slug]) => slug !== ville).slice(0, 12).map(([slug, v]) => (
              <a key={slug} href={`/cybersecurite-${slug}`} style={{ background: '#faf5ff', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '50px', padding: '8px 16px', fontSize: '13px', color: '#7c3aed', textDecoration: 'none', fontWeight: '500' }}>
                {v.nom}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(villes).map(ville => ({ params: { ville } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ville = params?.ville as string;
  const nomVille = villes[ville]?.nom || ville;
  return { props: { ville, nomVille } };
};
