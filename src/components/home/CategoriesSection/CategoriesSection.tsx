import CategoryCard from './CategoryCard'; 
import { Cpu, Headphones, MonitorSmartphone } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';

export default function CategoriesSection() {
  // Initialize the translation hook to convert keys into the selected language
  const { t } = useTranslation();
  
  // --- Categories Data Array ---
  // We place this array inside the component so it has access to the 't' function.
  // It holds the data for each category card including translated text, icons, and links.
  const categories = [
    {
      title: t("Computer Parts.Computer Parts"),
      description: t("Computer Parts.title"),
      icon: <Cpu className="w-6 h-6" />, // Passing the Lucide-react icon as a JSX element
      linkText: t("Computer Parts.linkText"),
      href: "/parts" // URL path to navigate to when clicked
    },
    {
      title: t("Accessories.Accessories"),
      description: t("Accessories.title"),
      icon: <Headphones className="w-6 h-6" />,
      linkText: t("Accessories.linkText"),
      href: "/accessories"
    },
    {
      title: t("Laptops.Laptops"),
      description: t("Laptops.title"),
      icon: <MonitorSmartphone className="w-6 h-6" />,
      linkText: t("Laptops.linkText"),
      href: "/laptops"
    }
  ];
  
  return (
    // Main wrapper section with vertical padding (py-16) and a specific background color
    <section className="py-16 bg-[#f2e7d8]"> 
      {/* Container to center the content and set a maximum width (max-w-6xl) */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12">
          {/* Main category section title, translated dynamically */}
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t("CatS.title")}
          </h2>
          {/* Section subtitle, translated dynamically */}
          <p className="text-accent text-lg">
            {t("CatS.subtitle")}
          </p>
        </div>

        {/* --- Categories Grid --- */}
        {/* Responsive grid: 1 column on mobile, 2 on medium screens (tablets), 3 on large screens (desktops) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop through the 'categories' array to render a card for each item */}
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} // React requires a unique key for list items
              title={category.title}
              description={category.description}
              icon={category.icon}
              linkText={category.linkText}
              href={category.href}
            />
          ))}
        </div>

      </div>
    </section>
  );
}