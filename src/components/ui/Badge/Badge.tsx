import { useTranslation } from 'react-i18next';
interface BadgeProps {
  labelKey: string; 
  variant?: 'discount' | 'new' | 'inStock'; 
  className?: string;
}

export default function Badge({
  labelKey,
  variant = 'new',
  className = '',
}: BadgeProps) {
  const { t } = useTranslation();
  const baseStyles = 'inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold rounded-md uppercase tracking-wider select-none transition-all duration-200';
  const variantStyles = {
    discount: 'bg-accent text-white shadow-sm font-black',
    new: 'bg-primary text-white',
    
    inStock: 'bg-primary/10 text-primary border border-primary/20',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {t(labelKey)}
    </span>
  );
}