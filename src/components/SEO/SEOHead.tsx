import { useEffect } from 'react';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

const DEFAULT_TITLE = 'Fatt Pundit | Indo-Chinese Restaurant in London';
const DEFAULT_DESCRIPTION = 'Experience the bold flavors of Indo-Chinese cuisine at Fatt Pundit. Located in Soho and Covent Garden, London. Book your table today.';
const DEFAULT_IMAGE = 'https://fattpundit.com/images/og-image.jpg'; // Update with actual URL

/**
 * SEO Head component for managing page-level meta tags
 * Native implementation without react-helmet-async (React 19 compatible)
 */
const SEOHead = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    canonical,
    ogImage = DEFAULT_IMAGE,
    ogType = 'website',
    twitterCard = 'summary_large_image'
}: SEOHeadProps) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Helper function to update or create meta tag
        const updateMetaTag = (property: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Primary Meta Tags
        updateMetaTag('title', title);
        updateMetaTag('description', description);

        // Open Graph / Facebook
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        if (canonical) {
            updateMetaTag('og:url', canonical, true);
        }

        // Twitter
        updateMetaTag('twitter:card', twitterCard, true);
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:image', ogImage, true);

        // Canonical link
        if (canonical) {
            let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!linkElement) {
                linkElement = document.createElement('link');
                linkElement.rel = 'canonical';
                document.head.appendChild(linkElement);
            }
            linkElement.href = canonical;
        }
    }, [title, description, canonical, ogImage, ogType, twitterCard]);

    return null;
};

export default SEOHead;
