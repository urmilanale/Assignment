# React E-Commerce Application

## Description
This is a simple two-page e-commerce application built using React. It fetches product data from the DummyJSON API.

## Pages
1. **Products Listing Page (/)**:
   - Fetches all products data from the DummyJSON API endpoint (/products).
   - Displays a list of products with the following information:
     - Product image (using the thumbnail property from the API response)
     - Product title
     - Product price
     - Button to view product details

2. **Product Details Page (/products/:productId)**:
   - On click on any of the products on the Product Listing Page, it shows the product details page.
   - Dynamically fetches product details based on the productId parameter in the URL. Uses the DummyJSON API endpoint (/products/:productId).
   - Displays detailed information about the product, including:
     - Product image (using the images property from the API response)
     - Product title
     - Product description
     - Product price
     - Discount percentage (if available)
     - Rating
     - Brand
     - Category

## How to Run
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.