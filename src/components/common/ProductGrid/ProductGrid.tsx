/*
========================================
ProductGrid Component
----------------------------------------
Responsive grid for product cards
========================================
*/

import ProductCard from "../ProductCard/ProductCard";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  category?: string;
};

type ProductGridProps = {
  products: Product[];
};

function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default ProductGrid;