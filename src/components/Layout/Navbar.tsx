import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaTree } from 'react-icons/fa'; // Christmas Tree Icon
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
        { name: 'About', href: `${contextPrefix}/about` },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reserve', href: `${contextPrefix}/reserve` },
        { name: 'Vouchers', href: `${contextPrefix}/vouchers` },
        { name: 'Click & Collect', href: `${contextPrefix}/click-and-collect` },
    ] : [
        { name: 'About', href: '/about' },
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
            backgroundColor: '#ffffff', // Always white to match logo background
            boxShadow: isScrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : 'none',
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
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo - Always goes to Global Home */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        {/* Festive Tree Icon */}
                        <div style={{ color: '#0f5132', fontSize: '1.5rem', filter: 'drop-shadow(0 0 2px #gold)' }}>
                            <FaTree />
                        </div>
                        <img
                            src={logo}
                            alt="Fatt Pundit"
                            className="nav-logo"
                            style={{ width: 'auto' }}
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
                                    color: '#1A1A1A', // Always dark text
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
                        style={{
                            display: 'none',
                            color: '#1A1A1A', // Always dark text
                            fontSize: '2rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            zIndex: 60
                        }}
                        className="mobile-toggle"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </motion.nav >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
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
                                backgroundColor: '#ffffff', // White background
                                // backgroundImage: 'url("https://www.fattpundit.co.uk/wp-content/uploads/2021/04/texture.jpg")', // Using CSS var instead
                                backgroundImage: 'none', // Remove dark pattern
                                backgroundRepeat: 'repeat',
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
                                        color: '#1A1A1A', // Dark text
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div style={{ marginTop: '1rem' }}>
                                {/* Theme toggle removed from mobile menu */}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >

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
          .nav-logo { height: 85px; }
          
          /* Mobile Optimizations */
          @media (max-width: 767px) {
            .mobile-toggle { display: block !important; }
            nav { padding: 0.8rem 0 !important; } /* Reduce container padding */
            .nav-logo { height: 55px !important; } /* Smaller logo */
          }

          .nav-logo {
            filter: none;
            transition: filter 0.3s ease;
          }
      `}</style>
        </>
    );
};

export default Navbar;
// Re-triggering deployment: manual refresh per user request [Refreshed]
