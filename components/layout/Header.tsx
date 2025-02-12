"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "../Container";
import ArrowRightButton from "../ui/arrowRightBtn";
import burgerIcon from "@/public/burger.svg";
import x from "@/public/x.svg";
import Image from "next/image";
import ArrowLeftButton from "../ui/arrowLeftBtn";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < prevScrollY || currentScrollY <= 20);
      setIsScrolled(currentScrollY > 20);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <div
          className={`flex items-center justify-between h-20 transition-all duration-300 gap-[100px] ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <button
            className={`md:hidden p-2 transition-colors order-first ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <Image src={x} alt="Menu" width={24} height={24} />
            ) : (
              <Image src={burgerIcon} alt="Menu" width={24} height={24} />
            )}
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none">
            <Link href="/">
              <span className="text-[22px] md:text-[28px] font-bold">
                Ocean Script
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-16 2xl:space-x-[100px] ">
            {["Services", "Portfolio", "Contacts"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`transition-colors ${
                  isScrolled
                    ? "text-black/80 hover:text-black"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button
              className={`transition-colors ${
                isScrolled
                  ? "text-black/80 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              ENG
            </button>
            <ArrowRightButton text="Leave a request" />
          </div>
        </div>
      </Container>

   <motion.div
  className="fixed inset-0 bg-white flex flex-col md:hidden shadow-lg overflow-y-auto"
  initial={{ x: "-100%" }}
  animate={{ x: isMobileMenuOpen ? "0%" : "-100%" }}
  transition={{ duration: 0.3 }}
>
  <div className="flex-1 p-6 flex flex-col min-h-screen">
    <div className="flex items-center justify-between mb-12">
      <span className="text-[22px] font-bold">Ocean Script</span>
      <button 
        className="p-2" 
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Image src={x} alt="Close menu" width={24} height={24} />
      </button>
    </div>


    <nav className="flex flex-col space-y-6 mb-6">
      {["Services", "Portfolio", "Contacts"].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex justify-between items-center"
        >
          <Link
            href={`/${item.toLowerCase()}`}
            className="text-2xl font-bold text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </Link>
          <span className="text-sm text-blue-600 font-bold">{`0${
            index + 1
          }`}</span>
        </motion.div>
      ))}
    </nav>


    <ArrowLeftButton
      text="Leave a request"
      className="w-full mb-6"
    />


    <div className="mt-auto flex gap-3">
      {["Eng", "Rus", "Ukr"].map((lang) => (
        <button
          key={lang}
          className="flex-1 border border-black px-4 py-2 rounded-full text-black font-medium transition-colors hover:bg-gray-100 active:bg-gray-200"
        >
          {lang}
        </button>
      ))}
    </div>
  </div>
</motion.div>
    </motion.header>
  );
}