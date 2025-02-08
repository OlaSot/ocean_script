"use client";

import { usePathname } from "next/navigation";
import { ServiceCardHome } from "@/components/ui/ServiceCardHome";
import { ServiceCardServices } from "./ServiceCardServices";

interface Service {
  title: string;
  description: string;
  image?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const pathname = usePathname(); 
  const isServicesPage = pathname === "/services";

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {services.map((service, index) =>
          isServicesPage ? (
            <ServiceCardServices key={index} {...service} index={index} />
          ) : (
            <ServiceCardHome key={index} {...service} index={index} />
          )
        )}
      </div>
    </div>
  );
}
