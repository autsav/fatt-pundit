import { FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import sohoTexture from '../../assets/images/soho_texture.png';
import sohoFooterBg from '../../assets/images/soho_footer_bg_rain.png';

const Footer = ({ activeLocation = 'soho' }: { activeLocation?: string }) => {
    // Map URLs
    const MAP_URLS: Record<string, string> = {
        'soho': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.050478051792!2d-0.13745862351290322!3d51.512278971814346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b7a9b%3A0x6b772c7221d64391!2s77%20Berwick%20St%2C%20London%20W1F%208TH!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
        'covent-garden': "https://maps.google.com/maps?q=51.5107500,-0.1226390&z=15&output=embed"
    };

    const currentMapSrc = MAP_URLS[activeLocation] || MAP_URLS['soho'];

    return (
        <footer style={{
            backgroundColor: '#202020', // Soft Charcoal fallback
            backgroundImage: activeLocation === 'soho'
                ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${sohoFooterBg})`
                : `linear-gradient(rgba(32,32,32,0.65), rgba(32,32,32,0.65)), url(${sohoTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '5rem 0 3rem', // Increased padding for vertical rhythm
            color: '#E0E0E0', // High legibility off-white
            borderTop: '1px solid rgba(255,255,255,0.08)'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand & Hours */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            FATT PUNDIT
                        </h3>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>Where Chinese Craftsmanship Meets Indian Spices.<br />Momos from the Himalayas.</p>

                        <h5 style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', letterSpacing: '0.1em' }}>OPENING HOURS</h5>
                        <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#E0E0E0', fontFamily: 'var(--font-heading)' }}>
                            <span style={{ display: 'block', marginBottom: '0.2rem' }}>Mon – Thu: 12:00pm – 10:00pm</span>
                            <span style={{ display: 'block', marginBottom: '0.2rem' }}>Fri – Sat: 12:00pm – 10:30pm</span>
                            <span style={{ display: 'block' }}>Sun: 12:00pm – 9:30pm</span>
                        </p>
                    </div>

                    {/* Locations & Map */}
                    <div>
                        <h4 style={{ color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>LOCATIONS</h4>

                        {/* Soho */}
                        <div style={{ marginBottom: '2rem' }}>
                            <strong style={{ display: 'block', color: activeLocation === 'soho' ? 'var(--color-accent)' : '#FFFFFF', marginBottom: '0.5rem', fontSize: '1.1rem', transition: 'color 0.3s' }}>SOHO</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+Soho+77+Berwick+Street" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', color: '#D0D0D0', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#D0D0D0'}>
                                <FaMapMarkerAlt size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} /> 77 Berwick Street, W1F 8TH
                            </a>
                            <a href="mailto:info@fattpundit.co.uk" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D0D0D0', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#D0D0D0'}>
                                <FaEnvelope size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} /> info@fattpundit.co.uk
                            </a>
                        </div>

                        {/* Covent Garden */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', color: activeLocation === 'covent-garden' ? 'var(--color-accent)' : '#FFFFFF', marginBottom: '0.5rem', fontSize: '1.1rem', transition: 'color 0.3s' }}>COVENT GARDEN</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+Covent+Garden+6+Maiden+Lane" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', color: '#D0D0D0', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#D0D0D0'}>
                                <FaMapMarkerAlt size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} /> 6 Maiden Lane, WC2E 7NA
                            </a>
                        </div>
                    </div>

                    {/* Interactive Map (Dark Theme CSS) */}
                    <div style={{ borderRadius: '8px', overflow: 'hidden', height: '200px', border: '2px solid var(--color-accent)' }}>
                        <iframe
                            src={currentMapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Fatt Pundit Map"
                        ></iframe>
                    </div>

                    {/* Reservations */}
                    <div>
                        <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>RESERVATIONS</h4>
                        <p style={{ marginBottom: '1rem', color: '#E0E0E0', fontSize: '0.9rem' }}>
                            Book your table online for the best experience.
                        </p>
                        <a
                            href="https://www.fattpundit.co.uk/reservations/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '0.75rem 1.5rem',
                                backgroundColor: 'var(--color-accent)',
                                color: '#fff',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s',
                                fontFamily: 'var(--font-heading)'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                        >
                            BOOK A TABLE
                        </a>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ fontSize: '0.875rem', color: '#D0D0D0' }}>&copy; {new Date().getFullYear()} Fatt Pundit. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://www.instagram.com/fattpundit" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}><FaInstagram size={24} /></a>
                        <a href="https://www.facebook.com/fattpundit" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}><FaFacebook size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
