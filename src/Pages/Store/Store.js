import React from "react";
import Products from '../Products/Products';

const Store = (props) => {
    return (
        <React.Fragment>
            <Products />
            <div className='cartButtonDiv'>
                <button className='cartButton' onClick={props.showCart}>
                See the Cart
                </button>
            </div>
        </React.Fragment>
    )
};

export default Store;