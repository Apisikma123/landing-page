import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function ServiceTemplate() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
}
