"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { navItems } from "./navItems";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslations } from "next-intl";

export type NavItem = {
  titleKey: string;
  href: string;
  submenu?: NavItem[];
};

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const tNav = useTranslations("nav");

  return (
    <div className="shadow-sm w-full flex flex-col">
      {/* Top bar */}
      <div className="w-full flex flex-col sm:flex-row items-center px-2 sm:px-4 py-1 sm:py-2 gap-1 sm:gap-4 bg-green-700">
        {/* Logo mobile */}
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
        {/* Social icons */}
        <div className="flex w-full items-center justify-between sm:justify-end px-2 sm:px-0">
          <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-4">
            <Link
              href="https://www.facebook.com/capec.officiel/"
              target="_blank"
            >
              <Facebook className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white hover:text-ci-orange" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/"
              target="_blank"
            >
              <Linkedin className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white hover:text-ci-orange" />
            </Link>
            <Link
              href="https://www.youtube.com/@capeccotedivoire8917"
              target="_blank"
            >
              <Youtube className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white hover:text-ci-orange" />
            </Link>
            <Link href="https://x.com/info_capec?s=20" target="_blank">
              <Twitter className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6 text-white hover:text-ci-orange" />
            </Link>

            {/* Controls (Theme + Language) */}
            <div className="flex items-center gap-1 sm:gap-2 pl-2 sm:pl-3 border-l border-white/30">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full text-foreground bg-background flex items-center min-h-[100px] sm:min-h-[120px] md:min-h-[150px] px-2 sm:px-4 md:px-8">
        {/* Logo desktop */}
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
        <div className="hidden lg:flex flex-nowrap items-center justify-center gap-1 md:gap-2 lg:gap-6 w-full max-w-screen-xl px-2 md:px-4 ml-[200px] mr-2 main-nav-links">
          {navItems.map((item) => {
            const isActive =
              item.href &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));
            if (item.submenu) {
              return (
                <div
                  key={item.titleKey}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.titleKey)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href || "#"}
                    className={cn(
                      "flex items-center px-2 md:px-3 py-1 md:py-2 text-base font-medium transition-colors hover:text-orange-300 rounded-md nav-text-reduced",
                      isActive ? "text-foreground" : ""
                    )}
                  >
                    {tNav(item.titleKey)}
                    <ChevronDown className="ml-0.5 md:ml-1 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 pt-1 md:pt-2",
                      openDropdown === item.titleKey
                        ? "block"
                        : "hidden group-hover:block"
                    )}
                  >
                    <div className="w-48 md:w-56 overflow-hidden rounded-md bg-popover text-popover-foreground shadow-lg ring-1 ring-border">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.titleKey}
                              href={subItem.href}
                              className={cn(
                                "relative block px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base transition-all duration-200 group/item",
                                isSubActive
                                  ? "text-foreground"
                                  : "text-muted-foreground hover:text-ci-green"
                              )}
                              role="menuitem"
                            >
                              <span className="relative z-10">
                                {tNav(subItem.titleKey)}
                              </span>
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
                key={item.titleKey}
                href={item.href}
                className={cn(
                  "px-2 md:px-3 py-1 md:py-2 text-base font-medium transition-colors hover:text-orange-300 rounded-md nav-text-reduced",
                  isActive ? "text-foreground" : ""
                )}
              >
                {tNav(item.titleKey)}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex justify-end w-full pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center space-x-1 text-sm font-medium text-foreground"
          >
            <span>{tNav("menu")}</span>
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full transform bg-foreground transition duration-300",
                  mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-foreground transition duration-300",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full transform bg-foreground transition duration-300",
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
            className="fixed inset-0 z-40 bg-black bg-opacity-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs bg-background text-foreground shadow-2xl px-4 py-6 lg:hidden flex flex-col overflow-y-auto transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logocapec.png"
                  alt="CAPEC Logo"
                  width={130}
                  height={130}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label={tNav("closeMenu")}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  item.href &&
                  (pathname === item.href ||
                    pathname.startsWith(`${item.href}/`));
                if (item.submenu) {
                  return (
                    <div key={item.titleKey} className="space-y-1">
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.titleKey ? null : item.titleKey
                          )
                        }
                        className={cn(
                          "flex w-full items-center justify-between text-base font-medium transition-colors hover:text-ci-orange py-2 px-2 rounded-md bg-muted",
                          isActive ? "text-foreground" : "text-foreground"
                        )}
                        aria-expanded={openDropdown === item.titleKey}
                        aria-controls={`submenu-${item.titleKey}`}
                      >
                        {tNav(item.titleKey)}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === item.titleKey ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {openDropdown === item.titleKey && (
                        <div
                          id={`submenu-${item.titleKey}`}
                          className="space-y-1 border-l-2 border-ci-green pl-4 ml-2 bg-muted rounded-md"
                        >
                          {item.submenu.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.titleKey}
                                href={subItem.href}
                                className={cn(
                                  "block rounded px-2 py-2 text-sm font-medium transition-colors",
                                  isSubActive
                                    ? "text-ci-green bg-background"
                                    : "text-foreground hover:text-ci-green hover:bg-background"
                                )}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {tNav(subItem.titleKey)}
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
                    key={item.titleKey}
                    href={item.href}
                    className={cn(
                      "py-2 px-2 rounded-md text-base font-medium transition-colors hover:text-ci-orange hover:bg-muted",
                      isActive ? "text-ci-orange" : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {tNav(item.titleKey)}
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
