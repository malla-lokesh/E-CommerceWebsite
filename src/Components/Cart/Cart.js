import React, { useContext, useEffect, useState } from "react";
import './Cart.css';
import CartContext from "../contextStore/CartContext";
import AuthContext from "../contextStore/AuthContext";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const [fetchedItems, setFetchedItems] = useState([]);

    const removeHandler = (item) => {
        cartCtx.removeItemFromCart(item);
        authCtx.removeItem(item);
    }

    useEffect(() => {
        fetch(`https://crudcrud.com/api/d1a14edce2d849bd8e540e8c714d2f5c/cart${authCtx.email}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Fetching failed!");
            }
        })
        .then((data) => {
            const combinedItems = [];
            const itemMap = new Map();

            data.forEach((item) => {
                const existingItem = itemMap.get(item.title);
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    itemMap.set(item.title, { ...item });
                }
            });

            for (const item of itemMap.values()) {
                combinedItems.push(item);
            }

            setFetchedItems(combinedItems);
        })
        .catch((error) => console.log(error));
    }, [authCtx.email]);

    const cart = fetchedItems.map((item) => {
        return <div key={item._id} className='items'>
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