import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import {
  decProduct,
  incProduct,
  removeItem,
} from "../CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const checkOut = () => {
    alert("Coming Soon!");
   
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const btnStyle =
    "font-bold w-5 h-5 bg-black text-white flex items-center justify-center cursor-pointer hover:bg-red-950";

  return (
    <Container>
      <div className="cart">
        <h1 className="font-bold text-center text-3xl mb-5">Your Cart</h1>

        <div className="cart-items space-y-5 mb-10">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="cart-item border border-black px-2 py-2 flex flex-col sm:flex-row items-center gap-5"
                key={item.id}
              >
                <div className="w-10 h-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">{item.title}</h3>

                <h5 className="font-black">
                  {item.price} - ({item.quantity})
                </h5>

                <div className="flex gap-2">
                  <button
                    className={btnStyle}
                    onClick={() => dispatch(incProduct(item.id))}
                  >
                    +
                  </button>
                  <button
                    className={btnStyle}
                    onClick={() => dispatch(decProduct(item.id))}
                  >
                    -
                  </button>
                </div>
                <button
                  className={`${btnStyle} sm:ml-auto`}
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <h2 className="text-center">No Items In Cart</h2>
          )}
        </div>
        <Link to="/products" className="border border-black text-white p-5 inline-block me-2 bg-blue-500">
          Continue Shopping
        </Link>
        <div className="border border-black p-5 inline-block">
          Total: {totalPrice.toFixed(2)}
        </div>
        <div className="border border-black p-5 inline-block ms-2" onClick={checkOut}>
          Checkout
        </div>
      </div>
    </Container>
  );
};

export default Cart;
