import React from "react";
import Product3DSphere from "./Product3Dsphere";
import "./Product.css";


const productList = [
  "4th Generation Meta Framework",
  "Unified Cloud Delivery Platform",
  "AI enabled Web-based Studio",
  "Pre-built Integrations and Project templates",
  "Teams Dashboard"
];

const Product = () => (
  <section className="product-section">
    <Product3DSphere />
    <div className="product-main-row">
      <div className="product-main-left">
        <h1 className="product-page-heading">PRODUCT</h1>
        <ul className="product-list">
          {productList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Product;
