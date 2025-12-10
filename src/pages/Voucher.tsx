import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Gift } from 'lucide-react';

const Vouchers = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Navbar />
            <div style={{
                minHeight: '100vh',
                paddingTop: '8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'radial-gradient(circle at center, #1E1E1E, #121212)',
            }}>

                <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Give the Gift of Flavour</h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Perfect for any occasion.</p>
                </div>

                <div style={{ position: 'relative', width: '300px', height: '200px', cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
                    <AnimatePresence>
                        {!isOpen && (
                            <motion.div
                                initial={{ rotateX: 0 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'var(--color-accent)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#121212',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    transformStyle: 'preserve-3d'
                                }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                            >
                                <Gift size={48} />
                                <span style={{ marginLeft: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>OPEN ME</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Vouchers Grid revealed after 'opening' */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                            style={{
                                position: 'fixed', // Break out of container
                                top: '50%',
                                left: '50%',
                                x: '-50%',
                                y: '-50%',
                                width: '90%',
                                maxWidth: '800px',
                                backgroundColor: 'var(--color-bg-secondary)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                                zIndex: 60,
                                border: '1px solid var(--color-accent)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h2>Select Voucher</h2>
                                <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>Close</button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                {[50, 100, 150].map((amount) => (
                                    <div key={amount} style={{
                                        padding: '2rem',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }} className="voucher-card">
                                        <h3 style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>£{amount}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>Monetary Voucher</p>
                                        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'white', color: 'black', borderRadius: '4px' }}>Buy Now</button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsOpen(false)}
                        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 55 }}
                    />
                )}
            </div>
            <Footer />
        </>
    );
};

export default Vouchers;
