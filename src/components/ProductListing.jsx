import React from "react";
import { Link } from "react-router-dom";
import "./ProductListing.css";

const ProductListing = ({ products }) => {
  return (
    <>
      {products &&
        products.map((product, index) => (
          <div className="products-container">
            <div className="product" key={index}>
              <h1>{product?.title}</h1>
              <h1>Price: {product?.price}</h1>
              <Link to={`/products/${product.id}`}>
                <img src={product?.thumbnail} alt={product?.title} />
                <button className="know-more-button">Know More</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default React.memo(ProductListing);
