import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IoChevronForward, IoClose, IoLeaf } from 'react-icons/io5';

import menuBgTiger from '../../assets/images/menu_bg_tiger.png';
import sohoMenuBg from '../../assets/images/soho_menu_bg.jpg';
import { MENU_DATA_SOHO, MENU_DATA_COVENT, MENU_TYPES } from '../../data/menus';

const MenuSection = ({ location }: { location?: string }) => {
    const activeMenuData = location === 'covent-garden' ? MENU_DATA_COVENT : MENU_DATA_SOHO;
    const [activeMenu, setActiveMenu] = useState("A LA CARTE");
    const [isVegFilter, setIsVegFilter] = useState(false);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    // Background Logic
    const currentBg = location === 'soho' ? sohoMenuBg : menuBgTiger;
    const overlayOpacity = location === 'soho' ? 0.5 : 0.9; // Reduced opacity for Soho to show background

    return (
        <section id="menu" style={{
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
            // High opacity overlay to make the image "lightly visible" in background
            backgroundImage: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), url(${currentBg})`,
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
                    top: 140px; /* Optimal clearance for fixed Navbar */
                    align-self: start; /* Ensures sticky works correctly in Grid */
                    height: auto;
                    max-height: calc(100vh - 150px); /* Allow internal scroll if screen is short */
                    overflow-y: auto; /* Enable scroll */
                    padding-right: 2rem;
                    border-right: 1px solid rgba(255,255,255,0.1);
                    scrollbar-width: none; /* Firefox hide scrollbar */
                    -ms-overflow-style: none; /* IE/Edge hide scrollbar */
                }
                .menu-sidebar::-webkit-scrollbar {
                    display: none; /* Chrome/Safari hide scrollbar */
                }
                .menu-content {
                    min-height: 80vh;
                }
                @media (max-width: 1024px) {
                    .menu-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        padding: 2rem 1rem;
                        padding-top: 80px; /* Safe area for fixed Navbar */
                        width: 100%; /* Fix 100vw causing scroll issues */
                        box-sizing: border-box; 
                    }
                    .menu-sidebar {
                        position: sticky;
                        top: 85px; /* Tighter fit to Navbar */
                        background: #151313; /* Force dark background to match section theme */
                        z-index: 40; /* Below Navbar (50) but above content */
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-right: 0;
                        padding-bottom: 0.5rem; /* Reduced padding */
                        margin-bottom: 1rem; /* Compact margin */
                        width: 100%;
                    }
                    /* Hide large MENU title on mobile to save space */
                    /* Ensure MENU title is visible but scaled down on mobile */
                    .menu-sidebar h2 {
                        display: block !important;
                        font-size: 1.5rem !important;
                        margin-bottom: 1rem !important;
                        text-align: center;
                    }
                    .menu-filter {
                        margin-bottom: 0.5rem !important; /* Tighter gap */
                    }
                    /* Horizontal scroll for menu items on mobile */
                    .menu-nav-items {
                        flex-direction: row !important;
                        overflow-x: auto;
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
                        padding: 0.8rem 1.5rem !important; /* Increased touch target */
                        min-height: 48px; /* A11y: Standard minimum touch target */
                        border-radius: 50px;
                        border: 1px solid rgba(255,255,255,0.1) !important;
                        font-size: 1rem !important; /* Slightly larger text for readability */
                        display: flex;
                        align-items: center;
                        justify-content: center;
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
                /* Navigation Button Styles */
                .menu-nav-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-family: var(--font-heading);
                    font-size: 1.2rem;
                    color: #888;
                    text-align: left;
                    padding: 0.8rem 1rem;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    border-radius: 8px;
                    opacity: 0.6;
                }
                .menu-nav-btn:hover {
                    color: #fff !important;
                    background: rgba(255,255,255,0.05);
                    padding-left: 1.5rem; /* Slide effect */
                    opacity: 1;
                }
                .menu-nav-btn.active {
                    color: var(--color-accent) !important;
                    opacity: 1 !important;
                    background: rgba(255,255,255,0.02);
                }

                /* Mobile Grid Fix */
                @media (max-width: 768px) {
  // ... (rest of media query)

// ...

                        {/* Navigation Items */}
                        <div className="menu-nav-items" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {MENU_TYPES.map((menu) => (
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
                    </motion.div >
                </div >

    {/* RIGHT PANEL: Content */ }
    < div className = "menu-content" >
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
                </div >
            </div >
        </section >
    );
};

export default MenuSection;
