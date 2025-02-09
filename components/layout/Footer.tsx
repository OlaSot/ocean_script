"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "../Container";

export function Footer() {
  return (
    <footer className="bg-[url('/bg_white.webp')] bg-cover bg-center relative pt-20 pb-8 text-black ">
      <Container>
        <div className=" relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/portfolio" 
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services" 
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about" 
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
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
                      className="text-sm hover:text-gray-900 transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacts</h3>
              <div className="space-y-3">
                <a
                  href="tel:+380970070707"
                  className="flex items-center gap-2 text-sm  hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +380 97 007 07 07
                </a>
                <a
                  href="mailto:somemail@gmail.com"
                  className="flex items-center gap-2 text-sm  hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  somemail@gmail.com
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-btn_color text-white hover:bg-blue-700 transition-colors"
                  >
                    <span className="sr-only">Discord</span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-btn_color text-white hover:bg-blue-700 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <span className="sr-only">Telegram</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
