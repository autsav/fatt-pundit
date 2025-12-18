import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <main style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#111',
            color: '#fff',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <SEO title="Page Not Found | Fatt Pundit" description="Page not found." />
            <h1 style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Oops! The page you are looking for does not exist.</p>
            <Link
                to="/"
                style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#d4af37',
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    borderRadius: '4px'
                }}
            >
                RETURN HOME
            </Link>
        </main>
    );
};

export default NotFound;
