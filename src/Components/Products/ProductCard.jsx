import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faRotateRight,
// } from "@fortawesome/free-solid-svg-icons";
import { faChartBar,faLifeRing } from '@fortawesome/free-regular-svg-icons';


function ProductCard({
  productImg,
  productName,
  productInfo,
  description,
  className,
  onClick,
}) {
  return (
    <div className={className} name="product-card" onClick={onClick}>
      <div className="product-info">
        <div className="product-image">
          <img src={productImg} alt="" />
        </div>
        <div className="product-title">
          <h3>{productName}</h3>
        </div>
        <div className="product-short-description">
          <p>{productInfo}</p>
        </div>
        <div className="product-description">
          <p>{description}</p>
        </div>
      </div>
        <div className="show_back">
        <div className="product-price">
          <p>Ayrıntılı bilgi için bize ulaşın</p>
        </div>
          <div className="show_back_inner">
            <div className="show_back_icon">
              {/* <FontAwesomeIcon icon={faLifeRing} /> */}
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
