import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

const LoadingSpinner = ({ size = 'medium', color = 'var(--color-accent)' }: LoadingSpinnerProps) => {
    const sizes = {
        small: 24,
        medium: 48,
        large: 72
    };

    const spinnerSize = sizes[size];

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: spinnerSize,
                    height: spinnerSize,
                    border: `4px solid rgba(255, 255, 255, 0.1)`,
                    borderTop: `4px solid ${color}`,
                    borderRadius: '50%'
                }}
            />
        </div>
    );
};

export default LoadingSpinner;
