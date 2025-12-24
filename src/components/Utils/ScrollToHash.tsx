import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If there is a hash, scroll to it
        if (hash) {
            const id = hash.replace('#', '');

            // Retry finding element for a short duration incase of lazy loading
            const scrollToElement = (retries = 0) => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (retries < 5) {
                    setTimeout(() => scrollToElement(retries + 1), 200);
                }
            };

            scrollToElement();
        } else {
            // For new page loads without hash, ensure top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToHash;
