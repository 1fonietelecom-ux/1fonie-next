import React, { useState } from 'react';
import Head from 'next/head';

const stats = [
  { value: '200+', label: 'entreprises accompagnées' },
  { value: '15 ans', label: "d'expérience" },
  { value: '150', label: 'villes en France' },
  { value: '99.9%', label: 'disponibilité réseau' },
];

const badges = [
  '✅ Certifié Yealink',
  '🛡️ SOC 24/7/365',
  '📡 WiFi 6 & 7',
  '🔧 Télémaintenance',
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service_type: '', message: '', urgency: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
          template_params: {
            ...formData,
            company: String(formData.company)
          }
        })
      });
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: '✅ Votre demande a été envoyée ! Nous vous recontactons sous 24h.' });
        setFormData({ name: '', email: '', company: '', phone: '', service_type: '', message: '', urgency: 'medium' });
      } else {
        setSubmitStatus({ type: 'error', message: "❌ Une erreur est survenue. Appelez-nous au 03 20 49 29 00" });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: "❌ Erreur de connexion. Appelez-nous au 03 20 49 29 00" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ========== HERO ========== */}
      <section style={{
        background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 50%, #1a0a30 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 24px'
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid-1f">

            {/* Gauche */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '28px' }}>
                <span style={{ fontSize: '12px' }}>🇫🇷</span>
                <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>Expert IT & téléphonie — France entière</span>
              </div>

              <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                Téléphonie, réseau<br />et cybersécurité —<br />
                <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>un seul expert</span>
              </h1>

              <p style={{ color: '#c084fc', fontSize: '18px', lineHeight: '1.7', marginBottom: '32px', opacity: 0.9 }}>
                MSP certifié — nous gérons votre informatique, votre téléphonie IP Yealink et votre cybersécurité. Vous vous concentrez sur votre métier.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
                {badges.map(b => (
                  <span key={b} style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.35)', color: '#e9d5ff', padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '500' }}>{b}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '15px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  🚀 Demander un devis gratuit
                </a>
                <a href="tel:0320492900" style={{ background: 'transparent', color: '#c084fc', padding: '15px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '600', border: '2px solid rgba(124,58,237,0.5)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  📞 03 20 49 29 00
                </a>
              </div>
            </div>

            {/* Droite — stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {stats.map(s => (
                <div key={s.value} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                  <div style={{ fontSize: '36px', fontWeight: '800', color: '#a855f7', marginBottom: '6px' }}>{s.value}</div>
                  <div style={{ color: '#c084fc', fontSize: '13px', opacity: 0.8 }}>{s.label}</div>
                </div>
              ))}
              <div style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>📱</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: '700', marginBottom: '4px' }}>Revendeur officiel Yealink</div>
                  <div style={{ color: '#c084fc', fontSize: '13px' }}>Standards IP T5x / T7x / T8x — sans fils W59 / W76 — livraison partout en France</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid-1f { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '16px' }}>Nos Services</h2>
            <p style={{ color: '#6b21a8', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Tout ce dont votre entreprise a besoin, géré par un seul expert</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '📞', title: 'Téléphonie IP Yealink', desc: 'Standards Centrex, SVI, téléphones IP fixes et sans fil. Abonnements lignes au compteur ou illimité.', href: '/telephonie-entreprise', color: '#7c3aed' },
              { icon: '🛡️', title: 'Cybersécurité & Maintenance', desc: 'EDR, SOC 24/7, supervision réseau, ticketing, UseSecure. Pack Essentiel à 47€ ou Business à 87€/poste/mois.', href: '/cybersecurite-tpe-pme', color: '#6d28d9' },
              { icon: '🌐', title: 'Réseau & Internet', desc: 'FTTH Pro 65€/mois avec backup 4G, WiFi 6/7, firewall géré, VPN multi-sites.', href: '/reseau-wifi-professionnel', color: '#5b21b6' },
              { icon: '📱', title: 'Téléphonie Mobile', desc: 'Forfaits pro Orange, Bouygues, SFR. De 8€ à 16€/ligne/mois. 5G incluse.', href: '/maintenance-informatique-entreprise', color: '#4c1d95' },
            ].map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '32px 24px', border: '1px solid rgba(124,58,237,0.15)', boxShadow: '0 4px 20px rgba(124,58,237,0.08)', transition: 'all 0.3s', cursor: 'pointer', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(124,58,237,0.2)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.08)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.15)'; }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e0b3e', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{s.desc}</p>
                  <span style={{ color: s.color, fontWeight: '600', fontSize: '14px' }}>En savoir plus →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TARIFS ========== */}
      <section id="tarifs" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '16px' }}>Tarifs transparents</h2>
            <p style={{ color: '#6b21a8', fontSize: '18px' }}>Sans surprise — tout est affiché, tout est en leasing possible</p>
          </div>

          {/* Packs cybersécurité */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '56px' }}>
            {/* Essentiel */}
            <div style={{ background: '#faf5ff', borderRadius: '20px', padding: '40px 32px', border: '2px solid rgba(124,58,237,0.2)' }}>
              <div style={{ color: '#7c3aed', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Pack Essentiel</div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#1e0b3e', marginBottom: '4px' }}>47€ <span style={{ fontSize: '16px', fontWeight: '400', color: '#6b7280' }}>HT/poste/mois</span></div>
              <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '28px' }}>La base pour protéger votre entreprise</p>
              {['Maintenance préventive', 'EDR + Antivirus avancé', 'Supervision réseau 24/7', 'Mises à jour automatiques', 'Support ticketing', 'Formation cybersécurité UseSecure'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#374151', fontSize: '14px' }}>
                  <span style={{ color: '#7c3aed', fontWeight: '700' }}>✓</span> {f}
                </div>
              ))}
              <a href="#contact" style={{ display: 'block', textAlign: 'center', background: 'rgba(124,58,237,0.1)', color: '#7c3aed', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', marginTop: '28px', border: '2px solid rgba(124,58,237,0.3)' }}>
                Demander un devis
              </a>
            </div>

            {/* Business */}
            <div style={{ background: 'linear-gradient(135deg, #1e0b3e, #2d1458)', borderRadius: '20px', padding: '40px 32px', border: '2px solid #7c3aed', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>⭐ Recommandé</div>
              <div style={{ color: '#a855f7', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Pack Business</div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>87€ <span style={{ fontSize: '16px', fontWeight: '400', color: '#c084fc' }}>HT/poste/mois</span></div>
              <p style={{ color: '#c084fc', fontSize: '14px', marginBottom: '28px' }}>Protection maximale + DMARC inclus</p>
              {['Tout le Pack Essentiel', 'SOC 24/7/365', 'Blocage applis non autorisées', 'Blocage clés USB', '✅ Protection DMARC incluse'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#e9d5ff', fontSize: '14px' }}>
                  <span style={{ color: '#a855f7', fontWeight: '700' }}>✓</span> {f}
                </div>
              ))}
              <a href="#contact" style={{ display: 'block', textAlign: 'center', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', marginTop: '28px', boxShadow: '0 8px 25px rgba(124,58,237,0.4)' }}>
                Demander un devis
              </a>
            </div>
          </div>

          {/* Options à la carte */}
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1e0b3e', marginBottom: '24px', textAlign: 'center' }}>Options à la carte</h3>
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
              <div key={o.label} style={{ background: '#faf5ff', borderRadius: '12px', padding: '20px', border: '1px solid rgba(124,58,237,0.15)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '24px' }}>{o.icon}</span>
                <span style={{ color: '#1e0b3e', fontWeight: '600', fontSize: '14px' }}>{o.label}</span>
                <span style={{ color: '#7c3aed', fontWeight: '700', fontSize: '15px' }}>{o.price}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/leasing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.08)', color: '#7c3aed', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', border: '1px solid rgba(124,58,237,0.2)' }}>
              💡 Pourquoi choisir le leasing ? En savoir plus →
            </a>
          </div>
        </div>
      </section>

      {/* ========== TEMOIGNAGES ========== */}
      <section id="temoignages" style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '16px' }}>Ils nous font confiance</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { stars: 5, text: "Enfin une société de téléphonie à taille humaine : Forfaits adaptés, évolutifs, rapidité dans les solutions techniques, Prix hyper compétitif. Croyez moi : j'en ai croisé beaucoup des fournisseurs de téléphonie, box, internet, standard et j'ai malheureusement croisé aussi beaucoup d'escrocs. Un conseil : 1FONIE", name: 'Frédéric', role: 'Pharmacien, Deux-Sèvres' },
              { stars: 5, text: "Maintenance réseau exemplaire ! Plus de panne depuis 2 ans. L'équipe est réactive et leurs conseils nous ont permis d'optimiser notre infrastructure.", name: 'Jean-Michel Durand', role: 'PDG, Durand & Associés (45 employés)' },
              { stars: 5, text: "Service irréprochable ! Installation rapide du centrex et formation complète. Nos équipes maîtrisent parfaitement les nouvelles fonctionnalités.", name: 'Marie Petit', role: 'Responsable IT, Architectes Réunis (22 employés)' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(124,58,237,0.15)', boxShadow: '0 4px 20px rgba(124,58,237,0.06)' }}>
                <div style={{ color: '#f59e0b', fontSize: '20px', marginBottom: '16px' }}>{'★'.repeat(t.stars)}</div>
                <p style={{ color: '#374151', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '20px', fontSize: '14px' }}>"{t.text}"</p>
                <div style={{ fontWeight: '700', color: '#1e0b3e' }}>{t.name}</div>
                <div style={{ color: '#7c3aed', fontSize: '13px' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1e0b3e, #2d1458)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Demandez votre devis gratuit</h2>
            <p style={{ color: '#c084fc', fontSize: '18px' }}>Réponse garantie sous 24h — nous vérifions votre finançabilité leasing gratuitement</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '48px', border: '1px solid rgba(124,58,237,0.3)', backdropFilter: 'blur(10px)' }}>
            {submitStatus && (
              <div style={{ padding: '16px', borderRadius: '10px', marginBottom: '24px', background: submitStatus.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', color: submitStatus.type === 'success' ? '#86efac' : '#fca5a5', border: `1px solid ${submitStatus.type === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
                {submitStatus.message}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-grid-1f">
              <div>
                <label style={{ display: 'block', color: '#c084fc', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Nom complet *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#c084fc', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Email professionnel *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#c084fc', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Entreprise *</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} required style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#c084fc', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Téléphone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#c084fc', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Service souhaité *</label>
              <select name="service_type" value={formData.service_type} onChange={handleInputChange} required style={{ width: '100%', padding: '12px 16px', background: '#2d1458', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px' }}>
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
              <label style={{ display: 'block', color: '#c084fc', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Décrivez votre projet *</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '8px', color: '#fff', fontSize: '14px', resize: 'none', boxSizing: 'border-box' }} />
            </div>

            <button onClick={handleSubmit} disabled={isSubmitting} style={{ width: '100%', padding: '16px', background: isSubmitting ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 8px 25px rgba(124,58,237,0.4)' }}>
              {isSubmitting ? 'Envoi en cours...' : '🚀 Envoyer ma pré-commande'}
            </button>

            <p style={{ color: '#c084fc', fontSize: '12px', textAlign: 'center', marginTop: '16px', opacity: 0.7 }}>
              🛡️ Données sécurisées — ⏰ Réponse sous 24h — 💳 Finançabilité leasing vérifiée gratuitement
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .form-grid-1f { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ========== FOOTER ========== */}
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
              {['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Lille', 'Nantes', 'Strasbourg', 'Montpellier', 'Nice'].map(v => (
                <a key={v} href={`/telephonie-entreprise-${v.toLowerCase()}`} style={{ display: 'block', color: '#c084fc', fontSize: '13px', marginBottom: '6px', textDecoration: 'none' }}>{v}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(124,58,237,0.2)', paddingTop: '24px', textAlign: 'center', color: '#6b21a8', fontSize: '12px' }}>
            © 2025 1FONIE — Nord VoIP SASU — Tous droits réservés
          </div>
        </div>
      </footer>

    </div>
  );
}
