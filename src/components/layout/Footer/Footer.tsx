import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {FaFacebook , FaInstagram , FaTwitter} from "react-icons/fa";
import logo2 from "../../../assets/logo2.png";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-gradient-to-br from-hero-start via-hero-end to-hero-mid text-white pt-16 pb-8 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & Description */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo2}
              alt="logo2"
              className="w-[55px] h-[55px] object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-secondary">
                {t("logo.shamstore")}
              </h2>

              <p className="text-accent text-sm font-medium">
                {t("footer.tagline")}
              </p>
            </div>
          </div>

          <p className="text-white/70 leading-7 text-sm max-w-sm">
            {t("footer.description")}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 
              flex items-center justify-center bg-white/5
              hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 
              flex items-center justify-center bg-white/5
              hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 
              flex items-center justify-center bg-white/5
              hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-secondary font-bold text-lg mb-5">
            {t("footer.quickLinks")}
          </h3>

          <ul className="space-y-3 text-white/70">
            <li>
              <Link
                to="/"
                className="hover:text-accent transition-colors duration-300"
              >
                {t("nav.home")}
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-accent transition-colors duration-300"
              >
                {t("nav.products")}
              </Link>
            </li>

            <li>
              <Link
                to="/checkout"
                className="hover:text-accent transition-colors duration-300"
              >
                {t("nav.checkout")}
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="hover:text-accent transition-colors duration-300"
              >
                {t("nav.dashboard")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-secondary font-bold text-lg mb-5">
            {t("footer.customerService")}
          </h3>

          <ul className="space-y-3 text-white/70">
            <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
              {t("footer.about")}
            </li>

            <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
              {t("footer.shipping")}
            </li>

            <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
              {t("footer.returns")}
            </li>

            <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
              {t("footer.privacy")}
            </li>

            <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
              {t("footer.terms")}
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-secondary font-bold text-lg mb-5">
            {t("footer.contact")}
          </h3>

          <div className="space-y-5 text-white/70">
            
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                className="text-accent mt-1 shrink-0"
              />

              <p className="leading-6">
                {t("footer.address")}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={18}
                className="text-accent shrink-0"
              />

              <p dir="ltr">+963 111 123 456</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-accent shrink-0"
              />

              <p>info@shamstore.sy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`mt-14 pt-6 border-t border-white/10 text-sm text-white/50 
        flex flex-col md:flex-row items-center justify-between gap-3
        ${isRTL ? "md:flex-row-reverse" : ""}
      `}
      >
        <p>
          © 2026 {t("logo.shamstore")} — {t("footer.rights")}
        </p>

        <p className="text-accent font-medium">
          {t("footer.madeWith")}
        </p>
      </div>
    </footer>
  );
}