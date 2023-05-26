import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    items: [],
    itemsQuantity: 0,
    login: (token) => {},
    logout: () => {},
    addItem: (item) => {}
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [items, setItems] = useState([]);
    const [itemsQuantity, setItemsQuantity] = useState(0);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, email) => {
        let mail = email.replace(/[.@]/g, "");
        setEmail(mail);
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('email', mail);
    };

    const logoutHandler = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    const addItemHandler = (item) => {
        const index = items.findIndex((i) => i.title === item.title);

        if(index === -1) {
            setItems((prevItems) => [...prevItems, item]);
        } else {
            const updatedItems = [...items];
            updatedItems[index].quantity++;
            updatedItems[index].price = item.price * updatedItems[index].quantity;
            setItems(updatedItems);
        }
        setItemsQuantity((prevQuantity) => prevQuantity + item.quantity);
    }

    const removeItemHandler = (item) => {
        const index = items.findIndex((i) => i.title === item.title);

        if (index !== -1) {
            const updatedItems = [...items];
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

            setItems(updatedItems);
            setItemsQuantity((prevQuantity) => prevQuantity - 1);
        }
    }

    const contextValue = {
        token: token,
        email: email,
        isLoggedIn: userIsLoggedIn,
        items: items,
        itemsQuantity: itemsQuantity,
        login: loginHandler,
        logout: logoutHandler,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext;