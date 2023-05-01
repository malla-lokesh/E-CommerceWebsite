import React from "react";
import './Cart.css';

const Cart = (props) => {
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
            <div className='items'>
                <div className='cartItem'>
                    <div className='cartItemImageAndName'>
                        <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="colors" className='cartItemImage'/>
                        <div>
                            Colors
                        </div>
                    </div>
                    <div className='cartItemQuantity'>
                        2
                    </div>
                    <div className='cartPriceAndRemoveButton'>
                        <div className='cartItemPrice'>
                            100
                        </div>
                        <button className='removeButton'>
                            Remove
                        </button>
                    </div>
                </div>
                <hr/>
                <div className='cartItem'>
                    <div className='cartItemImageAndName'>
                        <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" alt="colors" className='cartItemImage'/>
                        <div className='cartItemTitle'>
                            Black and white Colors
                        </div>
                    </div>
                    <div className='cartItemQuantity'>
                        3
                    </div>
                    <div className='cartPriceAndRemoveButton'>
                        <div className='cartItemPrice'>
                            50
                        </div>
                        <button className='removeButton'>
                            Remove
                        </button>
                    </div>
                </div>
                <hr/>
                <div className='cartItem'>
                    <div className='cartItemImageAndName'>
                        <img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" alt="colors" className='cartItemImage'/>
                        <div className='cartItemTitle'>
                            Yellow and Black Colors
                        </div>
                    </div>
                    <div className='cartItemQuantity'>
                        1
                    </div>
                    <div className='cartPriceAndRemoveButton'>
                        <div className='cartItemPrice'>
                            70
                        </div>
                        <button className='removeButton'>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            <button className='purchaseButton'>
                Purchase
            </button>
        </React.Fragment>
    )
};

export default Cart;