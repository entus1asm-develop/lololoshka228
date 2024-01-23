import React, { useState } from 'react';

const ToggleText = () => {
const [isVisible, setIsVisible] = useState(true);

const toggleVisibility = () => {
    setIsVisible(!isVisible);
};

return (
    <div>
    <button onClick={toggleVisibility}>{isVisible ? 'Скрыть' : 'Показать'}</button>
    {isVisible && <p>Текст виден</p>}
    </div>
);
};

export default ToggleText;