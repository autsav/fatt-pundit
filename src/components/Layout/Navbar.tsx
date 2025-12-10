import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '/reserve' },
    { name: 'Vouchers', href: '/vouchers' }, // Changed to routing as per redesign
    { name: 'Click & Collect', href: '#collect' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            backgroundColor: '#FFFFFF', // User requested white background
            boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <motion.nav
                variants={navbarVariants}
                initial="visible"
                animate="visible"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: '1.5rem 0',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo - Inverted to be visible on white */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/src/assets/logos/logo.png"
                            alt="Fatt Pundit"
                            style={{ height: '60px', width: 'auto' }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: '#121212', // Dark text for white background
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    fontWeight: 600
                                }}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link to="/reserve" style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: 'var(--color-accent)', // Keeping red accent
                            color: '#FFFFFF',
                            fontWeight: 600,
                            borderRadius: 'var(--radius-sm)',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem'
                        }}>
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ display: 'none', color: '#121212' }} // Dark icon
                        className="mobile-toggle"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#FFFFFF', // White background
                            zIndex: 40,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '2rem',
                                    color: '#121212' // Dark text
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-toggle { display: block !important; }
        }
        .nav-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
        </>
    );
};

export default Navbar;
