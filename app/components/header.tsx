"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { services, solutions, products } from "../data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport so the header/logo scale down on small screens.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Prevent scrolling on the body when the menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Shrink header on scroll + track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
      // Calculate scroll progress (0–100)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", items: services, basePath: "/services" },
    { label: "Solutions", items: solutions, basePath: "/solutions" },
    { label: "Products", items: products, basePath: "/products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact-us" },
  ];

  const handleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      <header
        className="sticky top-0 w-full flex items-center z-40 border-b transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          height: isScrolled ? (isMobile ? "60px" : "76px") : isMobile ? "76px" : "106px",
          background: isScrolled
            ? "rgba(255,255,255,0.98)"
            : "rgba(255,255,255,0.96)",
          backdropFilter: isScrolled ? "blur(32px) saturate(200%)" : "blur(16px) saturate(160%)",
          WebkitBackdropFilter: isScrolled ? "blur(32px) saturate(200%)" : "blur(16px) saturate(160%)",
          boxShadow: isScrolled
            ? "0 6px 32px 0 rgba(0,60,180,0.11), 0 1px 0 0 rgba(0,0,0,0.06)"
            : "0 2px 16px 0 rgba(0,80,200,0.06), 0 1px 0 0 rgba(0,0,0,0.03)",
          borderColor: isScrolled ? "rgba(0,0,0,0.09)" : "rgba(0,0,0,0.04)",
        }}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 transition-all duration-150 rounded-full"
          style={{ width: `${scrollProgress}%`, opacity: scrollProgress > 1 ? 1 : 0 }}
        />

        <div
          className="w-[90%] max-w-[1400px] mx-auto flex items-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ height: isScrolled ? "48px" : isMobile ? "60px" : "86px" }}
        >
          {/* LEFT: LOGO */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center h-full group">
              <div className="relative flex items-center justify-center">
                {/* Glowing background aura */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-indigo-400/10 to-blue-600/10 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle border ring on hover */}
                <div
                  className="relative rounded-xl border border-transparent group-hover:border-blue-200/60 dark:group-hover:border-blue-500/30 group-hover:bg-blue-50/40 dark:group-hover:bg-blue-900/10 transition-all duration-500"
                  style={{ padding: isScrolled ? "3px 6px" : "5px 8px" }}
                >
                  <Image
                    src="/BTL _rail Side.png"
                    alt="BTL Rail Logo"
                    width={340}
                    height={64}
                    className="w-auto object-contain drop-shadow-sm group-hover:drop-shadow-md group-hover:scale-[1.04] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ height: isScrolled ? (isMobile ? "30px" : "44px") : isMobile ? "38px" : "64px", width: "auto" }}
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex flex-shrink-0 justify-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() => item.items && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.items && setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-[15px] font-medium tracking-wide py-4 flex items-center"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-[15px] font-medium tracking-wide py-4 flex items-center gap-1">
                      {item.label}
                      <ChevronDown
                        className={`w-[18px] h-[18px] transition-all duration-300 ${activeDropdown === item.label
                          ? "rotate-180 text-blue-500"
                          : "text-gray-400"
                          }`}
                      />
                    </div>
                  )}

                  {/* Desktop Dropdown Mega Menu */}
                  {item.items && activeDropdown === item.label && (
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[760px] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] rounded-2xl border border-gray-200/60 dark:border-white/10 overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200">

                      {/* Decorative Gradient Line at Top */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#07518A] via-[#1A8FD1] to-[#07518A]" />

                      <div className="p-5 grid grid-cols-2 gap-x-4 gap-y-2">
                        {item.items.map((subItem, idx) => (
                          <Link
                            key={idx}
                            href={`${item.basePath}/${subItem.slug}`}
                            className="group/item flex items-start p-3 rounded-xl hover:bg-[#07518A]/5 dark:hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A8FD1]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                            {/* Icon circle */}
                            <div className="relative flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-[#1A8FD1] dark:text-blue-400 flex items-center justify-center mr-4 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-[#07518A] group-hover/item:text-white group-hover/item:shadow-lg">
                              <subItem.icon className="w-5 h-5" />
                            </div>

                            <div className="relative flex-1 min-w-0 pt-0.5">
                              <h4 className="text-[15px] font-bold text-gray-900 dark:text-white group-hover/item:text-[#07518A] dark:group-hover/item:text-blue-400 transition-colors flex items-center justify-between">
                                {subItem.title}
                                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover/item:text-[#1A8FD1] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0" />
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                                {subItem.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Footer of Dropdown */}
                      <div className="bg-gray-50/80 dark:bg-white/[0.02] px-6 py-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Explore our complete range of {item.label.toLowerCase()}</p>
                        <Link
                          href={item.basePath || "#"}
                          className="text-sm font-bold text-[#07518A] dark:text-blue-400 hover:text-[#1A8FD1] dark:hover:text-blue-300 transition-colors flex items-center gap-1.5 group/all bg-white dark:bg-white/10 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-md"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All {item.label}
                          <ChevronRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* RIGHT: MOBILE MENU BUTTON */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 hover:scale-110"
              aria-label="Open mobile menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[50] transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Side Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[90vw] sm:w-[400px] max-w-[90vw] bg-white dark:bg-[#0a0a0a] z-[60] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10">
          <Image
            src="/BTL _rail Side.png"
            alt="BTL Rail Logo"
            width={140}
            height={30}
            className="h-[30px] w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2.5 rounded-xl bg-gray-100 hover:bg-red-50 dark:bg-white/10 dark:hover:bg-red-900/20 text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-4">
          {navItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 dark:border-white/5 pb-4">
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center justify-between text-xl font-medium text-gray-900 dark:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => handleMobileExpand(item.label)}
                    className="flex items-center justify-between w-full text-xl font-medium text-gray-900 dark:text-white"
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180 text-blue-500' : 'text-gray-400'}`} />
                  </button>

                  {/* Mobile Accordion Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.label ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col space-y-3 pl-4 border-l-2 border-gray-100 dark:border-white/10">
                      {item.items?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={`${item.basePath}/${subItem.slug}`}
                          className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium py-2.5 transition-all duration-200 group/mob"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-all duration-300 group-hover/mob:scale-110 group-hover/mob:[filter:drop-shadow(0_0_6px_rgba(59,130,246,0.5))]">
                            <subItem.icon className="w-4 h-4" />
                          </span>
                          {subItem.title}
                        </Link>
                      ))}
                      <Link
                        href={item.basePath || "#"}
                        className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold py-2 mt-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View All {item.label} <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 
