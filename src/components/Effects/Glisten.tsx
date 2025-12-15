import { motion } from 'framer-motion';

const Glisten = () => {
    return (
        <motion.div
            initial={{ x: '-100%', skewX: -20, opacity: 0 }}
            animate={{
                x: '200%',
                opacity: [0, 0.4, 0]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                pointerEvents: 'none',
                zIndex: 5
            }}
        />
    );
};

export default Glisten;
