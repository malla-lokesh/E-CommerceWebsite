import React, { useContext } from "react";
import './Products.css'
import CartContext from "../Store/CartContext";

const Products = () => {

    const cartCtx = useContext(CartContext);

    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageURL: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageURL: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageURL: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
        },
        {
            title: 'Blue Color',
            price: 100,
            imageURL: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
        }
    ];

    const addToCartHandler = (item) => {
        const updatedItem = {...item, quantity: 1};
        cartCtx.addItemToCart(updatedItem);
    };

    const products = productsArr.map((item) => {
            return <div className='products' key={item.title}>
                <div className='product'>
                    <div className="productTitle">
                        {item.title}
                    </div>
                    <img src={item.imageURL} alt={item.title} className='productImage'/>
                    <div className='priceAndCartButton'>
                        <div className='productPrice'>
                            ${item.price}
                        </div>
                        <button className='productCartButton' onClick={() => addToCartHandler(item)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        })

    return (
        <React.Fragment>
            <div className='musicTitle'>
                MUSIC
            </div>
            {products}
        </React.Fragment>
    )
};

export default Products;