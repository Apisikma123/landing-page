import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function StoreTemplate() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Gallery />
      <About />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
    </>
  );
}
