import ProductCard from "../ProductCard/ProductCard";

/*
========================================
Temporary Mock Data
----------------------------------------
Static product data for UI rendering
========================================
*/

const products = [
  {
    id: 1,
    title: "Gaming Laptop",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    price: 1200,
    rating: 5,
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    price: 150,
    rating: 4,
  },
  {
    id: 3,
    title: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
    price: 80,
    rating: 4,
  },
  {
    id: 4,
    title: "UltraWide Monitor",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    price: 500,
    rating: 5,
  },
];

/*
========================================
ProductGrid Component
----------------------------------------
Responsive grid for product cards
========================================
*/

export default function ProductGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}