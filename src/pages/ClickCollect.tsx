import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiShoppingBag } from 'react-icons/hi';
import { IoClose, IoAdd, IoRemove, IoChevronForward } from 'react-icons/io5';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { useCart } from '../context/CartContext';
import menuBgTiger from '../assets/images/menu_bg_tiger.png';

const ClickCollect = () => {
    const { location } = useParams();
    const displayLocation = location ? location.replace(/-/g, ' ').toUpperCase() : 'SOHO';

    const {
        cartItems,
        addToCart,
        updateQuantity,
        cartTotal,
        itemCount,
        isCartOpen,
        setIsCartOpen
    } = useCart();

    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [selectedDiet, setSelectedDiet] = useState<string | null>(null);

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = item.category === activeCategory;
        const matchesDiet = selectedDiet ? item.dietary.includes(selectedDiet) : true;
        return matchesCategory && matchesDiet;
    });

    const scrollToCategory = (category: string) => {
        setActiveCategory(category);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div style={{ paddingTop: '5rem', minHeight: '100vh', backgroundColor: '#F9F9F9' }}>

                {/* Hero Banner */}
                <div style={{
                    backgroundColor: '#121212',
                    color: '#fff',
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    backgroundImage: `url(${menuBgTiger})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>{displayLocation} CLICK & COLLECT</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Order online and pickup from our {displayLocation.toLowerCase()} location.</p>
                    </div>
                </div>

                <div className="container" style={{ display: 'flex', gap: '2rem', padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

                    {/* Sidebar Navigation */}
                    <div className="sidebar" style={{ width: '250px', flexShrink: 0 }}>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>CATEGORIES</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {CATEGORIES.map(cat => (
                                    <li key={cat} style={{ marginBottom: '0.5rem' }}>
                                        <button
                                            onClick={() => scrollToCategory(cat)}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '0.8rem 1rem',
                                                border: 'none',
                                                backgroundColor: activeCategory === cat ? 'var(--color-accent)' : '#fff',
                                                color: activeCategory === cat ? '#fff' : '#333',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: '0.95rem',
                                                fontWeight: 600,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {cat}
                                            {activeCategory === cat && <IoChevronForward size={16} />}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '2rem' }}>
                                <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontSize: '1.2rem' }}>DIETARY</h3>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {['VEGAN', 'GF', 'VEGETARIAN'].map(diet => (
                                        <button
                                            key={diet}
                                            onClick={() => setSelectedDiet(selectedDiet === diet ? null : diet)}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                border: `1px solid ${selectedDiet === diet ? 'var(--color-accent)' : '#ccc'}`,
                                                backgroundColor: selectedDiet === diet ? 'var(--color-accent)' : 'transparent',
                                                color: selectedDiet === diet ? '#fff' : '#666',
                                                fontSize: '0.8rem',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {diet}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Menu Grid */}
                    <div style={{ flex: 1 }} id="menu">
                        {/* Mobile Category Nav (Visible likely < 900px) */}
                        <div className="mobile-nav" style={{ marginBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '0.5rem' }}>
                            <div style={{ display: 'inline-flex', gap: '0.8rem' }}>
                                {CATEGORIES.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => activeCategory !== cat && setActiveCategory(cat)}
                                        style={{
                                            padding: '0.6rem 1.2rem',
                                            borderRadius: '20px',
                                            border: 'none',
                                            backgroundColor: activeCategory === cat ? 'var(--color-accent)' : '#fff',
                                            color: activeCategory === cat ? '#fff' : '#333',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#121212' }}>{activeCategory}</h2>
                            {selectedDiet && <span style={{ padding: '0.5rem 1rem', background: '#eee', borderRadius: '20px', fontSize: '0.85rem' }}>Filtered by: {selectedDiet}</span>}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                            {filteredItems.map(item => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        padding: '1.5rem',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#333' }}>{item.name}</h3>
                                        <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>£{item.price.toFixed(2)}</span>
                                    </div>
                                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{item.description}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                        <div style={{ display: 'flex', gap: '0.3rem' }}>
                                            {item.dietary.map(d => (
                                                <span key={d} style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#f0f0f0', borderRadius: '4px', color: '#888' }}>{d}</span>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => addToCart(item)}
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                border: 'none',
                                                backgroundColor: '#121212',
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'background 0.2s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#121212'}
                                        >
                                            <IoAdd size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Cart Button (Mobile) */}
                <button
                    onClick={() => setIsCartOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                        color: '#fff',
                        border: 'none',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 90,
                        cursor: 'pointer'
                    }}
                >
                    <HiShoppingBag size={24} />
                    {itemCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: -5,
                            right: -5,
                            background: '#121212',
                            color: '#fff',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #fff'
                        }}>
                            {itemCount}
                        </span>
                    )}
                </button>

                {/* Cart Drawer */}
                <AnimatePresence>
                    {isCartOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsCartOpen(false)}
                                style={{
                                    position: 'fixed',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0.5)',
                                    zIndex: 98,
                                    backdropFilter: 'blur(4px)'
                                }}
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: '100%',
                                    maxWidth: '400px',
                                    backgroundColor: '#fff',
                                    zIndex: 99,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '-5px 0 30px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: 0 }}>YOUR ORDER</h2>
                                    <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><IoClose /></button>
                                </div>

                                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
                                    {cartItems.length === 0 ? (
                                        <div style={{ textAlign: 'center', color: '#999', marginTop: '3rem' }}>
                                            <HiShoppingBag size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                            <p>Your cart is empty.</p>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            {cartItems.map(item => (
                                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div style={{ flex: 1 }}>
                                                        <h4 style={{ margin: '0 0 0.3rem 0', color: '#333' }}>{item.name}</h4>
                                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>£{item.price.toFixed(2)}</p>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#f5f5f5', padding: '0.3rem', borderRadius: '20px' }}>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            style={{
                                                                width: '24px', height: '24px', borderRadius: '50%', border: 'none', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                                            }}
                                                        >
                                                            <IoRemove size={14} />
                                                        </button>
                                                        <span style={{ fontSize: '0.9rem', fontWeight: 600, minWidth: '15px', textAlign: 'center' }}>{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            style={{
                                                                width: '24px', height: '24px', borderRadius: '50%', border: 'none', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                                            }}
                                                        >
                                                            <IoAdd size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div style={{ padding: '1.5rem', borderTop: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
                                        <span>Total</span>
                                        <span>£{cartTotal.toFixed(2)}</span>
                                    </div>
                                    <button
                                        disabled={cartItems.length === 0}
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            backgroundColor: cartItems.length === 0 ? '#ccc' : 'var(--color-accent)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                        onClick={() => alert('Checkout functionality coming soon (Stripe integration)!')}
                                    >
                                        CHECKOUT <IoChevronForward size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

const styles = `
  @media (min-width: 901px) {
    .mobile-nav { display: none !important; }
    .sidebar { display: block !important; }
  }
  @media (max-width: 900px) {
    .mobile-nav { display: block !important; }
    .sidebar { display: none !important; }
  }
`;

export default ClickCollect;

// Inject Styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
