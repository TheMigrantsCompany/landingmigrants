export function Navbar() {
  return (
    <nav className="fixed w-full bg-[#1A1A1D]/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Tu Logo</h1>
        <div className="flex gap-6">
          <a
            href="#about"
            className="text-white hover:text-[#A64D79] transition-colors"
          >
            Sobre mí
          </a>
          <a
            href="#servicios"
            className="text-white hover:text-[#A64D79] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-[#A64D79] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contacto"
            className="text-white hover:text-[#A64D79] transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
