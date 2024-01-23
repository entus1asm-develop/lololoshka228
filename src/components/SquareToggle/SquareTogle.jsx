import React, { useState } from 'react';

const SquareToggle = () => {
const [isGreenVisible, setIsGreenVisible] = useState(true);

const toggleSquares = () => {
    setIsGreenVisible(!isGreenVisible);
};

return (
    <div class="squarerofls">
    {isGreenVisible ? <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }} onClick={toggleSquares}></div> : null}
    {!isGreenVisible ? <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }} onClick={toggleSquares}></div> : null}
    </div>
);
};

export default SquareToggle;