"use client";

import { useState, useRef, useEffect } from "react";

interface NavLink {
  href: string;
  text: string;
}

export function Navbar() {
  const links: NavLink[] = [
    { href: "#about", text: "Sobre Mí" },
    { href: "#servicios", text: "Servicios" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#testimonials", text: "Testimonios" },
    { href: "#contacto", text: "Contacto" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false); // Cierra el menú al hacer click en un link
  };

  return (
    <>
      <nav className="fixed w-full bg-[#1A1A1D]/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-base font-normal text-gray-300">
            <a href="#" className="hover:text-[#A64D79] transition-colors">
              Iara Baudino Web Developer
            </a>
          </h1>
          {/* Menú desktop */}
          <div className="hidden md:flex gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white hover:text-[#A64D79] transition-colors cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </div>
          {/* Botón hamburguesa mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* Animación para el menú mobile */}
        <style jsx global>{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>
      </nav>
      {/* Menú mobile desplegable y overlay FUERA del nav */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          {/* Menú lateral */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-2/3 max-w-xs border-l border-[#A64D79]/30 flex flex-col items-start px-6 gap-8 shadow-lg animate-slide-in-right z-50 md:hidden menu-lateral-opaco"
          >
            <div className="w-full py-6 border-b border-[#A64D79]/30">
              <span className="text-white font-bold">Menú</span>
            </div>
            <div className="flex flex-col gap-8 w-full mt-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-white text-lg font-medium hover:text-[#A64D79] transition-colors cursor-pointer w-full"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
