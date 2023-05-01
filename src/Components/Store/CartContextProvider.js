import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsQuantity, setItemsQuantity] = useState(0);

    const addItemHandler = (item) => {
        const index = items.findIndex((i) => i.title === item.title);

        if(index === -1) {
            setItems((prevItems) => [...prevItems, item]);
        } else {
            const updatedItems = [...items];
            updatedItems[index].quantity++;
            setItems(updatedItems);
        }
    }

    const addItemToCartHandler = (item) => {
        const index = cartItems.findIndex((i) => i.title === item.title);

        if(index === -1) {
            setCartItems((prevCartItems) => [...prevCartItems, item]);
        } else {
            const updatedItems = [...cartItems];
            updatedItems[index].quantity++;
            setCartItems(updatedItems);
        }
        setItemsQuantity((prevQuantity) => prevQuantity + item.quantity);
    };

    const ctx = {
        items: items,
        cartItems: cartItems,
        itemsQuantity: itemsQuantity,
        addItem: addItemHandler,
        addItemToCart: addItemToCartHandler
    };

    return (
        <CartContext.Provider value={ctx}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;