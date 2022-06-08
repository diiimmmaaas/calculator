import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

export const NumberButton = ({ buttonValue }) => {
    const { handleSetDisplayValue } = useContext(NumberContext);
    return (
        <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
};
