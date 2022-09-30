import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='menu-container'>
            <div>
                <i className="fa-solid fa-wave-pulse"></i>
                <span>Daily Activity</span>
            </div>
            <div className='menu-items'>
                <a href="/home">Home</a>
                <a href="/home">Support</a>
                <a href="/home">About us</a>
                <a href="/home">Contact</a>
            </div>
        </div>
    );
};

export default Header;