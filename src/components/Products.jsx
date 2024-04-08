import React, { useEffect, useState } from "react";
import ProductListing from "./ProductListing";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data?.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("products", products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>
        <ProductListing products={products} />
      </h1>
    </>
  );
};

export default React.memo(Products);
