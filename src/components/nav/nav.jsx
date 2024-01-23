import React from 'react';

const Nav = ({ menuItems }) => (
<nav>
    <ul>
        {menuItems.map((item, index) => (
        <li key={index}>
            <a href={item.link}>{item.title}</a>
        </li>
    ))}
    </ul>
    </nav>
);

export default Nav;