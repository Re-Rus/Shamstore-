import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

export function Layout() {
    const location = useLocation();
    
    // Routes where both Header and Footer should be hidden
    const hideLayoutRoutes = ["/login", "/signup", "/register", "/forgot-password"];
    
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
    
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