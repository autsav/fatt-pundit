import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DoodleButton from '../components/UI/DoodleButton';
import Steam from '../components/Effects/Steam';
import Glisten from '../components/Effects/Glisten';
import momoStart from '../assets/images/momo_plate_start.png';
import momoFinal from '../assets/images/momo_plate_final.png';
import rightPlate from '../assets/images/right_plate.png';
import cracklingFinal from '../assets/images/after-crackling.png';
import tigerStamp from '../assets/logos/tiger_stamp.png';

const Home = () => {
    const [isHoveringSoho, setIsHoveringSoho] = useState(false);
    const [isHoveringCovent, setIsHoveringCovent] = useState(false);
    const location = useLocation();

    // Check for hash on load/change
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const offset = 80; // Navbar height
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100); // Slight delay for mount
        }
    }, [location]);

    // Parallax logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    // Plate movement (opposite to mouse)
    const plateX = useSpring(useTransform(mouseX, [0, window.innerWidth], [20, -20]), springConfig);
    const plateY = useSpring(useTransform(mouseY, [0, window.innerHeight], [20, -20]), springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <style>{`
                /* Desktop Default Styles */
                .plate-wrapper {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 0;
                    pointer-events: none;
                    width: 450px; /* Scaled width for desktop */
                    aspect-ratio: 2528 / 1696; /* Exact requested aspect ratio */
                    height: auto; /* Let aspect-ratio determine height */
                }
                .plate-left {
                    left: 2%; /* Pulled slightly outwards to accommodate wider ratio */
                }
                .plate-right {
                    right: 2%;
                }

                /* Mobile/Tablet Styles */
                @media (max-width: 768px) {
                    .plate-wrapper {
                        transform: none !important;
                        position: absolute !important;
                        width: 30vw !important; /* Smaller width to avoid overlapping text */
                        max-width: 140px !important; /* Cap width */
                        aspect-ratio: 2528 / 1696 !important;
                        height: auto !important;
                        /* Disable parallax on mobile by overriding transforms if needed, 
                           though framer motion styles usually override css classes.
                           Ideally we conditionally apply the 'style' prop in JS. */
                    }
                    .plate-left {
                        top: 10px !important; /* Pushed to top corner */
                        left: -10px !important;
                    }
                    .plate-right {
                        bottom: 10px !important; /* Pushed to bottom corner */
                        right: -10px !important;
                        top: auto !important;
                    }
                }
            `}</style>

            {/* Artistic Momo Plates - Left Side Wrapper for Crossfade */}
            {/* Artistic Momo Plates - Left Side Wrapper for Crossfade */}
            <motion.div
                className="plate-wrapper plate-left"
                initial={{ x: '-100vw', y: '-50%', opacity: 0, rotate: -30 }} // Slide in from far left
                animate={{ x: 0, y: '-50%', opacity: 1, rotate: -5 }} // Maintain y: -50% for centering
                transition={{ duration: 1.2, delay: 0.2, type: 'spring', bounce: 0.3 }}
            // Note: removed inline positioning styles in favor of CSS classes
            >
                {/* Default Start Image */}
                <motion.img
                    src={momoStart}
                    alt="Momo Plate Start"
                    animate={{ opacity: isHoveringSoho ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        x: plateX, y: plateY, // Parallax here
                        objectFit: 'contain', // Ensures image fits perfectly inside the symmetric box
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.3))',
                    }}
                />
                {/* Hover Final Image */}
                <motion.img
                    src={momoFinal}
                    alt="Momo Plate Final"
                    animate={{ opacity: isHoveringSoho ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        x: plateX, y: plateY, // Parallax here
                        objectFit: 'contain',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.3))',
                    }}
                />

                {/* Glisten Effect on Hover (Sauce Shine) */}
                {isHoveringSoho && <Glisten />}

                {/* Steam Effect only for Momos */}
                <Steam />
            </motion.div>

            {/* Right Side Plate Wrapper for Crossfade */}
            <motion.div
                className="plate-wrapper plate-right"
                initial={{ x: '100vw', y: '-50%', opacity: 0, rotate: 30 }} // Slide in from far right
                animate={{ x: 0, y: '-50%', opacity: 1, rotate: 5 }} // Maintain y: -50% for centering
                transition={{ duration: 1.2, delay: 0.2, type: 'spring', bounce: 0.3 }}
            // Note: removed inline positioning styles in favor of CSS classes
            >
                {/* Default Right Plate */}
                <motion.img
                    src={rightPlate}
                    alt="Right Plate Start"
                    animate={{ opacity: isHoveringCovent ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        x: plateX, y: plateY, // Parallax here
                        objectFit: 'contain',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.3))',
                    }}
                />
                {/* Hover Crackling Image */}
                <motion.img
                    src={cracklingFinal}
                    alt="Crackling Plate Final"
                    animate={{ opacity: isHoveringCovent ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        x: plateX, y: plateY, // Parallax here
                        objectFit: 'contain',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.3))',
                    }}
                />

                {/* Glisten Effect on Hover (Sauce Shine) */}
                {isHoveringCovent && <Glisten />}
            </motion.div>


            {/* Tiger Stamp Logo */}
            <motion.img
                src={tigerStamp}
                alt="Fatt Pundit Tiger Stamp"
                initial={{ opacity: 0, scale: 4, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{
                    duration: 0.7, /* Slower duration */
                    type: 'spring',
                    stiffness: 220, /* Reduced stiffness for slower impact */
                    damping: 20,
                    mass: 1.2
                }}
                style={{ width: '150px', marginBottom: '2rem' }}
            />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }} /* Adjusted delay */
                style={{
                    marginBottom: '1rem',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-heading)'
                }}
            >
                FATT PUNDIT
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }} /* Adjusted delay */
                style={{ marginBottom: '2rem', color: '#121212', fontFamily: 'var(--font-body)' }}
            >
                Where Chinese Craftsmanship Meets Indian Spices
            </motion.p>

            {/* Creative Choose Location Prompt */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }} /* Adjusted delay */
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    color: '#333',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em'
                }}
            >
                <div style={{ height: '1px', width: '30px', background: '#333' }}></div>
                <span>CHOOSE YOUR LOCATION</span>
                <div style={{ height: '1px', width: '30px', background: '#333' }}></div>
            </motion.div>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <DoodleButton
                    to="/soho"
                    onMouseEnter={() => setIsHoveringSoho(true)}
                    onMouseLeave={() => setIsHoveringSoho(false)}
                >
                    SOHO
                </DoodleButton>
                <DoodleButton
                    to="/covent-garden"
                    onMouseEnter={() => setIsHoveringCovent(true)}
                    onMouseLeave={() => setIsHoveringCovent(false)}
                >
                    COVENT GARDEN
                </DoodleButton>
            </div>
        </div>
    );
};

export default Home;
