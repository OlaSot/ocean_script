import { motion } from "framer-motion";
import React from "react";

import { Tag } from "../ui/tag";
import { Container } from "../Container";
import { DirectionsGrid } from "../ui/DirectionsGrid";
import ArrowBtn from "../ui/arrowLeftBtn";
import { SectionHeader } from "../ui/SectionHeader";

export default function Directions() {
  return (
    <div className="bg-[url('/CTA.webp')] bg-cover overflow-hidden rounded-[40px] py-[50px]">
      <Container>
        <SectionHeader
          title="Directions"
          tagText="Our directions"
          tagVariant="white"
          textVariant="white"
        />

        <DirectionsGrid />

        <div className="flex justify-center mt-8">
          <ArrowBtn text="Send request" />
        </div>
      </Container>
    </div>
  );
}
