"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MainNav } from "@/components/main-nav";

export function Header() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrollingUp = currentScrollY < lastScrollY;

          // Show header if scrolling up or near the top
          setShowHeader(isScrollingUp || currentScrollY <= 5);

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out transform ${
        showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="bg-white shadow-sm flex flex-col transition-all duration-500 ease-in-out">
        <div className="border-b border-b-ci-green transition-all duration-500">
          <div className="container flex flex-col items-center py-2">
            <MainNav />
          </div>
          
        </div>
      </div>
      
    </header>
  
  );
} 