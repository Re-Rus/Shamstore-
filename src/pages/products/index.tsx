import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "../../components/common/Container";
import ProductGrid from "../../components/common/ProductGrid/ProductGrid";
import HeroSection from "./HeroSection";
import Input from "../../components/ui/Input/Input";

import products from "../../components/common/data";
import Pagination from "../../components/products/Pagination/Pagination";

function ProductsPage() {

  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 2;

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) *
    productsPerPage;

  const currentProducts =
    products.slice(
      startIndex,
      startIndex + productsPerPage
    );

  return (

    <div className="bg-background min-h-screen">

      {/* HERO */}

      <HeroSection />

      {/* CONTENT */}

      <Container>

        <div className="py-12">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* SIDEBAR */}

            <aside className="space-y-6">

              {/* SEARCH */}

              <div
                className="
                bg-white
                rounded-3xl
                p-5
                shadow-sm
                border
                border-secondary/10
                "
              >

                <h2
                  className="
                  text-lg
                  font-bold
                  text-primary
                  mb-4
                  "
                >
                  {t("search.search")}
                </h2>

                <div className="relative">

                  <span
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-accent
                    text-lg
                    z-10
                    "
                  >
                    ⌕
                  </span>

                  <Input
                    placeholderKey="search.search"
                    roundedClassName="rounded-2xl"
                    className="ps-11"
                  />

                </div>

              </div>

              {/* CATEGORY */}

              <div
                className="
                bg-white
                rounded-3xl
                p-5
                shadow-sm
                border
                border-secondary/10
                "
              >

                <h2
                  className="
                  text-lg
                  font-bold
                  text-primary
                  mb-5
                  "
                >

                  {t("categories.category")}

                </h2>

                <div className="space-y-4">

                  {[
                    "categories.all",
                    "categories.laptops",
                    "categories.accessories",
                    "categories.parts",
                  ].map((item, index) => (

                    <label
                      key={item}
                      className="
                      flex
                      items-center
                      gap-3
                      cursor-pointer
                      group
                      "
                    >

                      <input
                        type="radio"
                        name="category"
                        defaultChecked={index === 0}
                        className="
                        w-4
                        h-4
                        accent-accent
                        cursor-pointer
                        "
                      />

                      <span
                        className="
                        text-sm
                        font-medium
                        text-primary
                        transition-colors
                        duration-300
                        group-hover:text-accent
                        "
                      >

                        {t(item)}

                      </span>

                    </label>

                  ))}

                </div>

              </div>

              {/* PRICE */}

              <div
                className="
                bg-white
                rounded-3xl
                p-5
                shadow-sm
                border
                border-secondary/10
                "
              >

                <h2
                  className="
                  text-lg
                  font-bold
                  text-primary
                  mb-5
                  "
                >

                  {t("filters.priceRange")}

                </h2>

                <div className="space-y-5">

                  <input
                    type="range"
                    min="0"
                    max="3000"
                    className="
                    w-full
                    accent-accent
                    cursor-pointer
                    "
                  />

                  <div
                    className="
                    flex
                    justify-between
                    text-sm
                    text-secondary
                    "
                  >

                    <span>$0</span>

                    <span>$3000</span>

                  </div>

                  <button
                    className="
                    w-full
                    h-11
                    rounded-2xl
                    border
                    border-secondary/20
                    bg-white
                    text-primary
                    font-medium
                    transition-all
                    duration-300
                    hover:border-accent
                    hover:text-accent
                    "
                  >

                    {t("filters.resetFilters")}

                  </button>

                </div>

              </div>

            </aside>

            {/* PRODUCTS */}

            <section className="lg:col-span-3 space-y-8">

              {/* TOP BAR */}

              <div
                className="
                flex
                flex-col
                md:flex-row
                items-start
                md:items-center
                justify-between
                gap-4
                "
              >

                <p className="text-secondary font-medium">

                  {t("products.showingProducts")}

                </p>

                <select
                  className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  border-secondary/20
                  bg-white
                  text-primary
                  outline-none
                  transition-all
                  duration-300
                  focus:border-accent
                  "
                >

                  <option>{t("products.featured")}</option>
                  <option>{t("products.highToLow")}</option>
                  <option>{t("products.lowToHigh")}</option>
                  <option>{t("products.rating")}</option>
                  <option>{t("products.newest")}</option>

                </select>

              </div>

              {/* GRID */}

              <ProductGrid
                products={currentProducts}
              />

              {/* PAGINATION */}

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />

            </section>

          </div>

        </div>

      </Container>

    </div>

  );

}

export default ProductsPage;