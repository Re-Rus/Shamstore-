/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main layout colors
        background: "var(--background)",     // Application's main background color
        foreground: "var(--foreground)",     // Default text color for high readability
        
        // Brand identity colors 
        primary: "var(--primary)",          
        secondary: "var(--secondary)",       // Complementary brand color (Palmyra Sand)
        accent: "var(--accent)",             // Highlight color (Qasioun Gold)
        
        // Hero section gradient colors
        'hero-start': "var(--hero-from)",    // Starting color for the homepage hero gradient
        'hero-mid': "var(--hero-from)",       // Intermediate transition color for the gradient
        'hero-end': "var(--hero-to)",        // Final ending color for the hero section gradient
        
        // UI structural colors
        border: "var(--border)",             // Standard color for dividers, borders, and outlines
        
        // Specific regional identity colors
        qasioun: "var(--qasioun-gold)",      // Iconic gold inspired by Damascus's Qasioun Mountain
        orontes: "var(--orontes-green)",     // Vibrant green inspired by the Orontes River (Assi)
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