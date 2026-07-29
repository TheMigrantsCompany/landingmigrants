import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Products } from "@/components/sections/Products";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Technologies } from "@/components/sections/Technologies";
import { Cases } from "@/components/sections/Cases";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Founder } from "@/components/sections/Founder";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <Manifesto />
      <Products />
      <Capabilities />
      <Process />
      <Technologies />
      <Cases />
      <Ecosystem />
      <Founder />
      <ClosingCta />
      <Contact />
    </main>
  );
}
