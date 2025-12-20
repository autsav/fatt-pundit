import { motion } from 'framer-motion';
import aboutStamp from '../../assets/images/about_stamp.png';

import bgTexture from '../../assets/images/texture.jpg';

const AboutSection = () => {
    return (
        <section style={{
            padding: 'var(--spacing-2xl) var(--spacing-md)', // Generous top/bottom padding
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
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-xl)' // Much wider gap between image and text
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
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-md)' // Safety gap on wrap
                    }}
                >
                    <img
                        src={aboutStamp}
                        alt="Fatt Pundit Stamp"
                        style={{
                            width: '100%',
                            maxWidth: '450px', // Slightly larger max width
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
                        textAlign: 'left',
                        paddingLeft: 'var(--spacing-md)' // Subtle indent for visual hierarchy
                    }}
                >
                    <h2 style={{
                        color: 'var(--color-accent)',
                        fontFamily: 'inherit',
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', // Responsive scaling
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: 'var(--spacing-lg)', // Increased breathing room
                        fontWeight: 'bold',
                        lineHeight: 1.1
                    }}>
                        About <br /> Fatt Pundit
                    </h2>

                    <p style={{
                        fontSize: '1.2rem', // Slightly larger body text
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: 'var(--spacing-md)',
                        fontFamily: 'system-ui, -apple-system, sans-serif' // Clean typography
                    }}>
                        Originating from Kolkata, this unique cuisine was invented when the Hakka people migrated to India from the Chinese province of Canton, bringing with them their culinary treasures. Incorporating traditional Chinese cooking techniques with the spices of India to create something both new yet familiar, Indo Chinese is now an integral part of Indian cuisine.
                    </p>

                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: '#333333',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                        Playfully named Fatt Pundit it’s a combination of the common Chinese surname ‘Fatt’ with the Indian word ‘Pundit’ (a scholar).
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
