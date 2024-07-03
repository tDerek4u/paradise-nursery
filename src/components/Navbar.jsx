import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
            to={"/products"}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
            to={"/cart"}
          >
            Cart ({cart?.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
