import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IoChevronForward, IoClose, IoLeaf } from 'react-icons/io5';

import menuBgTiger from '../../assets/images/menu_bg_tiger.png';
import { MENU_DATA_SOHO, MENU_DATA_COVENT, MENU_TYPES } from '../../data/menus';

const MenuSection = ({ location }: { location?: string }) => {
    const activeMenuData = location === 'covent-garden' ? MENU_DATA_COVENT : MENU_DATA_SOHO;
    const [activeMenu, setActiveMenu] = useState("A LA CARTE");
    const [isVegFilter, setIsVegFilter] = useState(false);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    // Removed mouse follower logic in favor of Lightbox
    // const mouseX = useMotionValue(0); ...

    return (
        <section id="menu" style={{
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
            // High opacity overlay to make the image "lightly visible" in background
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${menuBgTiger})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>

            {/* Inject Style for Responsive Grid */}
            <style>{`
                .menu-container {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 4rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 4rem 2rem;
                    min-height: 100vh;
                }
                .menu-sidebar {
                    position: sticky;
                    top: 120px;
                    height: fit-content;
                    padding-right: 2rem;
                    border-right: 1px solid rgba(255,255,255,0.1);
                }
                .menu-content {
                    min-height: 80vh;
                }
                @media (max-width: 1024px) {
                    .menu-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        padding: 2rem 1rem;
                        width: 100vw; /* Ensure full width */
                        box-sizing: border-box; /* Include padding in width */
                        overflow-x: hidden; /* Prevent horizontal scroll on container */
                    }
                    .menu-sidebar {
                        position: sticky;
                        top: 80px;
                        background: var(--color-bg-primary); /* Ensure background covers content behind */
                        z-index: 10;
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-right: 0;
                        padding-bottom: 1rem;
                        margin-bottom: 2rem;
                        width: 100%;
                    }
                    /* Hide large MENU title on mobile to save space */
                    .menu-sidebar h2 {
                        display: none;
                    }
                    .menu-filter {
                        margin-bottom: 1rem !important; /* Reduce gap */
                    }
                    /* Horizontal scroll for menu items on mobile */
                    .menu-nav-items {
                        flex-direction: row !important;
                        overflow-x: auto;
                        gap: 1rem !important;
                        padding: 0.5rem 4px; /* Slight padding to avoid cutoff */
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none; /* Firefox */
                        -ms-overflow-style: none; /* IE/Edge */
                        width: 100%;
                        white-space: nowrap;
                        max-width: 100vw;
                    }
                    .menu-nav-items::-webkit-scrollbar {
                        display: none; /* Chrome/Safari/Webkit */
                    }
                    .menu-nav-items button {
                        white-space: nowrap;
                        flex-shrink: 0;
                        background: rgba(255,255,255,0.05) !important;
                        padding: 0.6rem 1.2rem !important;
                        border-radius: 50px;
                        border: 1px solid rgba(255,255,255,0.1) !important;
                        font-size: 0.9rem !important;
                    }
                }
                .menu-item-card {
                    padding: 1rem;
                    border-radius: 8px;
                    transition: background-color 0.3s ease;
                    transition: background-color 0.3s ease;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                }
                .menu-item-card:hover {
                    background-color: rgba(255,255,255,0.05);
                }
                /* Mobile Grid Fix */
                @media (max-width: 768px) {
                    .menu-category-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .menu-content h3 {
                        font-size: 2rem !important;
                        margin-top: 1rem;
                    }
                    /* Ensure content clears sticky header */
                    .menu-content {
                        scroll-margin-top: 140px; 
                    }
                }
            `}</style>


            {/* Lightbox Overlay */}
            <AnimatePresence>
                {hoveredImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setHoveredImage(null)} // Close on background click
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 9999,
                            backgroundColor: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(5px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
                        >
                            <img
                                src={hoveredImage}
                                alt="Dish Preview"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    border: '2px solid var(--color-accent)'
                                }}
                            />
                            <button
                                onClick={() => setHoveredImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: -20,
                                    right: -20,
                                    background: '#fff',
                                    borderRadius: '50%',
                                    border: 'none',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#000'
                                }}
                            >
                                <IoClose size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="menu-container">
                {/* LEFT SIDEBAR: Navigation & Filter */}
                <div className="menu-sidebar">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2rem',
                            marginBottom: '2rem',
                            color: 'var(--color-accent)'
                        }}>
                            MENU
                        </h2>

                        {/* Quick Vegetarian Filter - Prominent */}
                        <div className="menu-filter" style={{ marginBottom: '2rem' }}>
                            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Filter</p>
                            <button
                                onClick={() => setIsVegFilter(!isVegFilter)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    background: isVegFilter ? 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)' : 'rgba(255,255,255,0.05)',
                                    color: isVegFilter ? '#000' : '#fff',
                                    border: isVegFilter ? '2px solid #22c55e' : '2px solid rgba(74, 222, 128, 0.3)',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    width: '100%',
                                    maxWidth: '100%',
                                    boxSizing: 'border-box',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: isVegFilter ? '0 4px 15px rgba(74, 222, 128, 0.4)' : 'none',
                                    transform: isVegFilter ? 'scale(1.02)' : 'scale(1)'
                                }}
                            >
                                <IoLeaf size={20} style={{ color: isVegFilter ? '#000' : '#4ade80' }} />
                                <span>{isVegFilter ? '🌱 VEGETARIAN ONLY' : 'SHOW VEGETARIAN'}</span>
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <div className="menu-nav-items" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {MENU_TYPES.map((menu) => (
                                <button
                                    key={menu}
                                    onClick={() => setActiveMenu(menu)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.2rem',
                                        color: activeMenu === menu ? 'var(--color-accent)' : '#666',
                                        textAlign: 'left',
                                        padding: '0.5rem 0',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        opacity: activeMenu === menu ? 1 : 0.6
                                    }}
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

                {/* RIGHT PANEL: Content */}
                <div className="menu-content">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeMenu}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '3rem',
                                marginBottom: '2rem',
                                color: '#fff',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                {activeMenu}
                            </h3>

                            {activeMenuData[activeMenu] ? activeMenuData[activeMenu].map((section, index) => {
                                // Filter items if Veg Filter is active
                                const filteredItems = isVegFilter
                                    ? section.items.filter(item => {
                                        const nonVegKeywords = ["Chicken", "Beef", "Goat", "Lamb", "Duck", "Venison", "Rabbit", "Ribeye", "Prawn", "Crab", "Monkfish", "Fish", "Squid"];
                                        // "Mock Chicken" exception handled by looking for "Mock Chicken" specifically
                                        if (item.name.includes("Mock Chicken")) return true;

                                        const containsKeyword = (text: string, keywords: string[]) => {
                                            return keywords.some(keyword => text.toLowerCase().includes(keyword.toLowerCase()));
                                        };

                                        if (containsKeyword(item.name, nonVegKeywords)) return false;
                                        if (item.description && containsKeyword(item.description, nonVegKeywords)) return false;
                                        return true;
                                    })
                                    : section.items;

                                if (filteredItems.length === 0) return null;

                                return (
                                    <div key={index} style={{ marginBottom: '3rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                                            paddingBottom: '0.5rem',
                                            flexWrap: 'wrap' // Allow wrapping on small screens
                                        }}>
                                            <h4 style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '1.5rem',
                                                color: 'var(--color-accent)'
                                            }}>
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
                                                <div
                                                    key={idx}
                                                    className="menu-item-card"
                                                // Removed onMouseEnter for row
                                                >
                                                    <div style={{ flex: 1 }}> {/* Content Container */}
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                                            <h5 style={{
                                                                fontFamily: 'var(--font-heading)',
                                                                fontSize: '1.2rem',
                                                                color: '#fff',
                                                                letterSpacing: '0.5px',
                                                                margin: 0
                                                            }}>
                                                                {item.name}
                                                            </h5>
                                                            {item.price && (
                                                                <span style={{
                                                                    color: 'var(--color-accent)',
                                                                    fontWeight: 'bold',
                                                                    fontFamily: 'var(--font-mono)',
                                                                    flexShrink: 0,
                                                                    whiteSpace: 'nowrap',
                                                                    marginLeft: '1rem'
                                                                }}>
                                                                    £{item.price}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p style={{
                                                            color: '#aaa',
                                                            fontSize: '0.95rem',
                                                            lineHeight: '1.5',
                                                            fontFamily: 'var(--font-body)',
                                                            margin: 0
                                                        }}>
                                                            {item.description}
                                                        </p>
                                                    </div>

                                                    {/* Thumbnail Image */}
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
                                                                flexShrink: 0 // Prevent squishing
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }) : (
                                <p>Menu items coming soon...</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
