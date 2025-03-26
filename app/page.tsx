import { CustomerPains } from "@/components/sections/CustomerPains";
import { Services } from "@/components/sections/Services";
import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";

  const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
    loading: () => <div>Загрузка портфолио...</div>,
  });
  const WorkProcess = dynamic(() => import('@/components/sections/WorkProcess'), {
    loading: () => <div>Загрузка процесса работы...</div>,
  });
  const Contact = dynamic(() => import('@/components/sections/Contact'), {
    loading: () => <div>Загрузка контактов...</div>,
  });
  const Description = dynamic(() => import('@/components/sections/Description'), {
    loading: () => <div>Загрузка описания...</div>,
  });
  
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