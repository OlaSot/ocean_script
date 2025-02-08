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

      if (currentScrollY > prevScrollY && currentScrollY > 20) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }

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
        <div className={`flex items-center justify-between h-20 transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
          <Link href="/" className="text-[28px] font-bold">
            Ocean Script
          </Link>

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
            <button className={`transition-colors ${isScrolled ? "text-black/80 hover:text-black" : "text-white/80 hover:text-white"}`}>
              ENG
            </button>
            <ArrowRightButton text="Leave a request" />
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      <motion.div
        className="fixed inset-y-0 right-0 w-full bg-black md:hidden"
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <button className="text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {["Services", "Portfolio", "Contacts"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-white text-sm mr-2">0{index + 1}</span>
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <button className="text-white/80 hover:text-white transition-colors">
              ENG
            </button>

            <button
              className="w-full bg-btn_color hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leave a request
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
