import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

export function Layout() {
  const location = useLocation();
  
  const authRoutes = ["/login", "/signup", "/register", "/forgot-password"];
  
  const shouldHideLayout = 
    authRoutes.includes(location.pathname) || 
    location.pathname.toLowerCase().startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!shouldHideLayout && <Header />}
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {!shouldHideLayout && <Footer />}
    </div>
  );
}