import type React from "react";
import { Gift, Truck, PackageOpen } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: Gift,
      title: "GIFT WRAPPING",
      description: "ELEVATE GIFTING EXPERIENCE FOR THE LOVELY ONE",
      link: "#",
    },
    {
      icon: Truck,
      title: "SHIPPING & RETURN",
      description: "ENSURE A TRUST WITH OUR CUSTOMERS",
      link: "#",
    },
    {
      icon: PackageOpen,
      title: "JEWELRY PACKAGING",
      description: "ADDS VALUE TO THE PERCEIVED QUALITY OF THE PRODUCT",
      link: "#",
    },
  ];

  return (
    <section className="container mx-auto px-0 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 bg-zinc-200/30 py-24 px-16"
          >
            <div className="p-8 mb-6 rounded-full bg-white shadow-md flex items-center justify-center">
              <feature.icon className="w-12 h-12 stroke-[1px]" />
            </div>
            <h3 className="text-3xl font-bold tracking-wider">
              {feature.title}
            </h3>
            <p className="text-xl text-muted-foreground tracking-wide">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="text-xl tracking-wider font-medium underline hover:opacity-75"
            >
              LEARN MORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
