import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Calendar, Users, MapPin, ChevronRight } from 'lucide-react';

const Reserve = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        location: '',
        date: '',
        time: '',
        guests: 2
    });

    const locations = ['Soho', 'Covent Garden'];
    const times = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

    const handleNext = () => setStep(step + 1);

    return (
        <>
            <Navbar />
            <div style={{
                minHeight: '100vh',
                paddingTop: '8rem',
                paddingBottom: '4rem',
                backgroundImage: 'radial-gradient(circle at top right, #1E1E1E, #121212)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container"
                    style={{ maxWidth: '600px', width: '100%' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Reserve Your Table</h1>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Experience the taste of the Himalayas.</p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-xl)',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        {/* Steps Progress */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                            {[1, 2, 3].map((s) => (
                                <div key={s} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: s <= step ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                                    opacity: s <= step ? 1 : 0.5
                                }}>
                                    <span style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: '1px solid currentColor',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem'
                                    }}>{s}</span>
                                    <span style={{ fontSize: '0.9rem', display: window.innerWidth > 500 ? 'block' : 'none' }}>
                                        {s === 1 ? 'Location' : s === 2 ? 'Details' : 'Confirm'}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Form Content */}
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && (
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    <h3 style={{ marginBottom: '1rem' }}>Choose a Location</h3>
                                    {locations.map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => { setFormData({ ...formData, location: loc }); handleNext(); }}
                                            style={{
                                                padding: '1.5rem',
                                                textAlign: 'left',
                                                backgroundColor: 'rgba(255,255,255,0.03)',
                                                borderRadius: 'var(--radius-md)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                border: '1px solid transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--color-accent)';
                                                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'transparent';
                                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-primary)' }}>
                                                <MapPin color="var(--color-accent)" />
                                                <span style={{ fontSize: '1.2rem' }}>{loc}</span>
                                            </div>
                                            <ChevronRight color="var(--color-text-secondary)" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {step === 2 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <h3>Date & Time</h3>

                                    {/* Fake Date Picker Input */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Date</label>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '1rem',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            borderRadius: 'var(--radius-sm)'
                                        }}>
                                            <Calendar size={20} color="var(--color-accent)" />
                                            <input type="date" style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1rem', width: '100%' }} />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Guests</label>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '1rem',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            borderRadius: 'var(--radius-sm)'
                                        }}>
                                            <Users size={20} color="var(--color-accent)" />
                                            <select
                                                style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1rem', width: '100%' }}
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n} style={{ color: 'black' }}>{n} Guests</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Time</label>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                            {times.map(t => (
                                                <button key={t} onClick={() => setFormData({ ...formData, time: t })} style={{
                                                    padding: '0.5rem',
                                                    borderRadius: 'var(--radius-sm)',
                                                    background: formData.time === t ? 'var(--color-accent)' : 'rgba(255,255,255,0.05)',
                                                    color: formData.time === t ? 'black' : 'white',
                                                    border: '1px solid transparent'
                                                }}>
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        disabled={!formData.time}
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            backgroundColor: 'var(--color-accent)',
                                            color: 'black',
                                            fontWeight: 'bold',
                                            borderRadius: 'var(--radius-sm)',
                                            opacity: formData.time ? 1 : 0.5,
                                            marginTop: '1rem'
                                        }}>
                                        Review Booking
                                    </button>
                                </div>
                            )}

                            {step === 3 && (
                                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <h3>Booking Summary</h3>
                                    <div style={{
                                        padding: '1.5rem',
                                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        textAlign: 'left',
                                        border: '1px solid var(--color-accent)'
                                    }}>
                                        <p><strong>Location:</strong> {formData.location}</p>
                                        <p><strong>Guests:</strong> {formData.guests}</p>
                                        <p><strong>Time:</strong> {formData.time}</p>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                        This is a demo booking. In production, this would integrate with OpenTable or SevenRooms APIs.
                                    </p>
                                    <button style={{
                                        width: '100%',
                                        padding: '1rem',
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        borderRadius: 'var(--radius-sm)',
                                        textTransform: 'uppercase'
                                    }}>
                                        Confirm Reservation
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Reserve;
