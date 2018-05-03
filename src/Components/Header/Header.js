import React from 'react';
import './Header.css';
import logo from './logo.png';

import Button from '../Button/Button';

const Header = () => {
    return (
        <div>
            <header>
                <div className="header__logo">
                    <a href="index.html"><img src={logo} alt="logo" /></a>
                </div>

                <ul>
                    <li><Button name="Login" /></li>
                    <li><Button name="Register" /></li>
                </ul>
            </header>
        </div>
    )
};

export default Header;