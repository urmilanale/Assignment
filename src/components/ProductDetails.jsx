import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <>
      {productDetails ? (
        <div className="product-details">
          <h1>{productDetails.title}</h1>
          {productDetails.images.length > 1 ? (
            <Slider>
              {productDetails.images.map((productImage, index) => (
                <div key={index}>
                  <img src={productImage} alt={`Product ${index}`} />
                </div>
              ))}
            </Slider>
          ) : (
            <img src={productDetails.images[0]} alt="Product" />
          )}
          <h3>Price: {productDetails.price}</h3>
          <h3>Brand: {productDetails.brand}</h3>
          <h3>Details: {productDetails.description}</h3>
          <h3>Discount: {productDetails.discountPercentage}</h3>
          <h3>Rating: {productDetails.rating}</h3>
          <h3>Category: {productDetails.category}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
