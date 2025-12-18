import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';
import heroInterior from '../assets/images/hero_interior.jpg';
import wallshow from '../assets/images/wallshow.jpg';

// OpenTable URLs
const SOHO_URL = 'https://www.opentable.co.uk/r/fatt-pundit-london';
const COVENT_GARDEN_URL = 'https://www.opentable.co.uk/r/fatt-pundit-covent-garden-london';

const Reserve = () => {
    const { location } = useParams();
    const [activeWidget, setActiveWidget] = useState<string | null>(null);

    useEffect(() => {
        if (location) {
            if (location.includes('soho')) setActiveWidget('soho');
            if (location.includes('covent')) setActiveWidget('covent');
        }
    }, [location]);

    const showSoho = !location || location.includes('soho');
    const showCovent = !location || location.includes('covent');

    return (
        <>
            <section style={{
                minHeight: '100vh',
                paddingTop: '8rem',
                paddingBottom: '4rem',
                backgroundImage: 'radial-gradient(circle at top right, #1E1E1E, #121212)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container" style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                            {location ? `${location.replace(/-/g, ' ').toUpperCase()} RESERVATION` : 'RESERVE A TABLE'}
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            {location ? 'Book your table below.' : 'Choose your preferred location below.'}
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: location ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        justifyContent: 'center',
                        maxWidth: location ? '600px' : '1000px',
                        margin: '0 auto'
                    }}>
                        {/* Soho Card */}
                        {showSoho && (
                            <LocationCard
                                name="SOHO"
                                image={heroInterior}
                                address="77 Berwick Street, Soho, London W1F 8TH"
                                bookingUrl={SOHO_URL}
                                delay={0.2}
                            />
                        )}

                        {/* Covent Garden Card */}
                        {showCovent && (
                            <LocationCard
                                name="COVENT GARDEN"
                                image={wallshow}
                                address="6 Maiden Lane, Covent Garden, London WC2E 7NA"
                                bookingUrl={COVENT_GARDEN_URL}
                                delay={0.4}
                            />
                        )}
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                        <p>Note: Widget requires real Restaurant IDs (RIDs) to function.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

const LocationCard = ({ name, image, address, bookingUrl, delay }: { name: string, image: string, address: string, bookingUrl: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ height: '250px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={`${name} Interior`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--color-accent)' }}>{name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: '#ccc' }}>
                    <FaMapMarkerAlt size={18} color="var(--color-accent)" />
                    <span style={{ fontSize: '0.95rem' }}>{address}</span>
                </div>

                <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        marginTop: 'auto',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        backgroundColor: 'var(--color-accent)',
                        color: 'black',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        transition: 'transform 0.2s',
                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}
                >
                    BOOK ON OPENTABLE <IoArrowForward size={18} />
                </a>
            </div>
        </motion.div>
    );
};

export default Reserve;
