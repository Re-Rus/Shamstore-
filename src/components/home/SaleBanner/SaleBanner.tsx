import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SaleBanner() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-gradient-to-br from-accent via-hero-end to-accent
     px-8 py-6 md:px-16 md:py-8 flex flex-col md:flex-row items-center 
     justify-between gap-6 text-white shadow-inner">
      

      <div className="flex flex-col space-y-1 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
          {t('SaleBanner.title')}
        </h2>
        <p className="text-white/80 text-sm font-medium">
          {t('SaleBanner.subtitle')}
        </p>
      </div>

      <div className="shrink-0">
        <Link
          to="/products?sale=true" 
          className="bg-white text-neutral-900 hover:bg-white/90 active:scale-95 
          font-semibold px-6 py-2.5 rounded-full shadow-md transition-all flex items-center gap-2">
          {t('SaleBanner.button')}
        </Link>
      </div>
    </div>
  );
}