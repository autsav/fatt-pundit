import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-accent)',
                cursor: 'pointer',
                overflow: 'hidden',
                color: 'var(--color-accent)'
            }}
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute' }}
            >
                <FaMoon size={20} />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'light' ? 0 : -180,
                    scale: theme === 'light' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute' }}
            >
                <FaSun size={20} />
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
