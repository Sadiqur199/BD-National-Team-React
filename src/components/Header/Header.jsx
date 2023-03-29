import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src="https://seeklogo.com/images/B/bangladesh-cricket-board-logo-9730677A02-seeklogo.com.png" alt="" />
            <div>
                <a href="1">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;