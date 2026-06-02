import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { Container } from "../../components/common/Container";
import ProductGrid from "../../components/common/ProductGrid/ProductGrid";
import HeroSection from "./HeroSection";
import Input from "../../components/ui/Input/Input";

import products from "../../components/common/data";
import Pagination from "../../components/products/Pagination/Pagination";

function ProductsPage() {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  
  // ===> التعديل لترتيب المنتجات: قراءة خيار الترتيب من الرابط
  const sortFromUrl = searchParams.get("sort") || "featured";

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  // دالة تغيير القسم
  const handleCategoryChange = (categoryValue: string) => {
    const currentParams = Object.fromEntries(searchParams);
    if (categoryValue === "All") {
      delete currentParams.category;
    } else {
      currentParams.category = categoryValue;
    }
    setSearchParams(currentParams);
    setCurrentPage(1);
  };

  // ===> التعديل لترتيب المنتجات: دالة تغيير الترتيب من القائمة المنسدلة
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    const currentParams = Object.fromEntries(searchParams);
    
    if (sortValue === "featured") {
      delete currentParams.sort; // إزالة المعلمة إذا اختار "الافتراضي"
    } else {
      currentParams.sort = sortValue;
    }
    
    setSearchParams(currentParams);
    setCurrentPage(1); // العودة للصفحة الأولى عند تغيير الترتيب
  };

  // 1. فلترة المنتجات حسب القسم أولاً
  const filteredProducts =
    categoryFromUrl === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === categoryFromUrl.toLowerCase()
        );

  // ===> التعديل لترتيب المنتجات: 2. ترتيب المنتجات المفلترة
  // نأخذ نسخة من المصفوفة المفلترة حتى لا نعدل الأصلية
  const sortedProducts = [...filteredProducts]; 

  if (sortFromUrl === "price-desc") {
    // السعر: من الأعلى للأقل
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortFromUrl === "price-asc") {
    // السعر: من الأقل للأعلى
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortFromUrl === "rating") {
    // التقييم: من الأعلى للأقل
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortFromUrl === "newest") {
    // الأحدث: بافتراض أن الـ id الأكبر هو الأحدث
    sortedProducts.sort((a, b) => b.id - a.id); 
  }

  // 3. حساب التقسيم (Pagination) بناءً على المصفوفة المرتبة والمفلترة (sortedProducts)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const categoryOptions = [
    { key: "categories.all", value: "All" },
    { key: "categories.laptops", value: "Laptops" },
    { key: "categories.accessories", value: "Accessories" },
    { key: "categories.parts", value: "Parts" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <HeroSection />

      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* SIDEBAR */}
            <aside className="space-y-6">
              {/* SEARCH ... (الكود كما هو) */}
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-secondary/10">
                <h2 className="text-lg font-bold text-primary mb-4">
                  {t("search.search")}
                </h2>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent text-lg z-10">⌕</span>
                  <Input placeholderKey="search.search" roundedClassName="rounded-2xl" className="ps-11" />
                </div>
              </div>

              {/* CATEGORY ... (الكود كما هو) */}
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-secondary/10">
                <h2 className="text-lg font-bold text-primary mb-5">
                  {t("categories.category")}
                </h2>
                <div className="space-y-4">
                  {categoryOptions.map((item) => (
                    <label key={item.key} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={item.value}
                        checked={categoryFromUrl.toLowerCase() === item.value.toLowerCase()}
                        onChange={() => handleCategoryChange(item.value)}
                        className="w-4 h-4 accent-accent cursor-pointer"
                      />
                      <span className="text-sm font-medium text-primary transition-colors duration-300 group-hover:text-accent">
                        {t(item.key)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* PRICE RANGE ... (الكود كما هو) */}
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-secondary/10">
                <h2 className="text-lg font-bold text-primary mb-5">{t("filters.priceRange")}</h2>
                <div className="space-y-5">
                  <input type="range" min="0" max="3000" className="w-full accent-accent cursor-pointer" />
                  <div className="flex justify-between text-sm text-secondary">
                    <span>$0</span>
                    <span>$3000</span>
                  </div>
                  <button className="w-full h-11 rounded-2xl border border-secondary/20 bg-white text-primary font-medium transition-all duration-300 hover:border-accent hover:text-accent">
                    {t("filters.resetFilters")}
                  </button>
                </div>
              </div>
            </aside>

            {/* PRODUCTS LIST */}
            <section className="lg:col-span-3 space-y-8">
              {/* TOP BAR */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-secondary font-medium">
                  {t("products.showingProducts")} ({sortedProducts.length})
                </p>
                
                {/* ===> التعديل لترتيب المنتجات: ربط القائمة المنسدلة بالدالة والحالة */}
                <select 
                  value={sortFromUrl}
                  onChange={handleSortChange}
                  className="h-12 px-4 rounded-2xl border border-secondary/20 bg-white text-primary outline-none transition-all duration-300 focus:border-accent cursor-pointer"
                >
                  <option value="featured">{t("products.featured")}</option>
                  <option value="price-desc">{t("products.highToLow")}</option>
                  <option value="price-asc">{t("products.lowToHigh")}</option>
                  <option value="rating">{t("products.rating")}</option>
                  <option value="newest">{t("products.newest")}</option>
                </select>
              </div>

              {/* GRID */}
              {sortedProducts.length > 0 ? (
                <ProductGrid products={currentProducts} />
              ) : (
                <div className="text-center py-12 text-secondary font-medium">
                  No products found.
                </div>
              )}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductsPage;