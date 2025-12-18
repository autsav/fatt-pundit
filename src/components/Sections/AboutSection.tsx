import { motion } from 'framer-motion';
// Using the red logo as it's likely the primary brand text logo
import logo from '../../assets/logos/fatt_pundit_red_logo.png';

const AboutSection = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            backgroundColor: '#121212', // Dark background matching site theme
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Visual Anchor - Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <img
                        src={logo}
                        alt="Fatt Pundit Logo"
                        style={{
                            width: '250px',
                            height: 'auto',
                            maxWidth: '100%',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 style={{
                        color: 'var(--color-accent)', // Consistent brand color
                        fontFamily: 'inherit',
                        fontSize: '2rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        fontWeight: 'bold'
                    }}>
                        About Fatt Pundit
                    </h2>

                    <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.8',
                        color: '#e0e0e0',
                        marginBottom: '1.5rem',
                        fontFamily: 'sans-serif'
                    }}>
                        Originating from Kolkata, this unique cuisine was invented when the Hakka people migrated to India from the Chinese province of Canton, bringing with them their culinary treasures. Incorporating traditional Chinese cooking techniques with the spices of India to create something both new yet familiar, Indo Chinese is now an integral part of Indian cuisine.
                    </p>

                    <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.8',
                        color: '#e0e0e0',
                        fontFamily: 'sans-serif'
                    }}>
                        Playfully named Fatt Pundit it’s a combination of the common Chinese surname ‘Fatt’ with the Indian word ‘Pundit’ (a scholar).
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
