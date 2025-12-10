import { useParams } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Sections/Hero';

const Location = () => {
    const { location } = useParams();
    // Capitalize location for display
    const displayLocation = location ? location.replace(/-/g, ' ').toUpperCase() : '';

    return (
        <>
            <Navbar />
            <Hero location={displayLocation} />

            {/* Placeholder for other sections */}
            <div id="menu" style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-primary)' }}>
                <h2>Menu Section (Coming Soon)</h2>
            </div>
            <div id="gallery" style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
                <h2>Gallery Section (Coming Soon)</h2>
            </div>

            <Footer />
        </>
    );
};

export default Location;
