"use client";

import { useState, useRef, useEffect } from "react";

interface NavLink {
  href: string;
  text: string;
}

/** Ancho del rail; debe coincidir con md:pl-16 en page.tsx y Footer.tsx */
const SIDEBAR_W = "w-16";

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
    setMenuOpen(false);
  };

  const verticalText =
    "[writing-mode:vertical-lr] [text-orientation:mixed] whitespace-nowrap";

  const linkClassDesktop = `flex shrink-0 items-center justify-center rounded-sm py-2 text-base font-medium tracking-wide text-white/90 transition-colors cursor-pointer border-r-2 border-transparent hover:bg-white/[0.03] hover:text-[#6f5f78] hover:border-[#5a4d62]/60 ${verticalText}`;

  return (
    <>
      {/* Escritorio: barra vertical izquierda */}
      <nav
        className={`fixed left-0 top-0 z-50 hidden h-screen ${SIDEBAR_W} flex-col border-r border-white/[0.06] bg-black/95 backdrop-blur-md py-4 md:flex`}
        aria-label="Navegación principal"
      >
        <div className="flex shrink-0 flex-col items-center px-1 pb-4 pt-1">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-center text-sm font-bold uppercase tracking-[0.12em] text-gray-300 transition-colors hover:text-[#6f5f78]"
          >
            HOME
          </a>
        </div>
        <div className="flex min-h-0 flex-1 flex-col items-stretch justify-center gap-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={linkClassDesktop}
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>

      {/* Móvil: barra superior */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-white/[0.06] bg-black/85 px-4 backdrop-blur-sm md:hidden">
        <h1 className="text-sm font-normal text-gray-300">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-[#6f5f78] transition-colors"
          >
            Iara Baudino
          </a>
        </h1>
        <button
          type="button"
          className="flex h-8 w-8 flex-col items-center justify-center focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`mb-1 block h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`mb-1 block h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div
            ref={menuRef}
            className="menu-lateral-opaco fixed left-0 top-0 z-50 flex h-full w-[min(85vw,20rem)] max-w-xs flex-col gap-8 border-r border-[#2f2838] px-6 shadow-lg animate-slide-in-left md:hidden"
          >
            <div className="flex w-full items-center justify-between border-b border-[#2f2838] py-6">
              <span className="font-bold text-white">Menú</span>
            </div>
            <div className="flex w-full flex-col gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="w-full cursor-pointer text-lg font-medium text-white transition-colors hover:text-[#6f5f78]"
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
