interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "solid",
  className = "",
  children,
  startIcon,
  endIcon,
  icon,
  ...props
}: ButtonProps) {
  const isIconOnly = !!icon && !children;

  const paddingStyles = isIconOnly
    ? "p-2.5 aspect-square min-w-[40px] min-h-[40px]"
    : "px-6 py-2.5";

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 active:scale-98 focus:outline-none select-none ${paddingStyles}`;

  const variantStyles = {
    solid:
      "bg-accent text-white hover:bg-accent/90 active:bg-accent/80 shadow-md",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20",
    ghost: "text-accent hover:bg-accent/10 active:bg-accent/20",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isIconOnly ? (
        <span className="flex items-center justify-center text-xl">{icon}</span>
      ) : (
        <>
          {startIcon && (
            <span className="flex items-center justify-center text-lg">
              {startIcon}
            </span>
          )}
          {children && <span>{children}</span>}
          {endIcon && (
            <span className="flex items-center justify-center text-lg">
              {endIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}