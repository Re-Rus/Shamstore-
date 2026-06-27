import { useState } from 'react';
import NavItem from "./NavItem";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { ShoppingCart, User, LogOut } from 'lucide-react';
import Input from "../../ui/Input/Input";
import logo from "../../../assets/logo.png";
import { useCartStore } from "../../../store/cartStore";

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.totalItems());

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const session = localStorage.getItem('techsouk_session');
    return session ? JSON.parse(session).isLoggedIn : false;
  });

  const [userEmail, setUserEmail] = useState(() => {
    const session = localStorage.getItem('techsouk_session');
    return session ? JSON.parse(session).email : "";
  });

  // 1. حالة جديدة للتحكم بالقائمة المنسدلة
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('techsouk_session');
    setIsLoggedIn(false);
    setUserEmail("");
    setIsDropdownOpen(false); // إغلاق القائمة عند تسجيل الخروج
    navigate('/login');
  };

  // 2. استخراج الحرف الأول
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : "U";

  return (
    // تم تعديل z-index إلى z-50 لضمان ظهور القائمة المنسدلة فوق كل شيء
    <header className="fixed w-full bg-white bg-opacity-95 shadow-md px-4 md:px-6 py-3 z-50">
      <div className="grid grid-cols-[auto_1fr_auto] items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="hidden sm:block">
            <h1 className="font-bold text-xl text-primary ">
              {t("logo.shamstore")}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-9">
          
          {/* Desktop Search */}
          <div className="hidden md:block relative ">
           <Input 
           placeholderKey={t("search.search")}
           hasSearchIcon={true} 
           roundedClassName="rounded-full" 
           iconClassName="text-accent hover:text-accent" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex justify-center gap-8 text-primary font-medium">
            <NavItem to="/" label={t("nav.home")} />
            <NavItem to="/Products" label={t("nav.products")} />
          
          </nav>
          
          <NavItem to="/cart" className="text-xl relative" hideUnderline={true}>
            <div className="relative">
              <ShoppingCart size={25} className="text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </div>
          </NavItem>

          {/* 3. قسم المستخدم (الأفاتار الدائري والقائمة المنسدلة) */}
          {isLoggedIn ? (
            <div className="relative">
              {/* زر الأفاتار الدائري */}
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg hover:bg-accent transition-colors shadow-sm outline-none"
              >
                {firstLetter}
              </button>

              {/* القائمة المنسدلة المخفية */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-3 end-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  
                  {/* ترويسة القائمة */}
                  <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                    <p className="text-xs text-gray-500 mb-0.5">Signed in as</p>
                    <p className="text-sm font-bold text-gray-900 truncate" title={userEmail}>
                      {userEmail}
                    </p>
                  </div>

                  {/* خيارات القائمة */}
                  <div className="p-2">
                    <Link
                      to="/profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      <User size={18} /> Profile
                    </Link>
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 mt-1 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            <Link
             to="/login"
             className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-accent transition" >
              {t("nav.Login")} 
            </Link>
          )}

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}