import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderKey: string;
  hasSearchIcon?: boolean;
  iconClassName?: string;
  roundedClassName?: string; 
}

export default function Input({
  placeholderKey,
  hasSearchIcon = false,
  iconClassName = '',
  roundedClassName = 'rounded-md', 
  className = '',
  ...props
}: InputProps) {
  const { t } = useTranslation(); 


  const baseInputStyles = `w-full px-4 py-2.5 bg-background border border-secondary/20 outline-none transition-all duration-200 text-primary focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-primary ${roundedClassName}`;

  const paddingStyles = hasSearchIcon ? 'ps-11' : '';

  return (
    <div className="relative w-full flex items-center">
      
   
      {hasSearchIcon && (
        <span className={`absolute start-4 flex items-center justify-center text-lg pointer-events-none text-accent/40 ${iconClassName}`}>
          <FiSearch />
        </span>
      )}

      <input
        type="text"
        placeholder={t(placeholderKey)} // 
        className={`${baseInputStyles} ${paddingStyles} ${className}`}
        {...props}
      />
    </div>
  );
}