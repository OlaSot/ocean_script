import { Container } from "@/components/Container";
import { Tag } from "@/components/ui/tag";
import { ValuesGrid } from "../ui/ValuesGrid";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";

export default function ValuesSection() {
  const values = [
    { number: "01", title: "WRITE SOMETHING", isDark: false },
    { number: "02", title: "WRITE SOMETHING", isDark: true },
    { number: "03", title: "WRITE SOMETHING", isDark: false },
  ];

  return (
    <Container>
      <div className="my-[150px]">
        <SectionHeader
          title="Our values"
          tagText="Values"
          tagVariant="black"
          textVariant="black"
        />

        <ValuesGrid items={values} />
      </div>
    </Container>
  );
}
