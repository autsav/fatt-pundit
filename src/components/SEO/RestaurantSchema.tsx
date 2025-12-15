import SchemaMarkup from './SchemaMarkup';

interface RestaurantSchemaProps {
    name: string;
    location: 'soho' | 'covent-garden';
    address: string;
    phone?: string;
    email: string;
    priceRange?: string;
}

const LOCATION_DATA = {
    'soho': {
        streetAddress: '77 Berwick Street',
        addressLocality: 'Soho, London',
        postalCode: 'W1F 8TH',
        latitude: 51.5123,
        longitude: -0.1375,
    },
    'covent-garden': {
        streetAddress: '6 Maiden Lane',
        addressLocality: 'Covent Garden, London',
        postalCode: 'WC2E 7NA',
        latitude: 51.5107500,
        longitude: -0.1226390,
    }
};

/**
 * Restaurant Schema for rich snippets in Google Search
 * Displays restaurant info, ratings, and location in search results
 */
const RestaurantSchema = ({
    name,
    location,
    phone,
    email,
    priceRange = '££'
}: RestaurantSchemaProps) => {
    const locationData = LOCATION_DATA[location];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: `Fatt Pundit ${name}`,
        image: 'https://fattpundit.com/images/hero.jpg', // Update with actual URL
        '@id': `https://fattpundit.com/${location}`,
        url: `https://fattpundit.com/${location}`,
        telephone: phone,
        email: email,
        priceRange: priceRange,
        address: {
            '@type': 'PostalAddress',
            streetAddress: locationData.streetAddress,
            addressLocality: locationData.addressLocality,
            postalCode: locationData.postalCode,
            addressCountry: 'GB'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: locationData.latitude,
            longitude: locationData.longitude
        },
        servesCuisine: ['Indo-Chinese', 'Indian', 'Chinese', 'Asian Fusion'],
        menu: `https://fattpundit.com/${location}#menu`,
        acceptsReservations: true,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '12:00',
                closes: '23:00'
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '12:00',
                closes: '23:30'
            }
        ]
    };

    return <SchemaMarkup schema={schema} />;
};

export default RestaurantSchema;
