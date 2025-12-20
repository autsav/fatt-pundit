import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

import Hero from '../components/Sections/Hero';
import MenuSection from '../components/Sections/MenuSection';
import GallerySection from '../components/Sections/GallerySection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import LocationInfoSection from '../components/Sections/LocationInfoSection';

// Import Images
import heroFood from '../assets/images/hero_food.jpg';
import menuBgTiger from '../assets/images/menu_bg_tiger.png';
import heroInterior from '../assets/images/hero_interior.jpg';
import wallshow from '../assets/images/wallshow.jpg';

// Data Definition
const LOCATION_DATA: Record<string, {
    address: string;
    email: string;
    phone?: string;
    mapUrl: string;
    image: string;
    heroImage: string;
    description: string;
    openingHours: React.ReactNode;
}> = {
    'soho': {
        address: '77 Berwick Street, Soho, London W1F 8TH',
        email: 'info@fattpundit.soho.co.uk',
        phone: '+44 20 7287 7900',
        mapUrl: 'https://goo.gl/maps/xyz',
        image: heroInterior,
        heroImage: heroFood,
        description: 'The original Fatt Pundit in the heart of Soho. Experience the buzz of Berwick Street combined with the spicy aromas of Tangra.',
        openingHours: (
            <>
                Mon & Tue: 12pm - 2:30pm, 5pm - 10:30pm<br />
                Wednesday (Christmas Eve): 12pm - 2:30pm, 5pm - 10:30pm<br />
                Thursday (Christmas Day): 12pm - 2:30pm, 5pm - 10:30pm<br />
                Friday (Boxing Day): 12pm - 2:30pm, 5pm - 10:30pm<br />
                Saturday: 12pm - 10:30pm<br />
                Sunday: Closed
            </>
        )
    },
    'covent-garden': {
        address: '6 Maiden Lane, Covent Garden, London WC2E 7NA',
        email: 'info@fattpundit.coventgarden.co.uk',
        phone: '+44 20 7240 2888',
        mapUrl: 'https://goo.gl/maps/abc',
        image: wallshow,
        heroImage: menuBgTiger, // Using the new PNG via import below
        description: 'Located in the historic Covent Garden, our second location offers a spacious dining experience with the same bold Indo-Chinese flavours.',
        openingHours: (
            <>
                Monday: Closed<br />
                Tue - Thu: 12pm - 2:15pm, 4:45pm - 10:15pm<br />
                Fri - Sun: 12pm - 10:15pm
            </>
        )
    }
};

const Location = () => {
    const { location } = useParams();
    // Capitalize location for display
    const displayLocation = location ? location.replace(/-/g, ' ').toUpperCase() : '';

    // Get specific data or fallback
    const data = location && LOCATION_DATA[location] ? LOCATION_DATA[location] : LOCATION_DATA['soho'];

    // If location is unknown, we default to Soho, but in a real app might redirect or show error.

    return (
        <>
            <SEO
                title={`Fatt Pundit ${displayLocation} | Indo Chinese Restaurant London`}
                description={data.description}
            />
            <Hero
                location={displayLocation}
                backgroundImage={data.heroImage}
                reserveLink={location ? `/${location}/reserve` : '/reserve'}
            />

            <LocationInfoSection
                address={data.address}
                email={data.email.replace('.soho', '').replace('.coventgarden', '')} // Reverting to single email if strictly needed, or using distinct ones
                phone={data.phone}
                mapUrl={`https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+${displayLocation}`} // Dynamic search link
                image={data.image}
                description={data.description}
                enableTexture={location === 'soho'}
                openingHours={data.openingHours}
            />

            <MenuSection location={location} />
            <GallerySection location={location} />
            <TestimonialsSection />
        </>
    );
};

export default Location;
