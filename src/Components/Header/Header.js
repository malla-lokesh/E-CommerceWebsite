import React, { useContext } from "react";
import './Header.css';
import CartContext from "../contextStore/CartContext";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <header>
            <nav>
                <NavLink activeClassName='active' to='/home'>HOME</NavLink>
                <NavLink activeClassName='active' to='/store'>STORE</NavLink>
                <NavLink activeClassName='active' to='/about'>ABOUT</NavLink>
                <NavLink activeClassName='active' to='/login'>LOGIN</NavLink>
                <NavLink activeClassName='active' to='/ContactUS'>Contact Us</NavLink>
                <button className='cart' onClick={props.onShow}>
                    Cart
                    <span className='cartQuantity'>{cartCtx.itemsQuantity}</span>
                </button>
            </nav>
        </header>
    )
};

export default Header;