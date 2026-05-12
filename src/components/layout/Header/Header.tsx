import { useState } from "react";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/logo.png";
export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="bg-white/10 shadow-md px-4 md:px-6 py-3 ">
      <div className="grid grid-cols-[auto_1fr_auto] items-center">
        {/*  Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="hidden sm:block">
            <h1 className="font-bold text-xl text-[#1B5E20] ">
              {t("logo.shamstore")}
            </h1>
          </div>
        </div>

        {/*  Navigation */}
        <nav className="hidden md:flex justify-center gap-8 text-[#1B5E20]font-medium">
          <NavItem to="/" label={t("nav.home")} />
          <NavItem to="/Products" label={t("nav.products")} />
          <NavItem to="/Checkout" label={t("nav.checkout")} />
          <NavItem to="/Dashboard" label={t("nav.dashboard")} />
        </nav>

        {/*  Right Section */}
        <div className="flex items-center justify-end gap-3">
          {/*  Desktop Search */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder={t("search.search")}
              className="border rounded-lg pl-4 pr-10 py-2 
              focus:outline-none focus:ring-2 focus:ring-[#C6A13A] "
            />
            <span className="absolute right-3 top-2 text-gray-400"></span>
          </div>

          {/* Mobile Search Button */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden text-xl"
          ></button>

          {/*  Cart */}
          <NavItem to="/cart" className="text-xl" hideUnderline={true}>
            <FaShoppingCart size={25} className="text-[#1B5E20]" />
          </NavItem>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className="mt-3 md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </header>
  );
}
