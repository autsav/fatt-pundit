import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.tsx'
import './styles/global.css'
// Global error handler for chunk loading failures (updates)
window.addEventListener('error', (e) => {
    // Check if the error is about a missing dynamic import
    if (/Loading chunk [\d]+ failed|Failed to fetch dynamically imported module/.test(e.message)) {
        window.location.reload();
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
// Deployment Trigger: Updates applied for Navbar and Routing Fixes
