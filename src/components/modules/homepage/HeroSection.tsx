


import { Button } from "@/components/ui/button";
import { Link } from "react-router";

// You don't need DotPattern or Particles for this version

const HeroSection = () => {
  return (
    <div
      className="h-screen flex items-center justify-center px-6 relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true"></div>
      {/* Hero Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center transition-all duration-500 relative z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300">
          Your Best Wallet Companion
        </h1>
        <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 transition-colors duration-300">
          Effortlessly handle your payments, transfers, and everyday finances with Wallet Nest's all-in-one digital solution. Experience simple, fast money management—anytime, anywhere, with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="px-8 py-3 text-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/register">Try it now</Link>
          </Button>
       
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

