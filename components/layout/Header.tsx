"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../Container";
import ArrowRightButton from "../ui/arrowRightBtn";

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
          className={`flex items-center justify-between h-20 transition-all duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {/* Бургер-меню слева */}
          <button
            className={`md:hidden p-2 transition-colors order-first ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Логотип по центру на мобильных */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none">
            <Link href="/">
              <span className="text-[28px] font-bold">Ocean Script</span>
            </Link>
          </div>

          {/* Навигация (скрывается на мобилке) */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Services", "Portfolio", "Contacts"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`transition-colors ${
                  isScrolled ? "text-black/80 hover:text-black" : "text-white/80 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>


          <div className="hidden md:flex items-center space-x-6">
            <button
              className={`transition-colors ${
                isScrolled ? "text-black/80 hover:text-black" : "text-white/80 hover:text-white"
              }`}
            >
              ENG
            </button>
            <ArrowRightButton text="Leave a request" />
          </div>
        </div>
      </Container>


      <motion.div
        className={`fixed inset-y-0 left-0 w-full bg-white flex flex-col p-6 transition-all md:hidden shadow-lg`}
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between w-full mb-20">
          <span className="text-2xl font-bold">Ocean Script</span>
          <button className="p-2" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 w-full">
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
              <span className="text-sm text-blue-600 font-bold">{`0${index + 1}`}</span>
            </motion.div>
          ))}
        </nav>

        <div className="flex-grow"></div>


        <div className="w-full">
          <ArrowRightButton text="Leave a request" className="w-full text-center" />
        </div>

        <div className="mt-6 flex justify-start gap-4">
          {["Eng", "Rus", "Ukr"].map((lang) => (
            <button
              key={lang}
              className="border border-black px-4 py-2 rounded-full text-black font-medium transition-colors hover:bg-gray-200"
            >
              {lang}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
