import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./components/Home.jsx";
import AllProducts from "./components/AllProducts.jsx";
import Cart from "./components/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store.jsx";
import ProductByCategory from "./components/ProductByCategory.jsx";
import ProductItem from "./components/ProductItem.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:cat" element={<ProductByCategory />} />
      <Route path="/product/:id" element={<ProductItem />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
