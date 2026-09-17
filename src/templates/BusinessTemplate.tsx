import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function BusinessTemplate() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Products />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
}
