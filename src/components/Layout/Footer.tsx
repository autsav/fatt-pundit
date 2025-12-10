import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-bg-secondary)',
            padding: '4rem 0 2rem',
            color: 'var(--color-text-secondary)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            FATT PUNDIT
                        </h3>
                        <p>Momos from the Himalayas.</p>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem' }}>SOHO</h4>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <MapPin size={16} /> 77 Berwick Street, W1F 8TH
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={16} /> info@fattpundit.co.uk
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem' }}>COVENT GARDEN</h4>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <MapPin size={16} /> 6 Maiden Lane, WC2E 7NA
                        </p>
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
                    <p style={{ fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Fatt Pundit. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: 'var(--color-text-primary)' }}><Instagram /></a>
                        <a href="#" style={{ color: 'var(--color-text-primary)' }}><Facebook /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
