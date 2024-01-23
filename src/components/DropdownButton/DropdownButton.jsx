import React, { useState } from 'react';

const DropdownButton = ({ buttonText, subItems }) => {
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

return (
    <div>
    <button onClick={toggleDropdown}>{buttonText}</button>
    {isOpen && (
        <ul>
        {subItems.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    )}
    </div>
);
};

export default DropdownButton;