import React from 'react';

const Rating = ({ maxStars, selectedStars }) => {
const stars = Array.from({ length: maxStars }, (_, index) => (
    <span key={index} style={{ color: index < selectedStars ? 'gold' : 'gray' }}>
    ★
    </span>
));

return <div>{stars}</div>;
};

export default Rating;