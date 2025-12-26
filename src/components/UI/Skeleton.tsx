import React from 'react';

interface SkeletonProps {
    width?: string;
    height?: string;
    variant?: 'text' | 'rect' | 'circle';
    className?: string;
    style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    variant = 'text',
    className = '',
    style = {},
}) => {
    const baseStyle: React.CSSProperties = {
        width,
        height,
        borderRadius: variant === 'circle' ? '50%' : variant === 'text' ? 'var(--radius-sm)' : '0',
        marginBottom: variant === 'text' ? '0.5rem' : '0',
        ...style,
    };

    return (
        <div
            className={`skeleton ${className}`}
            style={baseStyle}
            aria-hidden="true"
        />
    );
};

export default Skeleton;
