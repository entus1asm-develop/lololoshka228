import React from 'react';

const Title = ({ text, size, color = 'black' }) => (
<h1 style={{ fontSize: size, color }}>{text}</h1>
);

const Input = ({ type, placeholder, value }) => (
<input type={type} placeholder={placeholder} value={value} />
);

export { Title, Input };