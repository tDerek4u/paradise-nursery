import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/cartSlice";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchProducts = async () => {
    try {
      setloading(true);
      const url = await fetch("https://fakestoreapi.com/products");
      const response = await url.json();
      setProducts(response);
      setloading(false);
    } catch (error) {
      console.log("Error: ", error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="home">
        <Categories />

        <h1 className="font-bold text-center text-3xl mt-10 mb-5">
          Our Latest Products
        </h1>

        {loading && (
          <h2 className="text-red-950 text-center">Loading Products...</h2>
        )}

        <div className="products grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products &&
            products
              .slice(0, 8)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
