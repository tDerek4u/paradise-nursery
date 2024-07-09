import { useEffect, useState } from "react";
import Container from "./Container";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchProductsByCat = async () => {
    try {
      setloading(true);
      const url = await fetch(`https://fakestoreapi.com/products/${id}`);
      const response = await url.json();
      setProduct(response);
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
        {product.title}
      </h1>

      {loading && (
        <h2 className="text-red-950 text-center">Loading Products...</h2>
      )}
      <div className="max-w-[400px] m-auto">
        <ProductCard product={product} key={product.id} />
      </div>
    </Container>
  );
};

export default ProductItem;
