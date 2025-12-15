import SchemaMarkup from './SchemaMarkup';

interface MenuItem {
    name: string;
    description: string;
    price?: string;
}

interface MenuSchemaProps {
    category: string;
    items: MenuItem[];
}

/**
 * Menu Schema for displaying menu items in search results
 * Helps Google understand menu structure and pricing
 */
const MenuSchema = ({ category, items }: MenuSchemaProps) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Menu',
        name: `Fatt Pundit ${category} Menu`,
        hasMenuSection: {
            '@type': 'MenuSection',
            name: category,
            hasMenuItem: items.map(item => ({
                '@type': 'MenuItem',
                name: item.name,
                description: item.description,
                offers: item.price ? {
                    '@type': 'Offer',
                    price: item.price,
                    priceCurrency: 'GBP'
                } : undefined
            }))
        }
    };

    return <SchemaMarkup schema={schema} />;
};

export default MenuSchema;
