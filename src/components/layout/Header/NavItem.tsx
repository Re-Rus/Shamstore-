import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type NavItemProps = {
  to: string;
  label?: string;    // جعل النص اختيارياً
  children?: ReactNode; // إضافة الأطفال كخيار
  className?: string;
  hideUnderline?: boolean;
};

export default function NavItem({ to, label, children, hideUnderline }: NavItemProps) {
  const { t } = useTranslation(); // استدعاء دالة الترجمة
  return (
    <NavLink to={to} className="group relative pb-2 font-medium">
      {({ isActive }) => (
        <>
          <span
            className={
              isActive
                ? "text-[#C6A13A]"
                : "text-[#1B5E20] transition-colors duration-300 group-hover:text-[#C6A13A]"
            }
          >
            {/* إذا وجد نص label اعرضه، وإلا اعرض الـ children (الأيقونة) */}
            {label ? t(label) : children}
          </span>

          {/* الخط السفلي - سيعمل للأيقونة وللنص بنفس الطريقة */}
          {!hideUnderline &&(<span
            className={`
              absolute left-0 bottom-0 
              h-[2px] w-full bg-[#C6A13A]
              transform origin-left transition-transform duration-300
              ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
            `}
          />
          )}
        </>
      )}
    </NavLink>
  );
}