import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartContextProvider from './Components/contextStore/CartContextProvider';
import Modal from './Components/UI/Modal';
import Cart from './Components/Cart/Cart';
import Store from './Pages/Store/Store';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';

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
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/store'>
          <Store/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/ContactUs'>
          <ContactUs/>
        </Route>
      <Footer/>
    </CartContextProvider>
  );
}

export default App;