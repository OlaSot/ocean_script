"use client";

import { Container } from "@/components/Container";
import { Contact } from "@/components/sections/Contact";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import TypesOfSolutions from "@/components/sections/TypesOfSolutions";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/tag";
import { AdvertisingGrid } from "@/components/ui/AdvertisingGrid";
import { motion } from "framer-motion";
import { Advantages } from "@/components/sections/Advantages";

export default function AdvertisingPage() {

   const logos=[
    { src: "/logos/googleads.svg", alt: "Laravel" },
    { src: "/logos/fb.svg", alt: "Laravel" },
    { src: "/logos/tiktok.svg", alt: "Laravel" },
    { src: "/logos/pinterest.svg", alt: "Laravel" }
]

const advertisingItems = [
    { number: "01", title: "SMM", isDark: false },
    { number: "02", title: "GOOGLE ADS", isDark: true },
    { number: "03", title: "FACEBOOK ADS", isDark: true },
    { number: "04", title: "OTHERS", isDark: false },
  ];


  return (
    <div>
      <PageHero
        title="Advertising"
        description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
        bg="/advertising.webp"
        tagText="Ads"
      />
      <Container>
        <div className="mb-[150px]">

          <div className="flex flex-col md:flex-row gap-5 items-center">

            <div className="flex flex-col gap-6 flex-1">
              <motion.div
                className="text-[40px] font-bold text-black flex flex-col gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >

                <div className="inline-flex">
                  <Tag text={"Service"} variant="black" />
                </div>
                <h2>About advertising</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" text-lg leading-7"
              >
                <p>
                Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc nec sagittis ullamcorper adipiscing. Justo gravida non elementum enim. Nullam vulputate varius nisi ullamcorper. Interdum viverra eget odio mattis mollis. Sit eu ultricies interdum libero auctor. Sagittis faucibus aenean urna volutpat quam libero potenti morbi. Volutpat sit nisi in et aliquet mauris potenti euismod. Tortor fermentum dolor amet fermentum sit est duis pretium praesent. Sed egestas fermentum dui bibendum molestie erat. Viverra aliquam posuere consectetur nisi.
                </p>
              </motion.div>
            </div>


            <div className="flex-1">
              <AdvertisingGrid items={advertisingItems}/>
            </div>
          </div>
        </div>
      </Container>

      <Advantages />
      <Portfolio />
      <Technologies logos={logos} />
      <Contact />
    </div>
  );
}
