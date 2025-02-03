import { Hero } from "@/components/sections/Hero";
import { CustomerPains } from "@/components/sections/CustomerPains";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Contact } from "@/components/sections/Contact";
import Description from "@/components/sections/Description";

export default function Home() {
  return (
    <div className="min-h-screen  text-white">
      <Hero />
      <CustomerPains />
      <Services />
      <Portfolio />
      <WorkProcess />
      <Contact />
      <Description />
    </div>
  );
}