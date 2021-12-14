import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

function Services() {

  return (

      <div className="products-container">
        <div className="product-cards">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>

  );
}

export default Services;
