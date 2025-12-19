import { motion } from 'framer-motion';
import aboutStamp from '../../assets/images/about_stamp.png';

import bgTexture from '../../assets/images/texture.jpg';

const AboutSection = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            backgroundColor: '#F4F4F2', // Light paper-like background
            backgroundImage: `url(${bgTexture})`,
            backgroundBlendMode: 'multiply',
            color: '#121212', // Dark text
            position: 'relative',
            zIndex: 10,
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row', // Force row on desktop by default, will need generic responsive check or use window width
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4rem'
            }}>
                {/* Image Section (Beside) - First in markup, or visual order */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: '1 1 400px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src={aboutStamp}
                        alt="Fatt Pundit Stamp"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            objectFit: 'contain',

                        }}
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        flex: '1 1 500px',
                        textAlign: 'left'
                    }}
                >
                    <h2 style={{
                        color: 'var(--color-accent)',
                        fontFamily: 'inherit',
                        fontSize: '3rem', // Larger title
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem',
                        fontWeight: 'bold',
                        lineHeight: 1.1
                    }}>
                        About <br /> Fatt Pundit
                    </h2>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#333333', // Dark text for readability on light bg
                        marginBottom: '1.5rem',
                        fontFamily: 'sans-serif'
                    }}>
                        Originating from Kolkata, this unique cuisine was invented when the Hakka people migrated to India from the Chinese province of Canton, bringing with them their culinary treasures. Incorporating traditional Chinese cooking techniques with the spices of India to create something both new yet familiar, Indo Chinese is now an integral part of Indian cuisine.
                    </p>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#333333',
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
