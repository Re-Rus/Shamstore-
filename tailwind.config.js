/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main layout colors
        background: "var(--background)",     
        foreground: "var(--foreground)",     
        
        // Brand identity colors 
        primary: "var(--primary)",          
        secondary: "var(--secondary)",       
        accent: "var(--accent)",             
        
        // Hero section gradient colors
        'hero-start': "var(--hero-from)",    
        'hero-mid': "var(--hero-from)",      
        'hero-end': "var(--hero-to)",      
        
        // UI structural colors
        border: "var(--border)",            
        
        // Specific regional identity colors
        qasioun: "var(--qasioun-gold)",      
        orontes: "var(--orontes-green)",    
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};