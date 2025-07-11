"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { navItems } from "./navItems";

export type NavItem = {
  title: string;
  href: string;
  submenu?: NavItem[];
};

export function MainNav() {
  const pathname = usePathname();
  const isRootPath = pathname === "/";
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="shadow-sm w-full flex flex-col">
      {/* Top bar: social icons and paragraph */}
      <div
        className={cn(
          "w-full flex flex-col sm:flex-row items-center px-2 sm:px-4 py-1 sm:py-2 gap-1 sm:gap-4",
          isRootPath ? "bg-green-700" : "bg-orange-500"
        )}
      >
        {/* Logo for mobile (centered) */}
        <div className="flex sm:hidden justify-center w-full">
          <Link href="/">
            <Image
              src="/images/logocapec.png"
              alt="CAPEC Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Paragraph (root path only) and social icons */}
        <div className="flex w-full items-center justify-between sm:justify-end px-2 sm:px-0">
          {isRootPath && (
            <p className="text-white italic text-xs sm:text-sm md:text-base sm:ml-auto max-w-[50%] sm:max-w-none break-words">
              La Recherche au Service du Développement
            </p>
          )}
          <div className={cn("flex items-center gap-2 sm:gap-3", isRootPath ? "ml-auto sm:ml-4" : "sm:ml-auto")}>
            <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
              <Facebook
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/"
              target="_blank"
            >
              <Linkedin
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
            <Link href="https://www.youtube.com/@capeccotedivoire8917" target="_blank">
              <Youtube
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
            <Link href="#" target="_blank">
              <Twitter
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
           
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "w-full text-black flex items-center min-h-[100px] sm:min-h-[120px] md:min-h-[150px] px-2 sm:px-4 md:px-8",
          isRootPath ? "" : "justify-center"
        )}
      >
        {/* Logo for desktop */}
        <div className="hidden sm:flex absolute top-0 left-2 sm:left-4 h-[150px] sm:h-[180px] w-[180px] sm:w-[220px] items-center justify-center overflow-visible">
          <Link href="/">
            <Image
              src="/images/logocapec.png"
              alt="CAPEC Logo"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div
          className={cn(
            "hidden md:flex flex-wrap items-center justify-center gap-1 md:gap-2 lg:gap-6 w-full max-w-screen-xl px-4 ml-[220px] mr-4",
          )}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            if (item.submenu) {
              return (
                <div
                  key={item.title}
                  className="group relative"
                  onMouseEnter={() => setHoverItem(item.title)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-medium transition-colors hover:text-orange-300 rounded-md",
                      isActive ? "text-black" : ""
                    )}
                  >
                    {item.title}
                    <ChevronDown className="ml-0.5 md:ml-1 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 pt-1 md:pt-2",
                      hoverItem === item.title ? "block" : "hidden group-hover:block"
                    )}
                  >
                    <div className="w-48 md:w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "relative block px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base transition-all duration-200 group/item",
                                isSubActive ? "text-black" : "text-gray-700 hover:text-green-700"
                              )}
                              role="menuitem"
                            >
                              <span className="relative z-10">{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "px-2 md:px-3 py-1 md:py-2 text-sm md:text-base font-medium transition-colors hover:text-orange-300 rounded-md",
                  isActive ? "text-black" : ""
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex justify-end w-full pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center space-x-1 text-sm font-medium text-black"
          >
            <span>Menu</span>
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full transform bg-black transition duration-300",
                  mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-black transition duration-300",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full transform bg-black transition duration-300",
                  mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30 sm:hidden"
            onClick={() => {
              setMobileMenuOpen(false);
              setOpenMobileSubmenu(null);
            }}
          />
          <div className="sm:hidden fixed top-[100px] left-0 z-50 w-full h-[calc(100vh-100px)] border-t border-gray-200 bg-white px-4 py-4 shadow-2xl rounded-b-md overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                if (item.submenu) {
                  return (
                    <div key={item.title} className="space-y-1">
                      <button
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.title ? null : item.title)}
                        className={cn(
                          "flex w-full items-center justify-between text-base font-medium transition-colors hover:text-ci-orange py-2 px-2 rounded-md bg-gray-50",
                          isActive ? "text-black" : "text-foreground"
                        )}
                        aria-expanded={openMobileSubmenu === item.title}
                        aria-controls={`submenu-${item.title}`}
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileSubmenu === item.title ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {openMobileSubmenu === item.title && (
                        <div id={`submenu-${item.title}`} className="space-y-1 border-l-2 border-ci-green pl-4 ml-2 bg-gray-100 rounded-md">
                          {item.submenu.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={cn(
                                  "block rounded px-2 py-2 text-sm font-medium transition-colors",
                                  isSubActive
                                    ? "text-ci-green bg-white"
                                    : "text-foreground hover:text-ci-green hover:bg-white"
                                )}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setOpenMobileSubmenu(null);
                                }}
                              >
                                {subItem.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "py-2 px-2 rounded-md text-base font-medium transition-colors hover:text-ci-orange hover:bg-gray-50",
                      isActive ? "text-ci-orange" : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}