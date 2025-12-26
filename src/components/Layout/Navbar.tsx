import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logos/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current location context
  const isSoho = location.pathname.includes("/soho");
  const isCovent = location.pathname.includes("/covent-garden");
  const contextPrefix = isSoho ? "/soho" : isCovent ? "/covent-garden" : "";

  // Dynamic Navigation Links
  const navLinks = contextPrefix
    ? [
      { name: "Home", href: contextPrefix },
      { name: "About", href: `${contextPrefix}/about` },
      { name: "Menu", href: "#menu" },
      { name: "Gallery", href: "#gallery" },
      { name: "Reserve", href: `${contextPrefix}/reserve` },
      { name: "Vouchers", href: `${contextPrefix}/vouchers` },
      { name: "Click & Collect", href: `${contextPrefix}/click-and-collect` },
    ]
    : [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Vouchers", href: "/vouchers" },
      { name: "Reserve", href: "/reserve" },
      { name: "Click & Collect", href: "/click-and-collect" },
    ];

  // Filter out Home, Menu, and Gallery for mobile menu
  const mobileNavLinks = navLinks.filter(
    (link) => !["Home", "Menu", "Gallery"].includes(link.name)
  );

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]); // Listen to all location changes

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Explicit cleanup with setTimeout to ensure it runs after state update
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 0);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navbarVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      backgroundColor: "#ffffff", // Always white to match logo background
      boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
      transition: { duration: 0.3 },
    },
  };

  // Helper to handle navigation (Legacy support for hash links and desktop)
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Only handle hash links manually. Route links are handled by <Link> or global listener.
    if (href.startsWith("#")) {
      setIsMobileMenuOpen(false);
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
          behavior: "smooth",
        });
        // Update URL to reflect the section
        window.history.pushState(null, "", href);
      } else {
        // If element not found, strict redirection logic
        e.preventDefault();
        if (contextPrefix) {
          navigate(`${contextPrefix}/${href}`);
        } else {
          navigate("/" + href);
        }
      }
    }
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="visible"
        animate="visible"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999, // Increased z-index
          padding: "1.5rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo - Always goes to Global Home */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false); // Close menu on logo click
            }}
          >
            <img
              src={logo}
              alt="Fatt Pundit"
              className="nav-logo"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "none", gap: "2rem", alignItems: "center" }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isHash = link.href.startsWith("#");
              const style = {
                color: "#1A1A1A",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const, // Explicit cast for TS
                position: "relative" as const,
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
              };

              if (isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={style}
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  // No need to close mobile menu on desktop, but harmless
                  style={style}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to={contextPrefix ? `${contextPrefix}/reserve` : "/reserve"}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--color-accent)", // Keeping red accent
                color: "#FFFFFF",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "none",
              color: "#1A1A1A", // Always dark text
              fontSize: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 1001, // Highest z-index for toggle
              position: "relative",
            }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                zIndex: 998,
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "50vw",
                minWidth: "280px",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                zIndex: 999,
                borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem 1.5rem",
              }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#1A1A1A",
                  fontSize: "2rem",
                }}
              >
                <HiX />
              </button>

              {/* Navigation items container - centered */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.5rem",
                  flex: 1,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {mobileNavLinks.map((link) => {
                  const isHash = link.href.startsWith("#");
                  const itemStyle: React.CSSProperties = {
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    color: "#1A1A1A",
                    textDecoration: "none",
                    position: "relative",
                    width: "100%",
                    textAlign: "center",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(0,0,0,0.05)"
                  };

                  if (isHash) {
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        style={itemStyle}
                      >
                        {link.name}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      style={itemStyle}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Logo at bottom */}
              <div style={{ opacity: 0.5, textAlign: "center", paddingBottom: "1rem" }}>
                <img src={logo} alt="Fatt Pundit" style={{ height: "40px", filter: "grayscale(100%)" }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1024px) {
          .mobile-toggle { display: block !important; }
        }
          .nav-link:hover {
            color: var(--color-accent) !important;
          }
          .nav-logo { height: 85px; }
          
          /* Mobile Optimizations */
          @media (max-width: 1024px) {
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
