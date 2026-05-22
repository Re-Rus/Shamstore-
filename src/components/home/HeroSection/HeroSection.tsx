import { Link } from 'react-router-dom';
import ProductModel from './ProductModel';
import Pattern from '../../ui/Pattern/Pattern';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  // Initialize the translation hook to use for multilingual text
  const { t } = useTranslation();
  
  return (
    // Main section container: Takes full screen height (min-h-screen) with a gradient background
    <section className="relative w-full min-h-screen overflow-hidden 
      bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100% text-white flex items-center ">

      {/* Radial gradient overlay on top of the background to add visual depth and center focus */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
      
      {/* Custom component for background patterns or aesthetic shapes */}
      <Pattern/>

      {/* Grid layout to split the screen: 1 column on small screens, 2 columns on large screens */}
      <div className="relative z-10 w-full p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 items-center pointer-events-none ">
        
        {/* --- First Section (Left): Text and Buttons --- */}
        {/* Re-enabled mouse interaction (pointer-events-auto) so the links and buttons are clickable */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-start pointer-events-auto pt-20">
         
          {/* Small badge above the title (e.g., "Featured Product" or "New Arrival") */}
          <h4 className="inline-flex items-center gap-2 w-fit mx-auto lg:mx-0 bg-accent opacity-80 px-4 py-2 rounded-full 
            font-semibold backdrop-blur-md text-xs tracking-wide border border-accent/20 shadow-sm">
              {t('hero.pr')}
          </h4>
         
          {/* Main hero title */}
          <h1 className="text-secondary text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            {t('hero.title')} 
          </h1>
          
          {/* Descriptive subtitle below the main title */}
          <p className="text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto lg:mx-0 drop-shadow-md">
            {t('hero.subtitle')} 
          </p>
          
          {/* Call to Action (CTA) button container redirecting to the products page */}
          <div className="pt-4">
            <Link to="/products"
             className="inline-block bg-accent text-white px-8 py-3.5 
             text-base font-bold rounded-full shadow-xl hover:bg-secondary hover:shadow-2xl
             hover:-translate-y-1 transition-all duration-300">
              {t('hero.cta')}
            </Link>
          </div>
        </div>

        {/* --- Second Section (Right): 3D Model --- */}
        {/* Added grab cursor effect so the user knows they can drag and interact with the product */}
        <div className="flex justify-center items-center 
        lg:pt-70 pointer-events-auto w-full h-[50vh] lg:h-[80vh] cursor-grab active:cursor-grabbing ">
         
         {/* 3D product viewer component */}
         <ProductModel />
        </div>

      </div>
    </section>
  );
}