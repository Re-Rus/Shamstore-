import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from '../../common/ProductCard/ProductCard';
import { Container } from '../../common/Container';
import { useTranslation } from 'react-i18next';


const featuredProducts = [
  {
    id: 1,
    title: "Gaming Laptop Pro X1",
    price: 1499.99,
    rating: 5,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", 
  },
  {
    id: 2,
    title: "Wireless Mechanical Keyboard",
    price: 189.50,
    rating: 4,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    id: 3,
    title: "4K Gaming Monitor 27\"",
    price: 350.00,
    rating: 4,
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  },
  {
    id: 4, 
    title: "4K Gaming Monitor 27\"",
    price: 350.00,
    rating: 4,
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 5, 
    title: "4K Gaming Monitor 27\"",
    price: 350.00,
    rating: 4,
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
];


function FeaturedProductsSection() {
  // Initialize the translation hook for multi-language support
  const { t } = useTranslation();

  return (
    // Main section wrapper with vertical padding and a light background
    <section className="py-12 bg-neutral-50">
      
      {/* Container to restrict maximum width and center content */}
      <Container className="max-w-6xl">
        
        {/* --- Section Header --- */}
        <div className="flex justify-between items-end mb-8">
          
          {/* Title and Subtitle */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              {t("Featured Products.Featured Products")} 
            </h2>
            <p className="text-accent text-lg">
              {t("Featured Products.title")} 
            </p>
          </div>

          {/* --- Custom Navigation Buttons --- */}
      
          <div className="flex gap-3">
            {/* Previous Slide Button */}
            <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center
             rounded-full border border-neutral-200 text-neutral-600 hover:border-accent 
             hover:text-primary transition-colors cursor-pointer bg-white z-10">
              <FiChevronLeft className="w-6 h-6 text-accent " />
            </button>
            
            {/* Next Slide Button */}
            <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center
             rounded-full border border-neutral-200 text-neutral-600 hover:border-accent 
             hover:text-primary transition-colors cursor-pointer bg-white z-10">
              <FiChevronRight className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>

        {/* --- Swiper Carousel --- */}
        <div className="w-full pb-12 overflow-hidden"> 
          
          <Swiper
            modules={[Navigation, Pagination]} // Enable navigation arrows and dots logic
            spaceBetween={20} // Pixel space between each product card
            slidesPerView={1.2} // Show 1 full card and a piece of the next one on mobile screens
            
            // Connect Swiper's internal navigation to our custom buttons above
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            
            // Enable clickable dots at the bottom that dynamically change size
            pagination={{ clickable: true, dynamicBullets: true }} 
            
            // Responsive settings: change how many cards are visible based on screen width
            breakpoints={{
              640: { slidesPerView: 2.5 }, 
              1024: { slidesPerView: 4 }, 
            }}
            className="w-full" 
          >
            {/* Loop through the product array to create a slide for each item */}
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard 
                 id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  category={product.category}
                  className="w-50 max-w-sm" 
                  imageClassName="h-20"
                  animationClassName="" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProductsSection;