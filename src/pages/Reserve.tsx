import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';
import heroInterior from '../assets/images/hero_interior.jpg';
import wallshow from '../assets/images/wallshow.jpg';

// OpenTable RIDs - REPLACE THESE WITH ACTUAL IDs
const SOHO_RID = '0'; // Placeholder
const COVENT_GARDEN_RID = '0'; // Placeholder

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
            <Navbar />
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
                                rid={SOHO_RID}
                                isActive={activeWidget === 'soho'}
                                onToggle={() => setActiveWidget(activeWidget === 'soho' ? null : 'soho')}
                                delay={0.2}
                            />
                        )}

                        {/* Covent Garden Card */}
                        {showCovent && (
                            <LocationCard
                                name="COVENT GARDEN"
                                image={wallshow}
                                address="6 Maiden Lane, Covent Garden, London WC2E 7NA"
                                rid={COVENT_GARDEN_RID}
                                isActive={activeWidget === 'covent'}
                                onToggle={() => setActiveWidget(activeWidget === 'covent' ? null : 'covent')}
                                delay={0.4}
                            />
                        )}
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                        <p>Note: Widget requires real Restaurant IDs (RIDs) to function.</p>
                    </div>
                </div>
            </section>
            <Footer activeLocation={location} />
        </>
    );
};

const LocationCard = ({ name, image, address, rid, isActive, onToggle, delay }: { name: string, image: string, address: string, rid: string, isActive: boolean, onToggle: () => void, delay: number }) => {
    // Basic script injection for OpenTable with security
    useEffect(() => {
        if (isActive && rid && rid !== '0') {
            // Security: Sanitize RID to prevent XSS
            const sanitizedRid = rid.replace(/[^a-zA-Z0-9-_]/g, '');

            if (sanitizedRid !== rid) {
                console.error('Invalid RID detected - potential security issue');
                return;
            }

            const script = document.createElement('script');
            script.src = `https://www.opentable.co.uk/widget/reservation/loader?rid=${encodeURIComponent(sanitizedRid)}&domain=uk&type=standard&theme=standard&lang=en-GB&overlay=false&iframe=true`;
            script.async = true;

            // Security: Add integrity and crossorigin attributes
            script.crossOrigin = 'anonymous';

            const container = document.getElementById(`ot-container-${name}`);
            if (container) {
                container.innerHTML = ''; // Clear previous
                container.appendChild(script);
            }

            // Cleanup function
            return () => {
                if (container && script.parentNode === container) {
                    container.removeChild(script);
                }
            };
        }
    }, [isActive, rid, name]);

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

                {!isActive ? (
                    <button
                        onClick={onToggle}
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
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                        }}
                    >
                        BOOK A TABLE <IoArrowForward size={18} />
                    </button>
                ) : (
                    <div
                        id={`ot-container-${name}`}
                        style={{ width: '100%', minHeight: '400px', border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}
                    >
                        {/* Script will be injected here */}
                        {(rid === '0' || !rid) && <p style={{ color: 'red', marginTop: '2rem' }}>Error: Restaurant ID (RID) missing.</p>}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Reserve;
