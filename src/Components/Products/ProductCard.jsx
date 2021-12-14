import React from 'react'
import "./Products.css";

function ProductCard({ productImg,productName,productInfo }) {
    return (
            <div class="product-card">
            <div class="product-info">
              <div className="product-image">
                <img src={productImg} alt=""/>
              </div>
              <div className="product-title">
                <h3>{productName}</h3>
              </div>
              <div className="product-description">
                <p>{productInfo}</p>
              </div>
                <div className="product-price">
                    <p>Ayrıntılı bilgi için bize ulaşın</p>
                </div>
          </div>  
        </div>
    )
}

export default ProductCard
