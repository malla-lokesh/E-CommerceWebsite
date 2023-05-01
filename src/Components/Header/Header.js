import React, { useContext } from "react";
import './Header.css';
import CartContext from "../Store/CartContext";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <header>
            <div className='nav'>
                <a href='./index.html'>HOME</a>
                <a href='./index.html'>STORE</a>
                <a href='./index.html'>ABOUT</a>
                <button className='cart' onClick={props.onShow}>
                    Cart
                    <span className='cartQuantity'>{cartCtx.itemsQuantity}</span>
                </button>
            </div>
        </header>
    )
};

export default Header;