import React, { useContext } from "react";
import './Header.css';
import CartContext from "../contextStore/CartContext";
import { Link } from "react-router-dom";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <header>
            <div className='nav'>
                <Link to='/home'>HOME</Link>
                <Link to='/store'>STORE</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/ContactUS'>Contact Us</Link>
                <button className='cart' onClick={props.onShow}>
                    Cart
                    <span className='cartQuantity'>{cartCtx.itemsQuantity}</span>
                </button>
            </div>
        </header>
    )
};

export default Header;