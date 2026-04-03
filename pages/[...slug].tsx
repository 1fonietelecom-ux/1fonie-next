import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

const villes: Record<string, string> = {
  'paris': 'Paris', 'lyon': 'Lyon', 'marseille': 'Marseille',
  'toulouse': 'Toulouse', 'nice': 'Nice', 'nantes': 'Nantes',
  'strasbourg': 'Strasbourg', 'montpellier': 'Montpellier',
  'bordeaux': 'Bordeaux', 'lille': 'Lille', 'rennes': 'Rennes',
  'reims': 'Reims', 'le-havre': 'Le Havre', 'saint-etienne': 'Saint-Étienne',
  'toulon': 'Toulon', 'grenoble': 'Grenoble', 'dijon': 'Dijon',
  'angers': 'Angers', 'nimes': 'Nîmes', 'villeurbanne': 'Villeurbanne',
  'clermont-ferrand': 'Clermont-Ferrand', 'le-mans': 'Le Mans',
  'aix-en-provence': 'Aix-en-Provence', 'brest': 'Brest', 'tours': 'Tours',
  'amiens': 'Amiens', 'limoges': 'Limoges', 'annecy': 'Annecy',
  'perpignan': 'Perpignan', 'boulogne-billancourt': 'Boulogne-Billancourt',
  'metz': 'Metz', 'besancon': 'Besançon', 'orleans': 'Orléans',
  'rouen': 'Rouen', 'mulhouse': 'Mulhouse', 'caen': 'Caen',
  'nancy': 'Nancy', 'argenteuil': 'Argenteuil', 'montreuil': 'Montreuil',
  'roubaix': 'Roubaix', 'tourcoing': 'Tourcoing', 'dunkerque': 'Dunkerque',
  'avignon': 'Avignon', 'nanterre': 'Nanterre', 'pau': 'Pau',
  'poitiers': 'Poitiers', 'versailles': 'Versailles', 'colombes': 'Colombes',
  'aubervilliers': 'Aubervilliers', 'courbevoie': 'Courbevoie',
  'la-rochelle': 'La Rochelle', 'antibes': 'Antibes', 'cannes': 'Cannes',
  'rueil-malmaison': 'Rueil-Malmaison', 'calais': 'Calais',
  'merignac': 'Mérignac', 'saint-nazaire': 'Saint-Nazaire',
  'colmar': 'Colmar', 'valenciennes': 'Valenciennes', 'beziers': 'Béziers',
  'bourges': 'Bourges', 'quimper': 'Quimper', 'troyes': 'Troyes',
  'lorient': 'Lorient', 'issy-les-moulineaux': 'Issy-les-Moulineaux',
  'levallois-perret': 'Levallois-Perret', 'montrouge': 'Montrouge',
  'pessac': 'Pessac', 'cergy': 'Cergy', 'drancy': 'Drancy',
  'valence': 'Valence', 'chambery': 'Chambéry', 'niort': 'Niort',
  'bayonne': 'Bayonne', 'vannes': 'Vannes', 'hyeres': 'Hyères',
  'montauban': 'Montauban', 'cherbourg': 'Cherbourg',
  'neuilly-sur-seine': 'Neuilly-sur-Seine', 'clichy': 'Clichy',
  'saint-denis': 'Saint-Denis', 'ajaccio': 'Ajaccio', 'belfort': 'Belfort',
  'brive-la-gaillarde': 'Brive-la-Gaillarde', 'saint-malo': 'Saint-Malo',
  'angouleme': 'Angoulême', 'carcassonne': 'Carcassonne',
  'roanne': 'Roanne', 'cholet': 'Cholet', 'thionville': 'Thionville',
  'laval': 'Laval', 'meaux': 'Meaux', 'albi': 'Albi',
  'alfortville': 'Alfortville', 'martigues': 'Martigues',
  'auxerre': 'Auxerre', 'evreux': 'Évreux', 'chartres': 'Chartres',
  'narbonne': 'Narbonne', 'saint-ouen': 'Saint-Ouen', 'chelles': 'Chelles',
  'bobigny': 'Bobigny', 'frejus': 'Fréjus', 'mantes-la-jolie': 'Mantes-la-Jolie',
  'ivry-sur-seine': 'Ivry-sur-Seine', 'vitry-sur-seine': 'Vitry-sur-Seine',
  'evry': 'Évry', 'antony': 'Antony', 'epinay-sur-seine': 'Épinay-sur-Seine',
  'pantin': 'Pantin', 'poissy': 'Poissy', 'sartrouville': 'Sartrouville',
  'la-courneuve': 'La Courneuve', 'sarcelles': 'Sarcelles',
  'fontenay-sous-bois': 'Fontenay-sous-Bois', 'massy': 'Massy',
  'arles': 'Arles', 'clamart': 'Clamart', 'vincennes': 'Vincennes',
  'villejuif': 'Villejuif', 'epinal': 'Épinal', 'saint-brieuc': 'Saint-Brieuc',
  'montlucon': 'Montluçon', 'bondy': 'Bondy', 'saint-quentin': 'Saint-Quentin',
  'noisy-le-grand': 'Noisy-le-Grand', 'salon-de-provence': 'Salon-de-Provence',
  'gagny': 'Gagny', 'boulogne-sur-mer': 'Boulogne-sur-Mer',
  'maisons-alfort': 'Maisons-Alfort', 'caluire-et-cuire': 'Caluire-et-Cuire',
  'asnieres-sur-seine': 'Asnières-sur-Seine', 'champigny-sur-marne': 'Champigny-sur-Marne',
  'saint-maur-des-fosses': 'Saint-Maur-des-Fossés', 'nanterre-la-folie': 'Nanterre',
  'creteil': 'Créteil', 'la-seyne-sur-mer': 'La Seyne-sur-Mer',
  'villeneuve-d-ascq': "Villeneuve-d'Ascq",
};

