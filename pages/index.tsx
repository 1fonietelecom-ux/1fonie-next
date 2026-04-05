import Head from 'next/head';
import { useState } from 'react';

const stats = [
  { value: '200+', label: 'entreprises accompagnées' },
  { value: '10 ans', label: "d'expérience" },
  { value: '150', label: 'villes en France' },
  { value: '99.9%', label: 'disponibilité réseau' },
];

const badges = ['✅ Certifié Yealink', '🛡️ SOC 24/7/365', '📡 WiFi 6 & 7', '🔧 Télémaintenance'];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', service_type: '', message: '', urgency: 'medium' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: string, message: string} | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_nvtel',
          template_id: 'template_ervf3dm',
          user_id: 'Q3c8kN9N5pircpp1R',
          template_params: { ...formData, company: String(formData.company) }
        })
      });
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: '✅ Demande envoyée ! Nous vous recontactons sous 24h.' });
        setFormData({ name: '', email: '', company: '', phone: '', service_type: '', message: '', urgency: 'medium' });
      } else {
        setSubmitStatus({ type: 'error', message: '❌ Erreur. Appelez-nous au 03 20 49 29 00' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: '❌ Erreur de connexion. Appelez-nous au 03 20 49 29 00' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>1fonie — Téléphonie IP, Cybersécurité & Informatique pour TPE/PME</title>
        <meta name="description" content="Expert téléphonie IP Yealink, cybersécurité et maintenance informatique pour TPE/PME partout en France. Devis gratuit — 03 20 49 29 00" />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1a2744 0%, #1e3460 50%, #0d1a2e 100%)', minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '80px 24px' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,184,232,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,184,232,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid-1f">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(77,184,232,0.15)', border: '1px solid rgba(77,184,232,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '28px' }}>
                <span style={{ fontSize: '12px' }}>🇫🇷</span>
                <span style={{ color: '#7dcef0', fontSize: '13px', fontWeight: '600' }}>Expert IT & téléphonie — France entière</span>
              </div>
              <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                Téléphonie, réseau<br />et cybersécurité —<br />
                <span style={{ background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>un seul expert</span>
              </h1>
              <p style={{ color: '#7dcef0', fontSize: '18px', lineHeight: '1.7', marginBottom: '32px', opacity: 0.9 }}>
                MSP certifié — nous gérons votre informatique, votre téléphonie IP Yealink et votre cybersécurité. Vous vous concentrez sur votre métier.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
                {badges.map(b => (
                  <span key={b} style={{ background: 'rgba(77,184,232,0.12)', border: '1px solid rgba(77,184,232,0.35)', color: '#e8f4fd', padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '500' }}>{b}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '15px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(77,184,232,0.4)' }}>🚀 Demander un devis gratuit</a>
                <a href="tel:0320492900" style={{ background: 'transparent', color: '#7dcef0', padding: '15px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '600', border: '2px solid rgba(77,184,232,0.5)' }}>📞 03 20 49 29 00</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {stats.map(s => (
                <div key={s.value} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(77,184,232,0.2)', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                  <div style={{ fontSize: '36px', fontWeight: '800', color: '#4db8e8', marginBottom: '6px' }}>{s.value}</div>
                  <div style={{ color: '#7dcef0', fontSize: '13px', opacity: 0.8 }}>{s.label}</div>
                </div>
              ))}
              <div style={{ gridColumn: '1 / -1', background: 'rgba(77,184,232,0.08)', border: '1px solid rgba(77,184,232,0.3)', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #1a2744, #4db8e8)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>📱</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: '700', marginBottom: '4px' }}>Revendeur officiel Yealink</div>
                  <div style={{ color: '#7dcef0', fontSize: '13px' }}>Standards IP T5x / T7x / T8x — sans fils W59 / W76 — livraison partout en France</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-grid-1f{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 24px', background: '#f0f8ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#1a2744', marginBottom: '16px' }}>Nos Services</h2>
            <p style={{ color: '#1e3460', fontSize: '18px' }}>Tout ce dont votre entreprise a besoin, géré par un seul expert</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '📞', title: 'Téléphonie IP Yealink', desc: 'Standards Centrex, SVI, téléphones IP fixes et sans fil. Abonnements lignes au compteur ou illimité.', href: '/telephonie-entreprise', color: '#4db8e8' },
              { icon: '🛡️', title: 'Cybersécurité & Maintenance', desc: 'EDR, SOC 24/7, supervision réseau, ticketing, UseSecure. Pack Essentiel à 47€ ou Business à 87€/poste/mois.', href: '/cybersecurite-tpe-pme', color: '#2aa8de' },
              { icon: '🌐', title: 'Réseau & Internet', desc: 'FTTH Pro 65€/mois avec backup 4G, WiFi 6/7, firewall géré, VPN multi-sites.', href: '/reseau-wifi-professionnel', color: '#1a8fc0' },
              { icon: '📱', title: 'Téléphonie Mobile', desc: 'Forfaits pro Orange, Bouygues, SFR. De 8€ à 16€/ligne/mois. 5G incluse.', href: '/maintenance-informatique-entreprise', color: '#1a2744' },
            ].map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '32px 24px', border: '1px solid rgba(77,184,232,0.15)', boxShadow: '0 4px 20px rgba(26,39,68,0.06)', height: '100%' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ color: '#4a6080', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{s.desc}</p>
                  <span style={{ color: s.color, fontWeight: '600', fontSize: '14px' }}>En savoir plus →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#1a2744', marginBottom: '16px' }}>Tarifs transparents</h2>
            <p style={{ color: '#1e3460', fontSize: '18px' }}>Sans surprise — tout est affiché, tout est en leasing possible</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '56px' }}>
            <div style={{ background: '#f0f8ff', borderRadius: '20px', padding: '40px 32px', border: '2px solid rgba(77,184,232,0.2)' }}>
              <div style={{ color: '#4db8e8', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Pack Essentiel</div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#1a2744', marginBottom: '4px' }}>47€ <span style={{ fontSize: '16px', fontWeight: '400', color: '#4a6080' }}>HT/poste/mois</span></div>
              <p style={{ color: '#4a6080', fontSize: '14px', marginBottom: '28px' }}>La base pour protéger votre entreprise</p>
              {['Maintenance préventive', 'EDR + Antivirus avancé', 'Supervision réseau 24/7', 'Mises à jour automatiques', 'Support ticketing', 'Formation cybersécurité UseSecure'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#1e3460', fontSize: '14px' }}>
                  <span style={{ color: '#4db8e8', fontWeight: '700' }}>✓</span> {f}
                </div>
              ))}
              <a href="#contact" style={{ display: 'block', textAlign: 'center', background: 'rgba(77,184,232,0.1)', color: '#4db8e8', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', marginTop: '28px', border: '2px solid rgba(77,184,232,0.3)' }}>Demander un devis</a>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #1a2744, #1e3460)', borderRadius: '20px', padding: '40px 32px', border: '2px solid #4db8e8', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>⭐ Recommandé</div>
              <div style={{ color: '#4db8e8', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Pack Business</div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>87€ <span style={{ fontSize: '16px', fontWeight: '400', color: '#7dcef0' }}>HT/poste/mois</span></div>
              <p style={{ color: '#7dcef0', fontSize: '14px', marginBottom: '28px' }}>Protection maximale + DMARC inclus</p>
              {['Tout le Pack Essentiel', 'SOC 24/7/365', 'Blocage applis non autorisées', 'Blocage clés USB', '✅ Protection DMARC incluse'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#e8f4fd', fontSize: '14px' }}>
                  <span style={{ color: '#4db8e8', fontWeight: '700' }}>✓</span> {f}
                </div>
              ))}
              <a href="#contact" style={{ display: 'block', textAlign: 'center', background: 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', marginTop: '28px' }}>Demander un devis</a>
            </div>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a2744', marginBottom: '24px', textAlign: 'center' }}>Options à la carte</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🌐', label: 'Internet FTTH Pro + backup 4G', price: '65€ HT/mois' },
              { icon: '☎️', label: 'Ligne tél. au compteur', price: '5€ HT + réel/mois' },
              { icon: '☎️', label: 'Ligne tél. illimitée (fair use)', price: '14€ HT/ligne/mois' },
              { icon: '🔒', label: 'Firewall géré', price: '60€ HT/mois' },
              { icon: '🔗', label: 'VPN multi-sites', price: '25€ HT/site/mois' },
              { icon: '🛡️', label: 'Protection DMARC', price: '10€ HT/domaine/mois' },
              { icon: '📱', label: 'Mobile pro 5Go', price: '8€ HT/ligne/mois' },
              { icon: '📱', label: 'Mobile pro 20Go', price: '12€ HT/ligne/mois' },
              { icon: '📱', label: 'Mobile pro 50Go', price: '16€ HT/ligne/mois' },
              { icon: '💻', label: 'Matériel PC / Serveur', price: 'Achat ou leasing 36 mois' },
            ].map(o => (
              <div key={o.label} style={{ background: '#f0f8ff', borderRadius: '12px', padding: '20px', border: '1px solid rgba(77,184,232,0.15)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '24px' }}>{o.icon}</span>
                <span style={{ color: '#1a2744', fontWeight: '600', fontSize: '14px' }}>{o.label}</span>
                <span style={{ color: '#4db8e8', fontWeight: '700', fontSize: '15px' }}>{o.price}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/leasing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(77,184,232,0.08)', color: '#4db8e8', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', border: '1px solid rgba(77,184,232,0.2)' }}>
              💡 Pourquoi choisir le leasing ? En savoir plus →
            </a>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section id="temoignages" style={{ padding: '80px 24px', background: '#f0f8ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#1a2744', marginBottom: '16px' }}>Ils nous font confiance</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { stars: 5, text: "Enfin une société de téléphonie à taille humaine : Forfaits adaptés, évolutifs, rapidité dans les solutions techniques, Prix hyper compétitif. Un conseil : 1FONIE", name: 'Frédéric', role: 'Pharmacien, Deux-Sèvres' },
              { stars: 5, text: "Maintenance réseau exemplaire ! Plus de panne depuis 2 ans. L'équipe est réactive et leurs conseils nous ont permis d'optimiser notre infrastructure.", name: 'Jean-Michel Durand', role: 'PDG, Durand & Associés (45 employés)' },
              { stars: 5, text: "Service irréprochable ! Installation rapide du centrex et formation complète. Nos équipes maîtrisent parfaitement les nouvelles fonctionnalités.", name: 'Marie Petit', role: 'Responsable IT, Architectes Réunis (22 employés)' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(77,184,232,0.15)', boxShadow: '0 4px 20px rgba(26,39,68,0.06)' }}>
                <div style={{ color: '#f59e0b', fontSize: '20px', marginBottom: '16px' }}>{'★'.repeat(t.stars)}</div>
                <p style={{ color: '#1e3460', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '20px', fontSize: '14px' }}>"{t.text}"</p>
                <div style={{ fontWeight: '700', color: '#1a2744' }}>{t.name}</div>
                <div style={{ color: '#4db8e8', fontSize: '13px' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1a2744, #1e3460)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Demandez votre devis gratuit</h2>
            <p style={{ color: '#7dcef0', fontSize: '18px' }}>Réponse garantie sous 24h</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '48px', border: '1px solid rgba(77,184,232,0.3)' }}>
            {submitStatus && (
              <div style={{ padding: '16px', borderRadius: '10px', marginBottom: '24px', background: submitStatus.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', color: submitStatus.type === 'success' ? '#86efac' : '#fca5a5' }}>
                {submitStatus.message}
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-grid-1f">
              {[
                { label: 'Nom complet *', name: 'name', type: 'text' },
                { label: 'Email *', name: 'email', type: 'email' },
                { label: 'Entreprise *', name: 'company', type: 'text' },
                { label: 'Téléphone', name: 'phone', type: 'tel' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ display: 'block', color: '#7dcef0', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>{f.label}</label>
                  <input type={f.type} name={f.name} value={(formData as any)[f.name]} onChange={handleInputChange} style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(77,184,232,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' as const }} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#7dcef0', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Service souhaité *</label>
              <select name="service_type" value={formData.service_type} onChange={handleInputChange} style={{ width: '100%', padding: '12px 16px', background: '#1e3460', border: '1px solid rgba(77,184,232,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px' }}>
                <option value="">Sélectionnez un service</option>
                <option value="pack_essentiel">Pack Essentiel — 47€/poste/mois</option>
                <option value="pack_business">Pack Business — 87€/poste/mois</option>
                <option value="telephonie_ip">Téléphonie IP Yealink</option>
                <option value="internet_ftth">Internet FTTH Pro</option>
                <option value="mobile_pro">Mobile Pro</option>
                <option value="leasing_materiel">Leasing matériel</option>
                <option value="autre">Autre / Combinaison</option>
              </select>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#7dcef0', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Décrivez votre projet *</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(77,184,232,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', resize: 'none', boxSizing: 'border-box' as const }} />
            </div>
            <button onClick={handleSubmit} disabled={isSubmitting} style={{ width: '100%', padding: '16px', background: isSubmitting ? 'rgba(77,184,232,0.5)' : 'linear-gradient(135deg, #4db8e8, #2aa8de)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 8px 25px rgba(77,184,232,0.3)' }}>
              {isSubmitting ? 'Envoi en cours...' : '🚀 Envoyer ma pré-commande'}
            </button>
            <p style={{ color: '#7dcef0', fontSize: '12px', textAlign: 'center', marginTop: '16px', opacity: 0.7 }}>
              🛡️ Données sécurisées — ⏰ Réponse sous 24h — 💳 Finançabilité leasing vérifiée gratuitement
            </p>
          </div>
        </div>
        <style>{`@media(max-width:600px){.form-grid-1f{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </div>
  );
}
