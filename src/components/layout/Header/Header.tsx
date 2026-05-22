import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { ShoppingCart } from 'lucide-react';
import Input from "../../ui/Input/Input";
import logo from "../../../assets/logo.png";
export default function Header() {

  const { t } = useTranslation();
  return (
    <header className="fixed w-full bg-white bg-opacity-95 shadow-md px-4 md:px-6 py-3 z-20 ">
      <div className="grid grid-cols-[auto_1fr_auto] items-center">
        {/*  Logo */}
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
          {/*  Right Section */}
        <div className="flex items-center justify-end gap-9">
          {/*  Desktop Search */}
          <div className="hidden md:block relative ">
           <Input 
           placeholderKey={t("search.search")}
           hasSearchIcon={true} 
           roundedClassName="rounded-full" 
           iconClassName="text-accent hover:text-accent" />
          </div>

        {/*  Navigation */}
        <nav className="hidden md:flex justify-center gap-8 text-primary font-medium">
          <NavItem to="/" label={t("nav.home")} />
          <NavItem to="/Products" label={t("nav.products")} />
          <NavItem to="/Dashboard" label={t("nav.dashboard")} />
        </nav>
          <NavItem to="/cart" className="text-xl" hideUnderline={true}>
            <ShoppingCart  size={25} className="text-primary" />
          </NavItem>
          <Link
         to="/login"
          className="px-4 py-2 text-x font-medium 
           text-white bg-primary 
             rounded-full hover:bg-accent transition" >
          Log in
        </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
