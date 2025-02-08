"use client";

import React, { useState } from "react";
import { Container } from "../Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Ocean Script:
              <br />
              <span className="text-4xl font-bold">
                Transforming Ideas into Digital Marvels
              </span>
            </h2>
            <p className="text-lg text-black mb-4">
              Lorem ipsum dolor sit amet consectetur. Tellus mauris vehicula
              condimentum rutrum feugiat volutpat sed. Egestas justo lectus ut
              lacus malesuada leo interdum dolor dignissim nam est. Porta lorem
              vel vulputate vehicula et bibendum ultrices eget.
            </p>
            <p className="text-lg text-black mb-4">
            Lorem ipsum dolor sit amet consectetur. Tellus mauris vehicula
              condimentum rutrum feugiat volutpat sed. Egestas justo lectus ut
              lacus malesuada leo interdum dolor dignissim nam est. Porta lorem
              vel vulputate vehicula et bibendum ultrices eget.
              </p>


            <div
              className={`transition-all duration-1000 overflow-hidden ${
                expanded ? "max-h-[1200px]" : "max-h-0"
              }`}
            >
              

              <p className="text-lg text-black mb-4">
              Lorem ipsum dolor sit amet consectetur. Tellus mauris vehicula
              condimentum rutrum feugiat volutpat sed. Egestas justo lectus ut
              lacus malesuada leo interdum dolor dignissim nam est. Porta lorem
              vel vulputate vehicula et bibendum ultrices eget.
              </p>

              <p className="text-lg text-black mb-4">
              Lorem ipsum dolor sit amet consectetur. Tellus mauris vehicula
              condimentum rutrum feugiat volutpat sed. Egestas justo lectus ut
              lacus malesuada leo interdum dolor dignissim nam est. Porta lorem
              vel vulputate vehicula et bibendum ultrices eget.
              </p>

            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-btn_color hover:text-blue-800 font-medium transition"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/Cone_01 2 (4).webp"
              alt="Digital Marvels"
              width={620}
              height={620}
              className="object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
