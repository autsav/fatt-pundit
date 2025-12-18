import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage = 'An unexpected error occurred.';
    let errorTitle = 'Oops!';

    if (isRouteErrorResponse(error)) {
        // Handle 404, 401, etc.
        if (error.status === 404) {
            errorTitle = 'Page Not Found';
            errorMessage = "The page you are looking for doesn't exist.";
        } else {
            errorTitle = `${error.status} ${error.statusText}`;
            errorMessage = error.data?.message || errorMessage;
        }
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#121212',
            color: '#fff'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                {errorTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
                {errorMessage}
            </p>
            <Link
                to="/"
                style={{
                    padding: '1rem 2rem',
                    backgroundColor: 'var(--color-accent)',
                    color: '#000',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                }}
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
