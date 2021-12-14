import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

function Services() {

  return (

      <div className="products-container">
        <div className="product-cards">
          <ProductCard productImg={require("../../Images/Products/1.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/2.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/3.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/4.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/5.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/6.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/7.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/8.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/9.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
          <ProductCard productImg={require("../../Images/Products/10.jpeg")} productName="ürün 1" productInfo="bu bir bilmem nedir"/>
        </div>
      </div>

  );
}

export default Services;
