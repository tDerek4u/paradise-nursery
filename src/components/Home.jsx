import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

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

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      quantity: 1
    }
    dispatch(addProductToCart(newProduct));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) {
    return <Container>
      <h2 className="text-red-950 text-center">Loading Products...</h2>
    </Container>
  }

  return (
    <Container>
      <div className="home">
        <h1 className="font-bold text-center text-3xl mb-5">
          Our Latest Products
        </h1>

        <div className="products grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="product border border-black px-4 py-6 space-y-3 "
                key={product.id}
              >
                <div className="w-full h-[150px] overflow-hidden">
                  <img
                    src={product?.image}
                    alt={product.title}
                    className="block max-w-full h-full mx-auto object-contain "
                  />
                </div>
                <div className="text-[12px]">
                  Ratings: {product?.rating?.rate} ({product?.rating?.count})
                </div>
                <h2 className="text-sm font-semibold">{product?.title}</h2>
                <h3 className="text-3xl text-red-950 font-bold">
                  ${product?.price}
                </h3>

                <button
                  onClick={() => addProduct(product)}
                  className="border-2 border-black rounded-md px-3 py-2 hover:bg-black hover:text-white"
                >
                  Add To Card
                </button>
              </div>
            ))
          ) : (
            <h2 className="text-red-950 text-center">No Products Found</h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
