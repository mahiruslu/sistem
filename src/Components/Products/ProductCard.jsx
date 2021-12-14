import React from 'react'
import "./Products.css";

function ProductCard() {
    return (
            <div class="product-card">
            <div class="product-info">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
              </div>
              <div className="product-title">
                <h3>Product Name</h3>
              </div>
              <div className="product-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget egestas nisl nisi sed nisi. Sed euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget egestas nisl nisi sed nisi. Sed euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget egestas nisl nisi sed nisi. Sed euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget egestas nisl nisi sed nisi. Sed euismod
                </p>
              </div>
                <div className="product-price">
                    <p>Ayrıntılı bilgi için bize ulaşın</p>
                </div>
          </div>  
        </div>
    )
}

export default ProductCard
