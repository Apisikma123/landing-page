import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function FoodTemplate() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <About />
      <Gallery />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
    </>
  );
}
