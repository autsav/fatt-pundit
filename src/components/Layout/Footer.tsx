import { FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ activeLocation = 'soho' }: { activeLocation?: string }) => {
    // Map URLs
    const MAP_URLS: Record<string, string> = {
        'soho': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.050478051792!2d-0.13745862351290322!3d51.512278971814346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b7a9b%3A0x6b772c7221d64391!2s77%20Berwick%20St%2C%20London%20W1F%208TH!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
        'covent-garden': "https://maps.google.com/maps?q=51.5107500,-0.1226390&z=15&output=embed"
    };

    const currentMapSrc = MAP_URLS[activeLocation] || MAP_URLS['soho'];

    return (
        <footer style={{
            backgroundColor: 'var(--color-bg-secondary)',
            padding: '4rem 0 2rem',
            color: 'var(--color-text-secondary)',
            borderTop: '1px solid rgba(255,255,255,0.05)'
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
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            FATT PUNDIT
                        </h3>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>Where Chinese Craftsmanship Meets Indian Spices.<br />Momos from the Himalayas.</p>

                        <h5 style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '0.05rem' }}>OPENING HOURS</h5>
                        <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)', fontFamily: 'var(--font-heading)' }}>
                            <span style={{ display: 'block' }}>Mon – Thu: 12:00pm – 10:00pm</span>
                            <span style={{ display: 'block' }}>Fri – Sat: 12:00pm – 10:30pm</span>
                            <span style={{ display: 'block' }}>Sun: 12:00pm – 9:30pm</span>
                        </p>
                    </div>

                    {/* Locations & Map */}
                    <div>
                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>LOCATIONS</h4>

                        {/* Soho */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', color: activeLocation === 'soho' ? 'var(--color-accent)' : 'rgba(0,0,0,0.7)', marginBottom: '0.25rem', transition: 'color 0.3s' }}>SOHO</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+Soho+77+Berwick+Street" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                                <FaMapMarkerAlt size={16} color="var(--color-accent)" /> 77 Berwick Street, W1F 8TH
                            </a>
                            <a href="mailto:info@fattpundit.co.uk" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                                <FaEnvelope size={16} color="var(--color-accent)" /> info@fattpundit.co.uk
                            </a>
                        </div>

                        {/* Covent Garden */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', color: activeLocation === 'covent-garden' ? 'var(--color-accent)' : 'rgba(0,0,0,0.7)', marginBottom: '0.25rem', transition: 'color 0.3s' }}>COVENT GARDEN</strong>
                            <a href="https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+Covent+Garden+6+Maiden+Lane" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                                <FaMapMarkerAlt size={16} color="var(--color-accent)" /> 6 Maiden Lane, WC2E 7NA
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
                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>RESERVATIONS</h4>
                        <p style={{ marginBottom: '1rem', color: '#888', fontSize: '0.9rem' }}>
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
                    <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>&copy; {new Date().getFullYear()} Fatt Pundit. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://www.instagram.com/fattpundit" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', transition: 'color 0.3s' }}><FaInstagram size={20} /></a>
                        <a href="https://www.facebook.com/fattpundit" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', transition: 'color 0.3s' }}><FaFacebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
