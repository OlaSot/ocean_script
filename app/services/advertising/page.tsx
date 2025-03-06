import { Container } from "@/components/Container";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AdvertisingGrid } from "@/components/ui/AdvertisingGrid";
import { Advantages } from "@/components/sections/Advantages";
import AnimatedSection from "@/components/AnimatedSection.tsx";
import ContactShortForm from "@/components/sections/ContactShortForm";


export default function AdvertisingPage() {
  const logos = [
    { src: "/logos/GoogleAds.svg", alt: "Google Ads" },
    { src: "/logos/fb.svg", alt: "Facebook Ads" },
    { src: "/logos/tiktok.svg", alt: "TikTok Ads" },
    { src: "/logos/pinterest.svg", alt: "Pinterest Ads" },
  ];

  const advertisingItems = [
    { number: "01", title: "SMM", isDark: false },
    { number: "02", title: "GOOGLE ADS", isDark: true },
    { number: "03", title: "FACEBOOK ADS", isDark: true },
    { number: "04", title: "OTHERS", isDark: false },
  ];

  return (
    <div>
      <AnimatedSection>
        <PageHero
          title="Advertising"
          description="Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum. Velit facilisis sem cras phasellus ullamcorper varius placerat."
          bg="/advers.jpg"
          tagText="Ads"
        />
      </AnimatedSection>
      <Container>
        <div className="mb-[150px]">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <SectionHeader
                title="About advertising"
                tagText="Service"
                tagVariant="black"
                textVariant="black"
              />

              <AnimatedSection
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg leading-7"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur. Convallis arcu nunc
                  nec sagittis ullamcorper adipiscing. Justo gravida non
                  elementum enim. Nullam vulputate varius nisi ullamcorper.
                  Interdum viverra eget odio mattis mollis. Sit eu ultricies
                  interdum libero auctor. Sagittis faucibus aenean urna volutpat
                  quam libero potenti morbi. Volutpat sit nisi in et aliquet
                  mauris potenti euismod. Tortor fermentum dolor amet fermentum
                  sit est duis pretium praesent. Sed egestas fermentum dui
                  bibendum molestie erat. Viverra aliquam posuere consectetur
                  nisi.
                </p>
              </AnimatedSection>
            </div>
            <div className="flex flex-col w-full sm:items-start md:flex-1">
              <AdvertisingGrid items={advertisingItems} />
            </div>
          </div>
        </div>
      </Container>

      <Advantages />
      <Portfolio />
      <Technologies logos={logos} />
      <ContactShortForm />
    </div>
  );
}