"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#081220]">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroSlider />
      </div>
    </section>
  );
}