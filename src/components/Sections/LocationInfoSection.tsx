import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

interface LocationInfoProps {
    address: string;
    email: string;
    phone?: string;
    mapUrl: string;
    image: string;
    description: string;
}

const LocationInfoSection = ({ address, email, phone, mapUrl, image, description }: LocationInfoProps) => {
    return (
        <section style={{
            padding: '6rem 0',
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2.5rem',
                            color: 'var(--color-accent)',
                            marginBottom: '1.5rem'
                        }}>
                            VISIT US
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            marginBottom: '2rem',
                            color: '#ccc',
                            fontFamily: 'var(--font-body)'
                        }}>
                            {description}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaMapMarkerAlt color="var(--color-accent)" size={24} style={{ marginTop: '0.2rem' }} />
                                <div>
                                    <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>ADDRESS</h4>
                                    <a
                                        href={mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#aaa', lineHeight: '1.5', textDecoration: 'none', transition: 'color 0.3s' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#aaa'}
                                    >
                                        {address}
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <FaEnvelope color="var(--color-accent)" size={24} />
                                <div>
                                    <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>EMAIL</h4>
                                    <a href={`mailto:${email}`} style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>
                                        {email}
                                    </a>
                                </div>
                            </div>

                            {phone && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <FaPhone color="var(--color-accent)" size={24} />
                                    <div>
                                        <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>PHONE</h4>
                                        <a href={`tel:${phone}`} style={{ color: '#aaa', textDecoration: 'none' }}>{phone}</a>
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaClock color="var(--color-accent)" size={24} style={{ marginTop: '0.2rem' }} />
                                <div>
                                    <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>OPENING HOURS</h4>
                                    <p style={{ color: '#aaa', lineHeight: '1.5', fontSize: '0.9rem' }}>
                                        Mon - Thu: 12:00pm - 10:00pm<br />
                                        Fri - Sat: 12:00pm - 10:30pm<br />
                                        Sun: 12:00pm - 9:30pm
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '1rem 2rem',
                                border: '1px solid var(--color-accent)',
                                color: 'var(--color-accent)',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--color-accent)';
                            }}
                        >
                            GET DIRECTIONS
                        </a>
                    </motion.div>

                    {/* Image/Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            height: '500px'
                        }}>
                            <img
                                src={image}
                                alt="Location Interior"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.8)'
                                }}
                            />
                            {/* Overlay Gradient */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '50%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }} />
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default LocationInfoSection;
