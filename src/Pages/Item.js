import React from "react";
import './item.css';

import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Item = () => {
    const params = useParams();
    const item = JSON.parse(decodeURIComponent(params.item));

    return <React.Fragment>
        <div className="item">
            <div>
                <img src={item.imageURL} alt={item.title} className="itemImage"/>
            </div>
            <div className="itemDetails">
                <div className="itemTitle">
                    {item.title}
                </div>
                <div className="itemPrice">
                    {`$${item.price}`}
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default Item;