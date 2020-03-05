import React from 'react';
import './navigation.css'

const NavItem = (props) => {
    return (
        <li onClick={props.clicked}>
                {props.children}
        </li>
    );
};

export default NavItem;