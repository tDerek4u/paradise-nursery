import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import { removeProductFromCart } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log("first", cartItems)

  return (
    <Container>
      <div className="cart">
        <h1 className="font-bold text-center text-3xl mb-5">Your Cart</h1>

        <div className="cart-items space-y-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="cart-item border border-black px-2 py-2 flex items-center gap-5" key={item.id}>
                 <div className="w-10 h-10">
                  <img
                    src={item.image}
                    salt={item.name}
                    className="w-full h-full"
                  />
                 </div>
                <h3 className="font-semibold">{item.title}</h3>
                <button className="font-bold ml-auto w-5 h-5 bg-black text-white flex items-center justify-center cursor-pointer hover:bg-red-950"
                 onClick={() => dispatch(removeProductFromCart(item.id))}
                 >
                  X
                </button>
              </div>
            ))
          ) : (
            <h2 className="text-center">No Items In Cart</h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
