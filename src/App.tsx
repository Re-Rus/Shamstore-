import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/Signup";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/dashboard/Orders";
import ProductsDashboard from "./pages/dashboard/Products";
import ProtectedRoute from "./components/common/ProtectedRoute/index.tsx";
import AdminLogin from './pages/dashboard/AdminLogin';
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
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Checkout" element={<Checkout />} /> 
              </Route>

              <Route element={<ProtectedRoute />}>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Dashboard/orders" element={<Orders />} />
              <Route path="/Dashboard/products" element={<ProductsDashboard />} />
          
              </Route>
                  <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
