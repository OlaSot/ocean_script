import { Container } from "@/components/Container";
import { Tag } from "@/components/ui/tag";
import { ValuesGrid } from "../ui/ValuesGrid";
import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    { number: "01", title: "WRITE SOMETHING", isDark: false },
    { number: "02", title: "WRITE SOMETHING", isDark: true },
    { number: "03", title: "WRITE SOMETHING", isDark: false },
  ];

  return (
    <Container>
        <div className="my-[150px]">
      <motion.div
        className="text-3xl font-bold subtitle-container text-black flex justify-between items-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Our values</h2>
        <Tag text="Values" variant="black" />
      </motion.div>
      <ValuesGrid items={values} /></div>
    </Container>
  );
}
