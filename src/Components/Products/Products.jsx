import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";


function Services() {
  return (
      
      <div className="products-container">
        <div className="product-cards">
          <ProductCard productImg={require("../../Images/Products/1.jpg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/2.jpg")} productName="ürün 2" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/3.jpg")} productName="ürün 3" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/4.jpg")} productName="ürün 4" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/5.jpg")} productName="ürün 5" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/6.jpg")} productName="ürün 6" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/7.jpg")} productName="ürün 7" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/8.jpg")} productName="ürün 8" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/9.jpg")} productName="ürün 9" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/10.jpg")} productName="ürün 10" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/11.jpg")} productName="ürün 11" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/12.jpg")} productName="ürün 12" productInfo="bu bir bilmem nedir"/>
        </div>
      </div>

  );
}

export default Services;
