import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

export const ClearButton = () => {
    const { handleClearValue } = useContext(NumberContext);
    return (
        <button type="button" className="white-button" onClick={() => handleClearValue()}>
            C
        </button>
    );
};

