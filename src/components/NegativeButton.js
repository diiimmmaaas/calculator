import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

export const NegativeButton = () => {
    const { handleToggleNegative } = useContext(NumberContext);
    return (
        <button type="button" className="white-button" onClick={() => handleToggleNegative()}>
            -/+
        </button>
    );
};
