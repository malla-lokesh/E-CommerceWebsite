import './App.css';
import React, { useState } from 'react';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Modal from './Components/UI/Modal';
import Cart from './Components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;