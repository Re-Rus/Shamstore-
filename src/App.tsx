import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <main className="flex-1 ">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/:id" element={<ProductDetails />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
