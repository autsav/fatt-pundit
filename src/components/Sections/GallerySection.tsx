import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

// Import images
import sohoTexture from '../../assets/images/soho_texture.png';
import bgTexture from '../../assets/images/texture.jpg';
import img1 from '../../assets/images/1.jpg';
import brownie from '../../assets/images/brownie.jpg';
import crab from '../../assets/images/crab65.jpg';
import groupPic from '../../assets/images/group pic.jpg';
import group3 from '../../assets/images/group3.jpg';
import group4 from '../../assets/images/group4.jpg';
import heroFood from '../../assets/images/hero_food.jpg';
import lambchop from '../../assets/images/lambchop.jpg';
import malabar from '../../assets/images/malabar curry.jpg';
import mockChick from '../../assets/images/mock chick.jpg';
import momo from '../../assets/images/momo.jpg';
import prawns from '../../assets/images/prawns.jpg';
import rabbit from '../../assets/images/rabbit.jpg';
import sticky from '../../assets/images/sticky.jpg';
import tea from '../../assets/images/tea.jpg';
import vegHakka from '../../assets/images/veg hakka.jpg';
import vegMomo from '../../assets/images/veg momo.jpg';
import wallshow from '../../assets/images/wallshow.jpg';

const images = [
    img1, brownie, crab, groupPic, group3, group4,
    heroFood, lambchop, malabar, mockChick, momo,
    prawns, rabbit, sticky, tea, vegHakka, vegMomo, wallshow
];

const GallerySection = ({ location }: { location?: string }) => {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Create parallax effects for different columns
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 50, damping: 20 });

    const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
    const y2 = useTransform(smoothProgress, [0, 1], [0, -600]); // Moves faster (middle column)
    const y3 = useTransform(smoothProgress, [0, 1], [0, -100]);
    const y4 = useTransform(smoothProgress, [0, 1], [0, -400]);

    // Distribute images into 4 columns
    const col1 = images.slice(0, 5);
    const col2 = images.slice(5, 10);
    const col3 = images.slice(10, 14);
    const col4 = images.slice(14, 18);

    const isSoho = location === 'soho';

    return (
        <section
            id="gallery"
            ref={containerRef}
            style={{
                padding: '4rem 1rem',
                backgroundColor: isSoho ? '#151313' : '#F4F4F2',
                backgroundImage: isSoho ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${sohoTexture})` : `url(${bgTexture})`,
                backgroundBlendMode: isSoho ? 'normal' : 'multiply',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: isSoho ? 'fixed' : 'scroll', // Keep clean look for light paper, fixed for dark texture
                overflow: 'hidden',
                minHeight: '150vh'
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        textAlign: 'center',
                        fontSize: '3rem',
                        marginBottom: '6rem',
                        color: 'var(--color-accent)',
                        letterSpacing: '2px'
                    }}
                >
                    THE GALLERY
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem',
                    alignItems: 'start' // Important for uneven columns
                }}>
                    <Column images={col1} y={y1} onSelect={setSelectedImage} />
                    <Column images={col2} y={y2} onSelect={setSelectedImage} />
                    <Column images={col3} y={y3} onSelect={setSelectedImage} />
                    <Column images={col4} y={y4} onSelect={setSelectedImage} />
                </div>

                <style>{`
                    @media (max-width: 900px) {
                        #gallery > div > div {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (max-width: 550px) {
                        #gallery > div > div {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-40px',
                                    right: '-40px',
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <IoClose size={32} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Gallery Fullscreen"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '85vh',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Sub-component for a column
interface ColumnProps {
    images: string[];
    y: any;
    onSelect: (src: string) => void;
}

const Column = ({ images, y, onSelect }: ColumnProps) => {
    return (
        <motion.div style={{ y, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {images.map((src, i) => (
                <motion.div
                    key={i}
                    onClick={() => onSelect(src)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    whileHover={{
                        scale: 1.05,
                        zIndex: 10,
                        transition: { duration: 0.2 }
                    }}
                    style={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        // Glow Effect: Backlight
                        boxShadow: '0 10px 40px rgba(255, 255, 255, 0.15)',
                        cursor: 'pointer',
                        background: 'rgba(255,255,255,0.05)' // Subtle tint behind
                    }}
                >
                    <img
                        src={src}
                        alt="Fatt Pundit Dish"
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover'
                        }}
                    />

                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '40%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        opacity: 0.6
                    }} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default GallerySection;
