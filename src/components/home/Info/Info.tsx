import type { IconType } from "react-icons";
import { FiShield, FiTruck, FiClock, FiAward } from "react-icons/fi";
import { Container } from "../../common/Container"; 
import { useTranslation } from 'react-i18next';

// --- Type Definition ---
// This defines the structure of the data we need for each feature card
type FeatureData = {
  id: number;
  titleKey: string;       // The translation key for the title (e.g., "features.authentic.title")
  descriptionKey: string; // The translation key for the description
  icon: IconType;         // The specific react-icon component
  gradient: string;       // Tailwind CSS classes for the background colors
};

// ---  Static Data Array ---
// Storing data outside the component prevents it from being rebuilt on every render, improving performance
const featuresData: FeatureData[] = [
  {
    id: 1,
    titleKey: "features.authentic.title",
    descriptionKey: "features.authentic.desc",
    icon: FiShield,
    gradient: "bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100%",
  },
  {
    id: 2,
    titleKey: "features.delivery.title",
    descriptionKey: "features.delivery.desc",
    icon: FiTruck,
    gradient: "bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100%",
  },
  {
    id: 3,
    titleKey: "features.support.title",
    descriptionKey: "features.support.desc",
    icon: FiClock,
    gradient: "bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100%",
  },
  {
    id: 4,
    titleKey: "features.prices.title",
    descriptionKey: "features.prices.desc",
    icon: FiAward,
    gradient: "bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid to-100%",
  },
];

// ---  Main Component ---
function Info() {
  // Initialize translation hook to convert keys into actual text based on the selected language
  const { t } = useTranslation();

  return (
    // Main wrapper section with vertical padding (py-20) and a specific background color
    <section className="py-20 bg-[#f2e7d8]">
      <Container>
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          {/* Main section title, translated dynamically */}
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t("Info.Info")}
          </h2>
          {/* Section subtitle, translated dynamically */}
          <p className="text-lg text-accent font-medium">
            {t("Info.title")}
          </p>
        </div>

        {/* --- Features Grid --- */}
        {/* Grid layout: 1 column on mobile, 2 columns on tablets (sm), 4 columns on large screens (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Loop through the featuresData array to render each item */}
          {featuresData.map((feature) => {
            const Icon = feature.icon; // Extract the icon to use it as an HTML tag
            
            return (
              // Individual feature card container
              <div
                key={feature.id}
                className="flex flex-col items-center text-center group"
              >
                {/* --- Icon Box --- */}
                {/* Contains the icon and applies the background gradient and hover animation */}
                <div
                  className={`
                    w-20 
                    h-20 
                    rounded-3xl 
                    flex 
                    items-center 
                    justify-center 
                    mb-6 
                    ${feature.gradient} // Injects the specific gradient classes from our data
                    shadow-lg
                    transition-transform
                    duration-300
                    group-hover:-translate-y-2 // Moves the icon box slightly up when hovering over the card
                  `}
                >
                  {/* Render the specific icon in white */}
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* --- Text Content --- */}
                {/* Render the translated Feature Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                
                {/* Render the translated Feature Description */}
                <p className="text-amber-accent text-sm leading-relaxed px-4">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Info;