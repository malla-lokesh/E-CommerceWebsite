import { useState } from "react";
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Modal from "../Components/UI/Modal";
import CartContextProvider from "../Components/contextStore/CartContextProvider";
import { Outlet } from "react-router-dom";

const MainNavigation = () => {
    const [showCart, setShowCart] = useState(false);

    return <>
        <CartContextProvider>
            <Modal showCart={showCart} hideCart={() => setShowCart(false)}>
                {showCart && <Cart hideCart={() => setShowCart(false)}/>}
            </Modal>
            <Header onShow={() => setShowCart(true)} showCart={showCart}/>
            <div className='title'>
                The Generics
            </div>
            <Outlet/>
            <Footer/>
        </CartContextProvider>
    </>
};

export default MainNavigation;