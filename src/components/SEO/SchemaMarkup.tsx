import { useEffect } from 'react';

interface SchemaMarkupProps {
    schema: object;
}

/**
 * Generic component for injecting JSON-LD structured data into the page head
 * Used for SEO and rich snippets in search results
 */
const SchemaMarkup = ({ schema }: SchemaMarkupProps) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [schema]);

    return null;
};

export default SchemaMarkup;
