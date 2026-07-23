import CategoryCard from './CategoryCard'; 
import { Cpu, Headphones, MonitorSmartphone } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';

export default function CategoriesSection() {
  const { t } = useTranslation();
  
 const categories = [
    {
      title: t("Computer Parts.Computer Parts"),
      description: t("Computer Parts.title"),
      icon: <Cpu className="w-6 h-6" />,
      linkText: t("Computer Parts.linkText"),
      href: "/Products?category=Parts" 
    },
    {
      title: t("Accessories.Accessories"),
      description: t("Accessories.title"),
      icon: <Headphones className="w-6 h-6" />,
      linkText: t("Accessories.linkText"),
      href: "/Products?category=Accessories" 
    },
    {
      title: t("Laptops.Laptops"),
      description: t("Laptops.title"),
      icon: <MonitorSmartphone className="w-6 h-6" />,
      linkText: t("Laptops.linkText"),
      href: "/Products?category=Laptops" 
    }
  ];
  
  return (
   
    <section className="py-16 bg-[#f2e7d8]"> 
    
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header  */}
        <div className="text-center mb-12">
        
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t("CatS.title")}
          </h2>
          {/* Section subtitle, translated dynamically */}
          <p className="text-accent text-lg">
            {t("CatS.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} 
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