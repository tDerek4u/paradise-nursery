import { useEffect, useState } from "react";
import Container from "./Container";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductByCategory = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchProductsByCat = async () => {
    try {
      setloading(true);
      const url = await fetch(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      const response = await url.json();
      setProducts(response);
      setloading(false);
    } catch (error) {
      console.log("Error: ", error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProductsByCat();
  }, []);

  return (
    <Container>
      <h1 className="font-bold text-center text-3xl mb-10 capitalize">
        Explore {cat} Products
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
    </Container>
  );
};

export default ProductByCategory;
