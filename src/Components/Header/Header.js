import React, { useContext } from "react";
import './Header.css';
import CartContext from "../contextStore/CartContext";
import { NavLink } from "react-router-dom";
import AuthContext from "../contextStore/AuthContext";

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <header>
            <nav>
                <NavLink activeClassName='active' to='/home'>HOME</NavLink>
                <NavLink activeClassName='active' to='/store'>STORE</NavLink>
                <NavLink activeClassName='active' to='/about'>ABOUT</NavLink>
                {!authCtx.isLoggedIn && <NavLink activeClassName='active' to='/login'>LOGIN</NavLink>}
                {authCtx.isLoggedIn && <button type='button' style={{cursor: 'pointer'}} onClick={logoutHandler}>
                    LOGOUT
                </button>}
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