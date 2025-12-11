import { motion } from 'framer-motion';
import DoodleButton from '../components/UI/DoodleButton';

const Home = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            {/* Artistic Momo Plate - Left Side */}
            <motion.img
                src="/src/assets/images/plate_momos_new.jpg"
                alt="Momo Plate"
                initial={{ x: -100, opacity: 0, rotate: -15, y: "-50%" }}
                animate={{ x: 0, opacity: 1, rotate: -5, y: "-50%" }}
                transition={{ duration: 1, delay: 0.5, type: 'spring' }}
                style={{
                    position: 'absolute',
                    left: '5%',
                    top: '50%',
                    width: '400px', // Increased by ~30%
                    maxWidth: '35vw',
                    zIndex: 0,
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.3))', // Enhanced shadow for depth
                }}
            />


            {/* Tiger Stamp Logo */}
            <motion.img
                src="/src/assets/logos/tiger_stamp.png"
                alt="Fatt Pundit Tiger Stamp"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{ width: '150px', marginBottom: '2rem' }}
            />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    color: 'var(--color-bg-primary)',
                    fontFamily: 'var(--font-heading)'
                }}
            >
                FATT PUNDIT
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#121212', fontFamily: 'var(--font-body)' }}
            >
                MOMOS FROM THE HIMALAYAS
            </motion.p>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <DoodleButton to="/soho">
                    SOHO
                </DoodleButton>
                <DoodleButton to="/covent-garden">
                    COVENT GARDEN
                </DoodleButton>
            </div>
        </div>
    );
};

export default Home;
