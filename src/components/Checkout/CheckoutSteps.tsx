import {
  User,
  MapPin,
  CreditCard,
} from "lucide-react";

export default function CheckoutSteps() {
  const steps = [
    {
      title: "Information",
      icon: User,
      active: true,
    },
    {
      title: "Shipping",
      icon: MapPin,
      active: false,
    },
    {
      title: "Payment",
      icon: CreditCard,
      active: false,
    },
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-secondary/10
        shadow-sm
        p-6
        transition-all
        duration-300
        hover:shadow-xl
        hover:border-accent
      "
    >
      <div
        className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="
                flex
                items-center
                w-full
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className={`
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border
                    transition-all
                    duration-300
                    ${
                      step.active
                        ? `
                          bg-accent
                          border-accent
                          text-white
                          shadow-lg
                        `
                        : `
                          bg-white
                          border-secondary/20
                          text-secondary
                          hover:border-accent
                          hover:text-accent
                        `
                    }
                  `}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <p
                    className={`
                      font-semibold
                      transition-colors
                      duration-300
                      ${
                        step.active
                          ? "text-primary"
                          : "text-secondary"
                      }
                    `}
                  >
                    {step.title}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="
                    hidden
                    md:block
                    flex-1
                    h-[2px]
                    bg-secondary/15
                    mx-6
                  "
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}