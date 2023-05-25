import './App.css';
import React, { useContext, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartContextProvider from './Components/contextStore/CartContextProvider';
import Modal from './Components/UI/Modal';
import Cart from './Components/Cart/Cart';
import Store from './Pages/Store/Store';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Item from './Pages/Item';
import Login from './Pages/Login';
import AuthContext from './Components/contextStore/AuthContext';

function App() {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);

  return (
    <CartContextProvider>
      <Modal showCart={showCart} hideCart={() => setShowCart(false)}>
        {showCart && <Cart hideCart={() => setShowCart(false)}/>}
      </Modal>
      <Header onShow={() => setShowCart(true)} showCart={showCart}/>
        <div className='title'>
          The Generics
        </div>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/store' exact>
            {authCtx.isLoggedIn ? <Store/> : <Redirect to='login'/>}
          </Route>
          <Route path='/store/:item'>
            <Item />
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/ContactUs'>
            <ContactUs/>
          </Route>
        </Switch>
      <Footer/>
    </CartContextProvider>
  );
}

export default App;