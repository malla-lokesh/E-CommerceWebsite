import React, { useContext } from "react";
import './Cart.css';
import CartContext from "../contextStore/CartContext";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const removeHandler = (item) => {
        cartCtx.removeItemFromCart(item);
    }

    const cart = cartCtx.cartItems.map((item) => {
        return <div key={item.title} className='items'>
                <div className='cartItem'>
                    <div className='cartItemImageAndName'>
                        <img src={item.imageURL} alt="colors" className='cartItemImage'/>
                        <div className='cartItemTitle'>
                            {item.title}
                        </div>
                    </div>
                    <div className='cartItemQuantity'>
                        {item.quantity}
                    </div>
                    <div className='cartPriceAndRemoveButton'>
                        <div className='cartItemPrice'>
                            {item.price}
                        </div>
                        <button 
                            className='removeButton'
                            onClick={() => removeHandler(item)}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        
    })

    return (
        <React.Fragment>
            <div className='cartTitleAndCloseButton'>
                <div className='cartTitle'>
                    Cart
                </div>
                <button className='cartCloseButton' onClick={props.hideCart}>
                    X
                </button>
            </div>
            <div className='cartHeadings'>
                <div className='cartItemDiv'>
                    Items
                </div>
                <div className='cartQuantityDiv'>
                    Quantity
                </div>
                <div className='cartPriceDiv'>
                    Price
                </div>
            </div>
            {cart}
            <hr/>
            <button className='purchaseButton'>
                Purchase
            </button>
        </React.Fragment>
    )
};

export default Cart;