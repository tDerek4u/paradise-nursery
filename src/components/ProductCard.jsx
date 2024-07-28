import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props?.product;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    dispatch(addItem(newProduct));
  };

  return (
    <div className="product border border-black px-4 py-6 space-y-3">
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
      <h3 className="text-3xl text-red-950 font-bold">${product?.price}</h3>

      <div className="flex flex-col gap-2">
        <Link to={`/product/${product.id}`} className="block">
          <button className="border border-black rounded-md px-3 py-2 hover:bg-black hover:text-white w-full">
            View Product
          </button>
        </Link>

        <button
          onClick={() => addProduct(product)}
          className="border border-black rounded-md px-3 py-2 hover:bg-black hover:text-white"
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
