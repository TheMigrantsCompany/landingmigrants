"use client";

interface NavLink {
  href: string;
  text: string;
}

export function Navbar() {
  const links: NavLink[] = [
    { href: "#about", text: "Sobre Mí" },
    { href: "#servicios", text: "Servicios" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contacto", text: "Contacto" },
  ];

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
  };

  return (
    <nav className="fixed w-full bg-[#1A1A1D]/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Tu Logo</h1>
        <div className="flex gap-6">
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
      </div>
    </nav>
  );
}
