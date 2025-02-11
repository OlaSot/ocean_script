"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container";

export function Footer() {
  return (
    <footer className="bg-[url('/bg_white.webp')] bg-cover bg-bottom relative py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.2fr_0.8fr] gap-8 md:gap-x-10 lg:gap-x-16">
          <div className="space-y-3 max-w-[230px]">
            <h2 className="text-[32px] font-bold text-black">Ocean Script</h2>
            <p className="text-[18px] text-black md:max-w-[280px]">
              Lorem ipsum dolor sit amet consectetur. Tellus massa vehicula
              condimentum ut feugiat volutpat sed.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[20px] font-semibold text-black">Navigation</h3>
            <ul className="space-y-2">
              {["Cases", "Services", "Contacts", "About us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[18px] text-black hover:text-gray-900 transition-colors block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[20px] font-semibold text-black">Services</h3>
            <ul className="space-y-2">
              {[
                "Web development",
                "UI/UX",
                "Advertising",
                "CRM & ERP",
                "AI Integration",
                "Telegram bots",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/[\s&/]/g, "-")
                      .replace(/-{2,}/g, "-")}`}
                    className="text-[18px] text-black hover:text-gray-900 transition-colors block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[20px] font-semibold text-black">Contacts</h3>
            <div className="space-y-2">
              <a
                href="tel:+380970070707"
                className="flex items-center gap-2 text-[18px] text-black hover:text-gray-900 transition-colors"
              >
                <Image src="/call.svg" alt="Call" width={20} height={20} />
                +380 97 007 07 07
              </a>
              <a
                href="mailto:somemail@gmail.com"
                className="flex items-center gap-2 text-[18px] text-black hover:text-gray-900 transition-colors"
              >
                <Image src="/mail.svg" alt="Email" width={20} height={20} />
                somemail@gmail.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <Image
                    src="/telegram.svg"
                    alt="Telegram"
                    width={40}
                    height={40}
                  />
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <Image
                    src="/linked.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>


          <div></div>
        </div>
      </Container>
    </footer>
  );
}
