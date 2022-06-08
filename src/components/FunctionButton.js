import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

export const FunctionButton = ({ buttonValue }) => {
    const { handleSetCalcFunction } = useContext(NumberContext);
    return (
        <button className="function-button" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
            {buttonValue}
        </button>
    );
};
