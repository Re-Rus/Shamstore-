import { useTranslation } from 'react-i18next';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelKey: string; 
}

export default function Checkbox({ labelKey, className = '', ...props }: CheckboxProps) {
  const { t } = useTranslation();

  return (
    <label className={`flex items-center gap-3 cursor-pointer select-none text-foreground ${className}`}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        
        <div className="w-5 h-5 border-2 border-secondary/40 rounded bg-background transition-all duration-200 
          peer-checked:bg-primary peer-checked:border-primary
          peer-hover:border-primary/60
          peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40
          peer-disabled:opacity-50 peer-disabled:bg-secondary/10"
        ></div>
        
        <svg
          className="absolute w-3 h-3 text-white scale-0 transition-transform duration-200 peer-checked:scale-100 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm font-medium">{t(labelKey)}</span>
    </label>
  );
}