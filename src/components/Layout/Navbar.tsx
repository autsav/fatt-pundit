import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/logos/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine current location context
    const isSoho = location.pathname.includes('/soho');
    const isCovent = location.pathname.includes('/covent-garden');
    const contextPrefix = isSoho ? '/soho' : isCovent ? '/covent-garden' : '';

    // Dynamic Navigation Links
    const navLinks = contextPrefix ? [
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reserve', href: `${contextPrefix}/reserve` },
        { name: 'Vouchers', href: `${contextPrefix}/vouchers` },
        { name: 'Click & Collect', href: `${contextPrefix}/click-and-collect` },
    ] : [
        { name: 'Vouchers', href: '/vouchers' },
        { name: 'Reserve', href: '/reserve' },
        { name: 'Click & Collect', href: '/click-and-collect' },
    ];

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
            backgroundColor: '#FFFFFF',
            boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            transition: { duration: 0.3 }
        }
    };

    // Helper to handle navigation
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            // Hash linking handling
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);

            if (element) {
                e.preventDefault();
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                // Update URL to reflect the section
                window.history.pushState(null, '', href);
            } else {
                // If element not found, strict redirection logic
                // If in a silo, we might want to go to the silo root first?
                // But generally #menu implies local. If not found, previously we went to '/' + href.
                // Now, if I am in /soho and click #menu (and it's not found?), should I go to /soho#menu?
                e.preventDefault();
                if (contextPrefix) {
                    navigate(`${contextPrefix}/${href}`);
                } else {
                    navigate('/' + href);
                }
            }
        } else if (href.startsWith('/')) {
            // Internal client-side routing
            e.preventDefault();
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
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
                    {/* Logo - Always goes to Global Home */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img
                            src={logo}
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
                                onClick={(e) => handleNavClick(e, link.href)}
                                style={{
                                    color: '#121212',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link to={contextPrefix ? `${contextPrefix}/reserve` : '/reserve'} style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: 'var(--color-accent)', // Keeping red accent
                            color: '#FFFFFF',
                            fontWeight: 600,
                            borderRadius: 'var(--radius-sm)',
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            textDecoration: 'none'
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
                        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
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
                                onClick={(e) => handleNavClick(e, link.href)}
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '2rem',
                                    color: '#121212', // Dark text
                                    textDecoration: 'none'
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
