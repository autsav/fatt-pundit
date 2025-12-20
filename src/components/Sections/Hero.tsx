import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import defaultHero from '../../assets/images/hero_food.jpg';

interface HeroProps {
    location: string;
    backgroundImage?: string;
    reserveLink?: string;
}

const Hero = ({ location, backgroundImage, reserveLink }: HeroProps) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {/* Background with Parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage || defaultHero})`, // No overlay (0%)
                    filter: 'contrast(1.15) saturate(1.1) brightness(0.9)', // Color Grading
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y,
                    zIndex: -1
                }}
            />

            {/* Content */}
            <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-body)',
                        letterSpacing: '0.2rem',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        color: 'var(--color-accent)'
                    }}
                >
                    Welcome to
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: 'var(--spacing-lg)',
                        color: '#FFFFFF', // Force white for visibility against dark bg
                        textShadow: '0 4px 30px rgba(0,0,0,0.8)' // Stronger shadow for lift
                    }}
                >
                    FATT PUNDIT<br />
                    <span style={{ fontSize: '0.5em', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>{location}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', gap: 'var(--spacing-lg)', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <Link to={reserveLink || "/reserve"} style={{
                        padding: '1.2rem 3rem',
                        backgroundColor: 'var(--color-accent)',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.9rem'
                    }}>
                        Reserve a Table
                    </Link>
                    <a href="#menu" style={{
                        padding: '1.2rem 3rem',
                        border: '1px solid rgba(255,255,255,0.8)',
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.9rem',
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(0,0,0,0.2)'
                    }}>
                        View Menu
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
