/**
 * Skeleton Component
 * 
 * Purpose: Reusable loading state placeholder.
 * Features: Shimmer animation, customizable dimensions.
 * 
 * @author Antigravity
 * @created 2026-01-16
 */

import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width, height, borderRadius, className = '' }) => {
    return (
        <div
            className={`skeleton-base ${className}`}
            style={{
                width: width || '100%',
                height: height || '20px',
                borderRadius: borderRadius || 'var(--radius-sm)'
            }}
        />
    );
};

export default Skeleton;
