import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <ul className="flex gap-5 py-3">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "font-normal"
            }
            to={"/"}
          >
            Get Started
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold  text-white" : "font-normal"
            }
            to={"/home"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold  text-white" : "font-normal"
            }
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "font-normal"
            }
            to={"/products"}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "font-normal"
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
