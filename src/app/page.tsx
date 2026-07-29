import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Manifesto } from "@/components/sections/Manifesto";
import { Capabilities } from "@/components/sections/Capabilities";
import { Cases } from "@/components/sections/Cases";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <Products />
      <Manifesto />
      <Capabilities />
      <Cases />
      <Technologies />
      <Contact />
    </main>
  );
}
