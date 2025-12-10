import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
    location: string;
}

const Hero = ({ location }: HeroProps) => {
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
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/src/assets/images/hero_food.jpg)',
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
                        marginBottom: '2rem',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}
                >
                    FATT PUNDIT<br />
                    <span style={{ fontSize: '0.5em', fontStyle: 'italic', fontWeight: 400 }}>{location}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1rem' }}
                >
                    <Link to="/reserve" style={{
                        padding: '1rem 2.5rem',
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-bg-primary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1rem',
                        borderRadius: 'var(--radius-sm)'
                    }}>
                        Reserve a Table
                    </Link>
                    <a href="#menu" style={{
                        padding: '1rem 2.5rem',
                        border: '1px solid white',
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1rem',
                        borderRadius: 'var(--radius-sm)',
                        backdropFilter: 'blur(5px)'
                    }}>
                        View Menu
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
