import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoChevronForward, IoClose } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { MENU_DATA_SOHO, MENU_DATA_COVENT, MENU_TYPES } from '../../data/menus';
import type { MenuCategory } from '../../data/menus';
import menuBgTiger from "../../assets/images/menu_bg_tiger.png";
import sohoMenuBg from "../../assets/images/soho_menu_bg.jpg";
import Skeleton from '../UI/Skeleton';

const MenuSection: React.FC = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const location = useLocation();
  const [activeLocation, setActiveLocation] = useState<'SOHO' | 'COVENT GARDEN'>('SOHO');
  const [activeMenu, setActiveMenu] = useState(MENU_TYPES[0]);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading on menu switch
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeMenu]);


  // Determine location from URL or default
  useEffect(() => {
    if (location.pathname.includes('covent-garden')) {
      setActiveLocation('COVENT GARDEN');
    } else {
      setActiveLocation('SOHO');
    }
  }, [location]);

  // Reset active menu when location changes to ensure valid key matches
  useEffect(() => {
    // Reset to first menu item type when location switches
    setActiveMenu(MENU_TYPES[0]);
  }, [activeLocation]);

  // Scroll lock for image modal
  useEffect(() => {
    if (hoveredImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [hoveredImage]);

  // Background Logic
  const currentBg = activeLocation === 'SOHO' ? sohoMenuBg : menuBgTiger;
  const overlayOpacity = activeLocation === 'SOHO' ? 0.5 : 0.9;

  // Get Data
  const currentMenuData = activeLocation === 'SOHO' ? MENU_DATA_SOHO : MENU_DATA_COVENT;
  const activeMenuCategories: MenuCategory[] = currentMenuData[activeMenu] || [];

  return (
    <section
      id="menu"
      ref={ref}
      style={{
        backgroundColor: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
        backgroundImage: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), url(${currentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "6rem 0",
        minHeight: "100vh"
      }}
    >
      <style>{`
                .menu-container {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 4rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .menu-sidebar {
                    position: sticky;
                    top: 120px;
                    height: fit-content;
                }

                .menu-nav-btn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 1rem 1.5rem;
                    background: transparent;
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #fff;
                    font-family: var(--font-heading);
                    font-size: 1rem;
                    text-align: left;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .menu-nav-btn:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(255,255,255,0.3);
                }

                .menu-nav-btn.active {
                    background: var(--color-accent);
                    border-color: var(--color-accent);
                    color: #000;
                    font-weight: bold;
                }

                .menu-item-card {
                    background: rgba(0,0,0,0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 1.5rem;
                    display: flex;
                    gap: 1.5rem;
                    transition: all 0.3s ease;
                }

                .menu-item-card:hover {
                    transform: translateY(-5px);
                    background: rgba(0,0,0,0.8);
                    border-color: var(--color-accent);
                }

                @media (max-width: 1024px) {
                    .menu-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .menu-sidebar {
                        position: relative;
                        top: 0;
                        overflow-x: auto;
                        padding-bottom: 1rem;
                    }
                    .menu-nav-items {
                        flex-direction: row !important;
                        flex-wrap: nowrap;
                        overflow-x: auto;
                        padding-bottom: 0.5rem;
                    }
                    .menu-nav-btn {
                        white-space: nowrap;
                        width: auto;
                        flex-shrink: 0;
                    }
                }

                @media (max-width: 768px) {
                    .menu-item-card {
                        flex-direction: column-reverse;
                    }
                    .menu-item-card img {
                        width: 100% !important;
                        height: 200px !important;
                        margin-bottom: 1rem;
                    }
                }
            `}</style>

      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '2rem'
            }}
            onClick={() => setHoveredImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ position: 'relative', maxWidth: '90%', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={hoveredImage}
                alt="Menu Item Full"
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  borderRadius: '8px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}
              />
              <button
                onClick={() => setHoveredImage(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <IoClose size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="menu-container">
        <div className="menu-sidebar">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-accent)' }}>
              MENU
            </h2>



            <div className="menu-nav-items" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {MENU_TYPES.map(menu => (
                <button
                  key={menu}
                  onClick={() => setActiveMenu(menu)}
                  className={`menu-nav-btn ${activeMenu === menu ? 'active' : ''}`}
                >
                  {menu}
                  {activeMenu === menu && (
                    <motion.div
                      layoutId="active-arrow"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <IoChevronForward size={18} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="menu-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {activeMenu}
              </h3>

              {isLoading ? (
                /* Skeleton Loading State */
                <div style={{ padding: '0 0.5rem' }}>
                  {/* Simulate 2 categories */}
                  {[1, 2].map((i) => (
                    <div key={i} style={{ marginBottom: '3rem' }}>
                      <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                        <Skeleton width="200px" height="1.5rem" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                      </div>
                      <div className="menu-category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3, 4].map((j) => (
                          <div key={j} className="menu-item-card" style={{ height: '180px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <Skeleton width="60%" height="1.2rem" />
                                <Skeleton width="20%" height="1.2rem" />
                              </div>
                              <Skeleton width="90%" height="0.9rem" />
                              <Skeleton width="70%" height="0.9rem" />
                            </div>
                            <Skeleton width="100px" height="100px" variant="rect" style={{ borderRadius: '8px' }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                activeMenuCategories.map((section, index) => {
                  // Handle vegetarian filtering
                  const filteredItems = section.items;

                  if (filteredItems.length === 0) return null;

                  return (
                    <div key={index} style={{ marginBottom: '3rem' }}>
                      {/* Category Title - Skip if it's just "PRICE" or generic unless needed */}
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>
                          {section.category}
                        </h4>
                        {section.description && (
                          <span style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                            {section.description}
                          </span>
                        )}
                      </div>

                      <div className="menu-category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
                        {filteredItems.map((item, idx) => (
                          <div key={idx} className="menu-item-card">
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', letterSpacing: '0.5px', margin: 0 }}>
                                  {item.name}
                                </h5>
                                {item.price && (
                                  <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', flexShrink: 0, whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                                    £{item.price}
                                  </span>
                                )}
                              </div>
                              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.5', fontFamily: 'var(--font-body)', margin: 0 }}>
                                {item.description}
                              </p>
                            </div>
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHoveredImage(item.image || null);
                                }}
                                style={{
                                  width: '100px',
                                  height: '100px',
                                  objectFit: 'cover',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  flexShrink: 0
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}

              {activeMenuCategories.length === 0 && (
                <p>No items found for this menu.</p>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
