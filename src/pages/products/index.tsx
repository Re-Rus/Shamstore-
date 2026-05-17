
/*
========================================
Products Page
----------------------------------------
Displays all products
========================================
*/
import { useTranslation } from "react-i18next";

import { Container } from "../../components/common/Container";

import ProductGrid from "../../components/common/ProductGrid/ProductGrid";
import CategoryCard from "../../components/common/CategoryCard/CategoryCard";

const mockProducts = [
  {
    id: 1,
    title: "ASUS ROG Gaming Laptop",
    price: 1200,
    rating: 5,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 2,
    title: "Mechanical RGB Keyboard",
    price: 150,
    rating: 4,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    id: 3,
    title: "Wireless Gaming Mouse",
    price: 70,
    rating: 4,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 4,
    title: "RTX 4090 Graphics Card",
    price: 950,
    rating: 5,
    category: "Parts",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
];

function ProductsPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="py-10 space-y-10">
        {/* CATEGORIES */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          <CategoryCard
            title={t("categories.laptops")}
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          />

          <CategoryCard
            title={t("categories.accessories")}
            image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
          />

          <CategoryCard
            title={t("categories.parts")}
            image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          />
        </div>

        {/* PRODUCTS */}

        <ProductGrid products={mockProducts} />
      </div>
    </Container>
  );
}

export default ProductsPage;