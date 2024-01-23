import React from 'react';

const Header = ({ logo, siteName }) => (
    <header>
    <img src={logo} alt="Logo" />
    <h1>{siteName}</h1>
    </header>
);

export default Header;