import { Hero } from "@/components/sections/Hero";
import { Cases } from "@/components/sections/Cases";
import { Manifesto } from "@/components/sections/Manifesto";
import { Capabilities } from "@/components/sections/Capabilities";
import { Photography } from "@/components/sections/Photography";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <Cases />
      <Manifesto />
      <Capabilities />
      <Photography />
      <Technologies />
      <Contact />
    </main>
  );
}
