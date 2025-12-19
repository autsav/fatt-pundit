import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import assets (Images for now, simulating video mood)
import sohoStorefront from '../../assets/images/soho_storefront.jpg'; // Soho vibe
import coventStorefront from '../../assets/images/covent_garden_storefront_new.jpg'; // Covent Garden vibe
import centerMomo from '../../assets/images/center_momo.jpg';
import '../../styles/components/LocationSplit.css';

const FloatingParticles = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const particleCount = 20;
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 20 }}>
            {Array.from({ length: particleCount }).map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        borderRadius: '50%',
                        backgroundColor: i % 3 === 0 ? '#d4af37' : '#ff3333', // Gold and Red (Spices/Fire)
                        opacity: 0.5,
                        boxShadow: '0 0 6px rgba(255, 100, 100, 0.4)'
                    }}
                    animate={{
                        y: [-20, -1000],
                        x: [0, (Math.random() - 0.5) * 100],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10, // Slow rise
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: 'linear'
                    }}
                />
            ))}
        </div>
    );
};

const LocationDuel = () => {
    const [activeSide, setActiveSide] = useState<'soho' | 'covent' | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSelection = (location: 'soho' | 'covent') => {
        // Navigate with a seamless feel - for now standard router push
        const path = location === 'soho' ? '/soho' : '/covent-garden';
        navigate(path);
    };

    // Animation Variants - Premium Spring Physics
    const transitionConfig = { type: 'spring' as const, stiffness: 150, damping: 22, mass: 1.2 };

    return (
        <section className="split-container">
            {/* SOHO SIDE */}
            <motion.div
                className={`split-panel soho-panel ${activeSide === 'soho' ? 'active' : ''}`}
                style={{
                    zIndex: activeSide === 'soho' ? 20 : 10,
                }}
                animate={isMobile ? {
                    height: activeSide === 'covent' ? '35%' : activeSide === 'soho' ? '65%' : '50%',
                    width: '100%'
                } : {
                    width: activeSide === 'covent' ? '35%' : activeSide === 'soho' ? '65%' : '50%',
                    height: '100%'
                }}
                transition={transitionConfig}
                onMouseEnter={() => !isMobile && setActiveSide('soho')}
                onMouseLeave={() => !isMobile && setActiveSide(null)}
                onClick={() => isMobile ? setActiveSide(activeSide === 'soho' ? null : 'soho') : handleSelection('soho')}
            // On mobile, tap to expand first? Or tap to navigate?
            // User said "tapping one expands it". 
            // Then how to navigate? Double tap? Or "Select" button?
            // I'll make title clickable or add a button if expanded.
            // Or simplified: Click always navigates on Desktop. 
            // On Mobile: Click expands to 70%. If already 70%, Navigate?
            // Let's implement: If active, navigate. Else expand.
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isMobile) {
                            if (activeSide === 'soho') handleSelection('soho');
                            else setActiveSide('soho');
                        } else {
                            handleSelection('soho');
                        }
                    }}
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* Background with Zoom Effect */}
                    <motion.div
                        style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: `url(${sohoStorefront})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        animate={{
                            scale: activeSide === 'soho' ? 1.1 : activeSide ? 1 : [1, 1.05],
                            filter: activeSide === 'soho' ? 'grayscale(0%) brightness(1.1)' : 'grayscale(100%) brightness(0.6)'
                        }}
                        transition={{
                            duration: activeSide ? 1.5 : 10,
                            repeat: activeSide ? 0 : Infinity,
                            repeatType: "mirror"
                        }}
                    />
                    {/* Floating Embers/Spices */}
                    <FloatingParticles />

                    {/* Dark Overlay Element */}
                    <div className="dark-overlay"></div>
                    {/* Text Overlay */}
                    <div className="text-overlay">
                        <h2
                            className="location-title"
                            style={{
                                color: activeSide === 'soho' ? 'var(--color-accent)' : 'white',
                                textShadow: activeSide === 'soho' ? '0 0 20px rgba(0,0,0,0.5)' : 'none',
                            }}
                        >SOHO</h2>

                        <AnimatePresence>
                            {activeSide === 'soho' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="motto-text" style={{ color: '#ddd' }}>
                                        FROM GUANGDONG TO CALCUTTA
                                    </p>
                                    <p className="address-text" style={{ color: '#bbb' }}>
                                        77 Berwick Street, Soho
                                    </p>
                                    {isMobile && <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'white', color: 'black', border: 'none', borderRadius: '4px' }}>ENTER</button>}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* CENTER LOGO */}
            <motion.div
                className="center-logo"
                style={{
                    width: isMobile ? '90px' : '130px', // Increased by ~30%
                    height: isMobile ? '90px' : '130px',
                }}
                initial={{ x: "-50%", y: "-50%" }}
                animate={{
                    x: "-50%",
                    y: "-50%",
                    left: isMobile ? '50%' : activeSide === 'soho' ? '65%' : activeSide === 'covent' ? '35%' : '50%',
                    top: isMobile ? (activeSide === 'soho' ? '65%' : activeSide === 'covent' ? '35%' : '50%') : '50%',
                    rotate: activeSide === 'soho' ? -15 : activeSide === 'covent' ? 15 : 0,
                    scale: activeSide ? 1.2 : 1
                }}
                transition={transitionConfig}
            >
                <img
                    src={centerMomo}
                    alt="Fatt Pundit Logo"
                    className="logo-img"
                    style={{
                        width: '100%', // Full fit
                        height: '100%',
                        objectFit: 'cover', // It's a photo now
                        // Removed filters as it's a full color photo
                    }}
                />
            </motion.div>

            {/* COVENT GARDEN SIDE */}
            <motion.div
                className={`split-panel covent-panel ${activeSide === 'covent' ? 'active' : ''}`}
                style={{
                    zIndex: activeSide === 'covent' ? 20 : 10
                }}
                animate={isMobile ? {
                    height: activeSide === 'soho' ? '35%' : activeSide === 'covent' ? '65%' : '50%',
                    width: '100%'
                } : {
                    width: activeSide === 'soho' ? '35%' : activeSide === 'covent' ? '65%' : '50%',
                    height: '100%'
                }}
                transition={transitionConfig}
                onMouseEnter={() => !isMobile && setActiveSide('covent')}
                onMouseLeave={() => !isMobile && setActiveSide(null)}
            // Mobile logic
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isMobile) {
                            if (activeSide === 'covent') handleSelection('covent');
                            else setActiveSide('covent');
                        } else {
                            handleSelection('covent');
                        }
                    }}
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* Background */}
                    <motion.div
                        style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: `url(${coventStorefront})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        animate={{
                            scale: activeSide === 'covent' ? 1.1 : activeSide ? 1 : [1, 1.05],
                            filter: activeSide === 'covent' ? 'grayscale(0%) brightness(1.1)' : 'grayscale(100%) brightness(0.6)'
                        }}
                        transition={{
                            duration: activeSide ? 1.5 : 10,
                            repeat: activeSide ? 0 : Infinity,
                            repeatType: "mirror"
                        }}
                    />
                    {/* Floating Embers/Spices */}
                    <FloatingParticles />

                    {/* Dark Overlay Gradient */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 10 }}></div>
                    {/* Text Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        width: '100%',
                        zIndex: 30
                    }}>
                        <h2 style={{
                            fontFamily: "inherit",
                            fontWeight: 'bold',
                            fontSize: isMobile ? '2.5rem' : '5vw',
                            color: activeSide === 'covent' ? 'var(--color-accent)' : 'white',
                            textShadow: activeSide === 'covent' ? '0 0 20px rgba(0,0,0,0.5)' : 'none',
                            transition: 'color 0.5s',
                            margin: 0
                        }}>COVENT GARDEN</h2>

                        <AnimatePresence>
                            {activeSide === 'covent' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="motto-text" style={{ color: '#f0e68c' }}>
                                        FROM GUANGDONG TO CALCUTTA
                                    </p>
                                    <p className="address-text" style={{ color: '#e0d68a' }}>
                                        6 Maiden Lane, Covent Garden
                                    </p>
                                    {isMobile && <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#d4af37', color: 'black', border: 'none', borderRadius: '4px' }}>ENTER</button>}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

        </section >
    );
};

export default LocationDuel;
