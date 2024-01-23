import React, { useState } from 'react';

const ShowMoreText = ({ text }) => {
const [showFullText, setShowFullText] = useState(false);

const toggleText = () => {
    setShowFullText(!showFullText);
};

const displayText = showFullText ? text : text.split('. ')[0] + '.';

return (
    <div>
    <p>{displayText}</p>
    <button onClick={toggleText}>{showFullText ? 'Скрыть' : 'Показать подробнее'}</button>
    </div>
);
};

export default ShowMoreText;