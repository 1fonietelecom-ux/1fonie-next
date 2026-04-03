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
  'le-havre': { nom: 'Le Havre', region: 'Normandie' },
  'saint-etienne': { nom: 'Saint-Étienne', region: 'Auvergne-Rhône-Alpes' },
  'toulon': { nom: 'Toulon', region: "Provence-Alpes-Côte d'Azur" },
  'grenoble': { nom: 'Grenoble', region: 'Auvergne-Rhône-Alpes' },
  'dijon': { nom: 'Dijon', region: 'Bourgogne-Franche-Comté' },
  'angers': { nom: 'Angers', region: 'Pays de la Loire' },
  'nimes': { nom: 'Nîmes', region: 'Occitanie' },
  'villeurbanne': { nom: 'Villeurbanne', region: 'Auvergne-Rhône-Alpes' },
  'clermont-ferrand': { nom: 'Clermont-Ferrand', region: 'Auvergne-Rhône-Alpes' },
  'le-mans': { nom: 'Le Mans', region: 'Pays de la Loire' },
  'aix-en-provence': { nom: 'Aix-en-Provence', region: "Provence-Alpes-Côte d'Azur" },
  'brest': { nom: 'Brest', region: 'Bretagne' },
  'tours': { nom: 'Tours', region: 'Centre-Val de Loire' },
  'amiens': { nom: 'Amiens', region: 'Hauts-de-France' },
  'limoges': { nom: 'Limoges', region: 'Nouvelle-Aquitaine' },
  'annecy': { nom: 'Annecy', region: 'Auvergne-Rhône-Alpes' },
  'perpignan': { nom: 'Perpignan', region: 'Occitanie' },
  'boulogne-billancourt': { nom: 'Boulogne-Billancourt', region: 'Île-de-France' },
  'metz': { nom: 'Metz', region: 'Grand Est' },
  'besancon': { nom: 'Besançon', region: 'Bourgogne-Franche-Comté' },
  'orleans': { nom: 'Orléans', region: 'Centre-Val de Loire' },
  'rouen': { nom: 'Rouen', region: 'Normandie' },
  'mulhouse': { nom: 'Mulhouse', region: 'Grand Est' },
  'caen': { nom: 'Caen', region: 'Normandie' },
  'nancy': { nom: 'Nancy', region: 'Grand Est' },
  'argenteuil': { nom: 'Argenteuil', region: 'Île-de-France' },
  'montreuil': { nom: 'Montreuil', region: 'Île-de-France' },
  'roubaix': { nom: 'Roubaix', region: 'Hauts-de-France' },
  'tourcoing': { nom: 'Tourcoing', region: 'Hauts-de-France' },
  'dunkerque': { nom: 'Dunkerque', region: 'Hauts-de-France' },
  'avignon': { nom: 'Avignon', region: "Provence-Alpes-Côte d'Azur" },
  'nanterre': { nom: 'Nanterre', region: 'Île-de-France' },
  'vitry-sur-seine': { nom: 'Vitry-sur-Seine', region: 'Île-de-France' },
  'creteil': { nom: 'Créteil', region: 'Île-de-France' },
  'pau': { nom: 'Pau', region: 'Nouvelle-Aquitaine' },
  'poitiers': { nom: 'Poitiers', region: 'Nouvelle-Aquitaine' },
  'asnieres-sur-seine': { nom: 'Asnières-sur-Seine', region: 'Île-de-France' },
  'versailles': { nom: 'Versailles', region: 'Île-de-France' },
  'colombes': { nom: 'Colombes', region: 'Île-de-France' },
  'saint-paul': { nom: 'Saint-Paul', region: 'La Réunion' },
  'fort-de-france': { nom: 'Fort-de-France', region: 'Martinique' },
  'aubervilliers': { nom: 'Aubervilliers', region: 'Île-de-France' },
  'courbevoie': { nom: 'Courbevoie', region: 'Île-de-France' },
  'la-rochelle': { nom: 'La Rochelle', region: 'Nouvelle-Aquitaine' },
  'antibes': { nom: 'Antibes', region: "Provence-Alpes-Côte d'Azur" },
  'cannes': { nom: 'Cannes', region: "Provence-Alpes-Côte d'Azur" },
  'rueil-malmaison': { nom: 'Rueil-Malmaison', region: 'Île-de-France' },
  'saint-maur-des-fosses': { nom: 'Saint-Maur-des-Fossés', region: 'Île-de-France' },
  'calais': { nom: 'Calais', region: 'Hauts-de-France' },
  'champigny-sur-marne': { nom: 'Champigny-sur-Marne', region: 'Île-de-France' },
  'la-defense': { nom: 'La Défense', region: 'Île-de-France' },
  'merignac': { nom: 'Mérignac', region: 'Nouvelle-Aquitaine' },
  'saint-nazaire': { nom: 'Saint-Nazaire', region: 'Pays de la Loire' },
  'colmar': { nom: 'Colmar', region: 'Grand Est' },
  'valenciennes': { nom: 'Valenciennes', region: 'Hauts-de-France' },
  'beziers': { nom: 'Béziers', region: 'Occitanie' },
  'bourges': { nom: 'Bourges', region: 'Centre-Val de Loire' },
  'quimper': { nom: 'Quimper', region: 'Bretagne' },
  'troyes': { nom: 'Troyes', region: 'Grand Est' },
  'la-seyne-sur-mer': { nom: 'La Seyne-sur-Mer', region: "Provence-Alpes-Côte d'Azur" },
  'villeneuve-d-ascq': { nom: "Villeneuve-d'Ascq", region: 'Hauts-de-France' },
  'lorient': { nom: 'Lorient', region: 'Bretagne' },
  'issy-les-moulineaux': { nom: 'Issy-les-Moulineaux', region: 'Île-de-France' },
  'levallois-perret': { nom: 'Levallois-Perret', region: 'Île-de-France' },
  'montrouge': { nom: 'Montrouge', region: 'Île-de-France' },
  'noisy-le-grand': { nom: 'Noisy-le-Grand', region: 'Île-de-France' },
  'ivry-sur-seine': { nom: 'Ivry-sur-Seine', region: 'Île-de-France' },
  'pessac': { nom: 'Pessac', region: 'Nouvelle-Aquitaine' },
  'cergy': { nom: 'Cergy', region: 'Île-de-France' },
  'drancy': { nom: 'Drancy', region: 'Île-de-France' },
  'valence': { nom: 'Valence', region: 'Auvergne-Rhône-Alpes' },
  'chambery': { nom: 'Chambéry', region: 'Auvergne-Rhône-Alpes' },
  'niort': { nom: 'Niort', region: 'Nouvelle-Aquitaine' },
  'bayonne': { nom: 'Bayonne', region: 'Nouvelle-Aquitaine' },
  'saint-quentin': { nom: 'Saint-Quentin', region: 'Hauts-de-France' },
  'vannes': { nom: 'Vannes', region: 'Bretagne' },
  'cayenne': { nom: 'Cayenne', region: 'Guyane' },
  'hyeres': { nom: 'Hyères', region: "Provence-Alpes-Côte d'Azur" },
  'montauban': { nom: 'Montauban', region: 'Occitanie' },
  'caluire-et-cuire': { nom: 'Caluire-et-Cuire', region: 'Auvergne-Rhône-Alpes' },
  'cherbourg': { nom: 'Cherbourg', region: 'Normandie' },
  'neuilly-sur-seine': { nom: 'Neuilly-sur-Seine', region: 'Île-de-France' },
  'la-reunion-saint-denis': { nom: 'Saint-Denis', region: 'La Réunion' },
  'clichy': { nom: 'Clichy', region: 'Île-de-France' },
  'saint-denis': { nom: 'Saint-Denis', region: 'Île-de-France' },
  'ajaccio': { nom: 'Ajaccio', region: 'Corse' },
  'charleroi': { nom: 'Charleville-Mézières', region: 'Grand Est' },
  'belfort': { nom: 'Belfort', region: 'Bourgogne-Franche-Comté' },
  'brive-la-gaillarde': { nom: 'Brive-la-Gaillarde', region: 'Nouvelle-Aquitaine' },
  'sarcelles': { nom: 'Sarcelles', region: 'Île-de-France' },
  'fontenay-sous-bois': { nom: 'Fontenay-sous-Bois', region: 'Île-de-France' },
  'massy': { nom: 'Massy', region: 'Île-de-France' },
  'arles': { nom: 'Arles', region: "Provence-Alpes-Côte d'Azur" },
  'clamart': { nom: 'Clamart', region: 'Île-de-France' },
  'evry': { nom: 'Évry', region: 'Île-de-France' },
  'antony': { nom: 'Antony', region: 'Île-de-France' },
  'epinay-sur-seine': { nom: 'Épinay-sur-Seine', region: 'Île-de-France' },
  'roanne': { nom: 'Roanne', region: 'Auvergne-Rhône-Alpes' },
  'cholet': { nom: 'Cholet', region: 'Pays de la Loire' },
  'bondy': { nom: 'Bondy', region: 'Île-de-France' },
  'thionville': { nom: 'Thionville', region: 'Grand Est' },
  'pantin': { nom: 'Pantin', region: 'Île-de-France' },
  'poissy': { nom: 'Poissy', region: 'Île-de-France' },
  'laval': { nom: 'Laval', region: 'Pays de la Loire' },
  'sartrouville': { nom: 'Sartrouville', region: 'Île-de-France' },
  'la-courneuve': { nom: 'La Courneuve', region: 'Île-de-France' },
  'meaux': { nom: 'Meaux', region: 'Île-de-France' },
  'chatellerault': { nom: 'Châtellerault', region: 'Nouvelle-Aquitaine' },
  'colombe': { nom: 'Colombes', region: 'Île-de-France' },
  'montlucon': { nom: 'Montluçon', region: 'Auvergne-Rhône-Alpes' },
  'albi': { nom: 'Albi', region: 'Occitanie' },
  'saint-malo': { nom: 'Saint-Malo', region: 'Bretagne' },
  'angouleme': { nom: 'Angoulême', region: 'Nouvelle-Aquitaine' },
  'carcassonne': { nom: 'Carcassonne', region: 'Occitanie' },
  'vincennes': { nom: 'Vincennes', region: 'Île-de-France' },
  'pau-business': { nom: 'Pau', region: 'Nouvelle-Aquitaine' },
  'villejuif': { nom: 'Villejuif', region: 'Île-de-France' },
  'epinal': { nom: 'Épinal', region: 'Grand Est' },
  'saint-brieuc': { nom: 'Saint-Brieuc', region: 'Bretagne' },
  'chartres': { nom: 'Chartres', region: 'Centre-Val de Loire' },
  'narbonne': { nom: 'Narbonne', region: 'Occitanie' },
  'saint-ouen': { nom: 'Saint-Ouen', region: 'Île-de-France' },
  'chelles': { nom: 'Chelles', region: 'Île-de-France' },
  'evreux': { nom: 'Évreux', region: 'Normandie' },
  'salon-de-provence': { nom: 'Salon-de-Provence', region: "Provence-Alpes-Côte d'Azur" },
  'mantes-la-jolie': { nom: 'Mantes-la-Jolie', region: 'Île-de-France' },
  'bobigny': { nom: 'Bobigny', region: 'Île-de-France' },
  'gagny': { nom: 'Gagny', region: 'Île-de-France' },
  'frejus': { nom: 'Fréjus', region: "Provence-Alpes-Côte d'Azur" },
  'alfortville': { nom: 'Alfortville', region: 'Île-de-France' },
  'martigues': { nom: 'Martigues', region: "Provence-Alpes-Côte d'Azur" },
  'boulogne-sur-mer': { nom: 'Boulogne-sur-Mer', region: 'Hauts-de-France' },
  'auxerre': { nom: 'Auxerre', region: 'Bourgogne-Franche-Comté' },
  'maisons-alfort': { nom: 'Maisons-Alfort', region: 'Île-de-France' },
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
