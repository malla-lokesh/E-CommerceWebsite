import React, { useContext } from "react";
import './Products.css';
// import CartContext from "../../Components/contextStore/CartContext";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Components/contextStore/AuthContext";

const Products = () => {

    // const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

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
        // cartCtx.addItemToCart(updatedItem);

        fetch(`https://crudcrud.com/api/d1a14edce2d849bd8e540e8c714d2f5c/cart${authCtx.email}`, {
            method: 'POST',
            body: JSON.stringify(updatedItem),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                throw new Error('Failed to send items to backend API.');
            }
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const products = productsArr.map((item) => {
            return <div className='products' key={item.title}>
                <div className='product'>
                    <div className="productTitle">
                        {item.title}
                    </div>
                    <NavLink to={`/store/${encodeURIComponent(JSON.stringify(item))}`}>
                        <img src={item.imageURL} alt={item.title} className='productImage'/>
                    </NavLink>
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