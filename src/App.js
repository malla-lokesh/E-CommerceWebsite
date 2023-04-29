import './App.css';
import React from 'react';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
      <header>
        <div className='nav'>
          <a href='./index.html'>HOME</a>
          <a href='./index.html'>STORE</a>
          <a href='./index.html'>ABOUT</a>
          <div className='cart'>
            Cart
          </div>
        </div>
      </header>
      <div className='title'>
        The Generics
      </div>
      <Products />
      <div className='cartButtonDiv'>
        <button className='cartButton'>
          See the Cart
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
