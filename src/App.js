import './App.css';
import React, { useState } from 'react';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Modal from './Components/UI/Modal';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/Store/CartContextProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <Modal showCart={showCart} hideCart={() => setShowCart(false)}>
        {showCart && <Cart hideCart={() => setShowCart(false)}/>}
      </Modal>
      <Header onShow={() => setShowCart(true)} showCart={showCart}/>
      <div className='title'>
        The Generics
      </div>
      <Products />
      <div className='cartButtonDiv'>
        <button className='cartButton' onClick={() => setShowCart(true)}>
          See the Cart
        </button>
      </div>
      <Footer />
    </CartContextProvider>
  );
}

export default App;