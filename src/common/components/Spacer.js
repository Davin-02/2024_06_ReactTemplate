import React from 'react';

export const Spacer = ( {width = '100%', height = '100%' }) => {
    return (
        <div
            style={{
                display: 'inline-block',
                flexShrink: 0,
                width,
                height,
            }}
        />
    );
};
