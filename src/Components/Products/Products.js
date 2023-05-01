import React from "react";
import './Products.css'

const Products = () => {
    return (
        <React.Fragment>
            <div className='musicTitle'>
                MUSIC
            </div>

            <div className='products'>
                <div className='product1'>
                    <div className='productTitle'>
                        Album 1
                    </div>
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' className='productImage' alt="colors"/>
                    <div className='priceAndCartButton'>
                        <div className='productPrice'>
                            $12.99
                        </div>
                        <button className='productCartButton'>
                            Add To Cart
                        </button>
                    </div>
                </div>
                <div className='product2'>
                    <div className='productTitle'>
                        Album 2
                    </div>
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' className='productImage' alt="colors"/>
                    <div className='priceAndCartButton'>
                        <div className='productPrice'>
                            $14.99
                        </div>
                        <button className='productCartButton'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className='products'>
                <div className='product1'>
                    <div className='productTitle'>
                        Album 3
                    </div>
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' className='productImage' alt="colors"/>
                    <div className='priceAndCartButton'>
                        <div className='productPrice'>
                            $9.99
                        </div>
                        <button className='productCartButton'>
                            Add To Cart
                        </button>
                    </div>
                </div>
                <div className='product2'>
                    <div className='productTitle'>
                        Album 4
                    </div>
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' className='productImage' alt="colors"/>
                    <div className='priceAndCartButton'>
                        <div className='productPrice'>
                            $19.99
                        </div>
                        <button className='productCartButton'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Products;