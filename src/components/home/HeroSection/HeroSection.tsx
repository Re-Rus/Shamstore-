import { Link } from 'react-router-dom';
import ProductModel from './ProductModel';
import Pattern from '../../ui/Pattern/Pattern';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    // Main section container
    <section className="relative w-full min-h-screen overflow-hidden 
      bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100% text-white flex items-center ">

      {/* Radial gradient overlay on top of the background  */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
      
      <Pattern/>
      <div className="relative z-10 w-full p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 items-center pointer-events-none ">
        
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-start pointer-events-auto pt-20">
         
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
          
          <div className="pt-4">
            <Link to="/products"
             className="inline-block bg-accent text-white px-8 py-3.5 
             text-base font-bold rounded-full shadow-xl hover:bg-secondary hover:shadow-2xl
             hover:-translate-y-1 transition-all duration-300">
              {t('hero.cta')}
            </Link>
          </div>
        </div>

        {/* Second Section 3D Model */}
        <div className="flex justify-center items-center 
        lg:pt-70 pointer-events-auto w-full h-[50vh] lg:h-[80vh] cursor-grab active:cursor-grabbing ">
         <ProductModel />
        </div>

      </div>
    </section>
  );
}