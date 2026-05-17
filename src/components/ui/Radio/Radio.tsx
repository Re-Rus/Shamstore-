import { useTranslation } from 'react-i18next';
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelKey: string;
}
export default function Radio({ labelKey, className = '', ...props }: RadioProps) {
  const { t } = useTranslation();

  return (
    <label className={`flex items-center gap-3 cursor-pointer select-none text-foreground ${className}`}>
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          className="peer sr-only"
          {...props}
        />
        
        <div className="w-5 h-5 border-2 border-secondary/40 rounded-full bg-background transition-all duration-200 
          peer-checked:border-primary
          peer-hover:border-primary/60
          peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40
          peer-disabled:opacity-50"
        ></div>
        
        <div className="absolute w-2.5 h-2.5 rounded-full bg-primary scale-0 transition-transform duration-200 peer-checked:scale-100 pointer-events-none"></div>
      </div>
      <span className="text-sm font-medium">{t(labelKey)}</span>
    </label>
  );
}