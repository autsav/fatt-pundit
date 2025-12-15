import './SkipToContent.css';

/**
 * Skip to main content link for screen readers and keyboard navigation
 * WCAG 2.2 AA requirement for accessibility
 */
const SkipToContent = () => {
    const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            href="#main-content"
            className="skip-to-content"
            onClick={handleSkip}
        >
            Skip to main content
        </a>
    );
};

export default SkipToContent;
