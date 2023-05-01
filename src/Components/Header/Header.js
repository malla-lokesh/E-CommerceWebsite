import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='nav'>
                <a href='./index.html'>HOME</a>
                <a href='./index.html'>STORE</a>
                <a href='./index.html'>ABOUT</a>
                <button className='cart' onClick={props.onShow}>
                    Cart
                </button>
            </div>
        </header>
    )
};

export default Header;