import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import testimonialsBg from '../../assets/images/testimonials_bg.jpg';

const TESTIMONIALS = [
    {
        name: "Jay Rayner",
        source: "The Observer",
        quote: "This is a restaurant that knows exactly what it is doing. The momos are things of beauty.",
        rating: 5
    },
    {
        name: "Fay Maschler",
        source: "Evening Standard",
        quote: "Fatt Pundit is proving that Indo-Chinese food is a serious business. The crackling spinach is addictive.",
        rating: 5
    },
    {
        name: "Time Out London",
        source: "Critic's Choice",
        quote: "A riot of flavours. The lamb chops are smoky, tender and essential ordering.",
        rating: 5
    },
    {
        name: "Eater London",
        source: "Top Lists",
        quote: "One of the most exciting openings in Soho. The perfect blend of spice and comfort.",
        rating: 4
    }
];

const TestimonialsSection = () => {
    const sectionRef = useRef(null);

    // Parallax effect removed to fix alignment
    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section
            ref={sectionRef}
            style={{
                padding: '6rem 0',
                backgroundColor: '#1a1a1a',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${testimonialsBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.03,
                pointerEvents: 'none'
            }}>
                <FaQuoteLeft size={400} />
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', marginBottom: '4rem', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '3rem',
                        color: 'var(--color-accent)',
                        marginBottom: '1rem'
                    }}
                >
                    THE WORD ON THE STREET
                </motion.h2>
                <p style={{ color: '#888', fontFamily: 'var(--font-body)' }}>What the critics are saying.</p>
            </div>

            {/* Parallax Wrapper for Effect - Removed Parallax X */}
            <motion.div style={{ width: '100%' }}>
                {/* Scrolling Cards Container */}
                <div
                    className="thin-scrollbar"
                    style={{
                        width: '100%',
                        overflowX: 'auto',
                        display: 'flex',
                        gap: '2rem',
                        padding: '0 2rem 2rem 2rem', // Increased stable padding
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    {/* Standard Map without duplication or complex offsets */}
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                flex: '0 0 350px',
                                padding: '2rem',
                                backgroundColor: '#222',
                                borderRadius: '12px',
                                border: '1px solid #333',
                                position: 'relative',
                                scrollSnapAlign: 'center',
                                cursor: 'default' // Or pointer if intended to be interactive
                            }}
                        >
                            <div style={{ display: 'flex', gap: '5px', marginBottom: '1rem', color: '#FFD700' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        size={16}
                                        fill={i < item.rating ? "#FFD700" : "none"}
                                        strokeWidth={i < item.rating ? 0 : 2}
                                        color={i < item.rating ? "#FFD700" : "#555"}
                                    />
                                ))}
                            </div>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                color: '#ddd',
                                marginBottom: '2rem',
                                fontStyle: 'italic'
                            }}>
                                "{item.quote}"
                            </p>
                            <div>
                                <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '0.2rem' }}>
                                    {item.name}
                                </h4>
                                <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    {item.source}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>        </section>
    );
};

export default TestimonialsSection;
