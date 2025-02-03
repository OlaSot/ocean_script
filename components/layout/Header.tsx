"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../Container";
import ArrowRightButton from "../ui/arrowRightBtn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
      <div className=" text-white">
        <div className="flex items-center justify-between h-20">
         
          <Link href="/" className="text-[28px] font-bold text-white">
            Ocean Script
          </Link>

        
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="/contacts" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Contacts
            </Link>
          </nav>

        
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <button className="text-white/80 hover:text-white transition-colors">
                ENG
              </button>
            </div>

            
              <ArrowRightButton text={"Leave a request"}/>
            
            
          </div>

         
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

    
      <motion.div
        className="fixed inset-y-0 right-0 w-full bg-black md:hidden"
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
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
      </Container>
    </motion.header>
  );
}