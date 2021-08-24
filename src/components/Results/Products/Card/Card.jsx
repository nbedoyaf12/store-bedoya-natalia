import React from "react";
import exampleProduct from "../../../../rewards-store/assets/product-pics/AcerAspire-x1.png";


function Card(props) {

    return (
        <div className="card">
            <div className="productImage">
                <img src={exampleProduct} alt="Product example" />
            </div>
            <div className="productDescription">
                <div className="kind">Tecnología</div>
                <div className="productName">Pc</div>
            </div>
        </div>
    );
}

export default Card;
