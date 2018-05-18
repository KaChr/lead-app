import React from 'react';
import './Header.css';
import logo from './logo.png';

import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="row">
            <header className="col-12">
                <div className="header__logo">
                    <a href="/"><img src={logo} alt="logo" /></a>
                </div>

                <ul>
                    <li><Button url="/login" name="Login" /></li>
                    <li><Button url="/" name="Register" /></li>
                </ul>
            </header>
        </div>
    )
};

export default Header;