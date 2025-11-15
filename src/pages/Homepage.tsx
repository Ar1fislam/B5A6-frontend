import FeatureSection from "@/components/modules/homepage/FeatureSection";
import HeroSection from "@/components/modules/homepage/HeroSection";
import { TestimonialSection } from "@/components/modules/homepage/TestimonialSection";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
    </div>
  );
};