const services = ['telephonie-entreprise', 'cybersecurite', 'maintenance-informatique', 'prestataire-informatique'];

const serviceConfig: Record<string, { label: string; icon: string; desc: string }> = {
  'telephonie-entreprise': { label: 'Téléphonie d\'entreprise', icon: '📞', desc: 'Standards Yealink, Centrex cloud, SVI. Installation et formation sur site.' },
  'cybersecurite': { label: 'Cybersécurité', icon: '🛡️', desc: 'EDR, SOC 24/7, supervision, UseSecure. Protection complète de votre SI.' },
  'maintenance-informatique': { label: 'Maintenance informatique', icon: '🔧', desc: 'Télémaintenance, ticketing, mises à jour. Votre parc géré en continu.' },
  'prestataire-informatique': { label: 'Prestataire informatique', icon: '💻', desc: 'Téléphonie, cybersécurité, réseau, maintenance. Un seul expert pour tout.' },
};

interface Props { service: string; ville: string; nomVille: string; }

export default function CityPage({ service, ville, nomVille }: Props) {
  const config = serviceConfig[service];
  if (!config) return <div>Page non trouvée</div>;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>{config.label} à {nomVille} — TPE/PME | 1fonie</title>
        <meta name="description" content={`Expert ${config.label.toLowerCase()} à ${nomVille} pour TPE/PME. ${config.desc} Devis gratuit — 03 20 49 29 00`} />
      </Head>

      <section style={{ background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>📍 {nomVille} — {config.label}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            {config.icon} {config.label}<br />
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>à {nomVille}</span>
          </h1>
          <p style={{ color: '#c084fc', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>
            1fonie accompagne les TPE et PME de {nomVille} en {config.label.toLowerCase()}. {config.desc}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
              🚀 Devis gratuit à {nomVille}
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
            Nos services à {nomVille}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📞', title: `Téléphonie IP à ${nomVille}`, desc: 'Standards Yealink, Centrex cloud, SVI.', href: `/telephonie-entreprise-${ville}` },
              { icon: '🛡️', title: `Cybersécurité à ${nomVille}`, desc: 'EDR, SOC 24/7, supervision, UseSecure.', href: `/cybersecurite-${ville}` },
              { icon: '🔧', title: `Maintenance IT à ${nomVille}`, desc: 'Télémaintenance, ticketing, mises à jour.', href: `/maintenance-informatique-${ville}` },
              { icon: '🌐', title: `Réseau & Fibre à ${nomVille}`, desc: 'FTTH Pro 65€/mois, WiFi 6/7, firewall.', href: '/reseau-wifi-professionnel' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 15px rgba(124,58,237,0.06)' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e0b3e', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>{s.desc}</p>
                  <span style={{ color: '#7c3aed', fontWeight: '600', fontSize: '13px' }}>En savoir plus →</span>
                </div>
              </a>
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
            {Object.entries(villes).filter(([slug]) => slug !== ville).slice(0, 15).map(([slug, nom]) => (
              <a key={slug} href={`/${service}-${slug}`} style={{ background: '#faf5ff', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '50px', padding: '8px 16px', fontSize: '13px', color: '#7c3aed', textDecoration: 'none', fontWeight: '500' }}>
                {nom}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string[] } }[] = [];
  services.forEach(service => {
    Object.keys(villes).forEach(ville => {
      paths.push({ params: { slug: [`${service}-${ville}`] } });
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugFull = (params?.slug as string[])?.[0] || '';
  let service = '';
  let ville = '';
  for (const s of services) {
    if (slugFull.startsWith(`${s}-`)) {
      service = s;
      ville = slugFull.replace(`${s}-`, '');
      break;
    }
  }
  if (!service || !villes[ville]) return { notFound: true };
  return { props: { service, ville, nomVille: villes[ville] } };
};
