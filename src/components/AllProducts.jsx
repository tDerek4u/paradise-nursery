import { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/cartSlice";
import ProductCard from "./ProductCard";

const AllProducts = () => {
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
      quantity: 1,
    };
    dispatch(addProductToCart(newProduct));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="home">
        <h1 className="font-bold text-center text-3xl mb-10">All Products</h1>

        {loading && (
          <h2 className="text-red-950 text-center">Loading Products...</h2>
        )}

        <div className="products grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AllProducts;
