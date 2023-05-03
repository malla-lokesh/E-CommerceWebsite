import React, { useContext } from "react";
import './Header.css';
import CartContext from "../contextStore/CartContext";
import { Link } from "react-router-dom";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <header>
            <div className='nav'>
                <a href='/'>HOME</a>
                <Link to='/store'>STORE</Link>
                <Link to='/about'>ABOUT</Link>
                <button className='cart' onClick={props.onShow}>
                    Cart
                    <span className='cartQuantity'>{cartCtx.itemsQuantity}</span>
                </button>
            </div>
        </header>
    )
};

export default Header;