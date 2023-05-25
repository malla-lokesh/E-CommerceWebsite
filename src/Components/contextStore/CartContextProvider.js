import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [itemsQuantity, setItemsQuantity] = useState(0);

    const addItemToCartHandler = (item) => {
        const index = cartItems.findIndex((i) => i.title === item.title);

        if(index === -1) {
            setCartItems((prevCartItems) => [...prevCartItems, item]);
        } else {
            const updatedItems = [...cartItems];
            updatedItems[index].quantity++;
            updatedItems[index].price = item.price * updatedItems[index].quantity;
            setCartItems(updatedItems);
        }
        setItemsQuantity((prevQuantity) => prevQuantity + item.quantity);
    };

    const removeItemFromCartHandler = (item) => {
        const index = cartItems.findIndex((i) => i.title === item.title);

        if (index !== -1) {
            const updatedItems = [...cartItems];
            const itemToRemove = updatedItems[index];

            if (itemToRemove.quantity === 1) {
                updatedItems.splice(index, 1);
            }
            else {
                const itemPrice = item.price / item.quantity;
                itemToRemove.quantity = itemToRemove.quantity - 1;
                itemToRemove.price -= itemPrice;
                updatedItems[index] = itemToRemove;
            }

            setCartItems(updatedItems);
            setItemsQuantity((prevQuantity) => prevQuantity - 1);
        }
    }

    const ctx = {
        cartItems: cartItems,
        itemsQuantity: itemsQuantity,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={ctx}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;