import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchCategories = async () => {
    try {
      setloading(true);
      const url = await fetch("https://fakestoreapi.com/products/categories");
      // const response = await url.json();
      const response = ['Moderate Light Plants', 'High Light Plants', 'Low Light Plants', 'Bright Light Plants'];
      setCategory(response);
      setloading(false);
    } catch (error) {
      console.log("Error: ", error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <h1 className="font-bold text-center text-3xl mb-5">
        Explore Our Categories
      </h1>

      {loading && (
        <h2 className="text-red-950 text-center">Loading Categories...</h2>
      )}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {category &&
          category.map((cat, i) => (
            <Link to={`/products/${cat}`} key={i}>
              <div className="cat-box border border-black text-center py-10 px-5 hover:bg-black hover:text-white">
                <h2 className="uppercase font-bold">{cat}</h2>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Categories;
