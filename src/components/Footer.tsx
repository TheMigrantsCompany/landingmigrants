import React from "react";
import { IconPhone, IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1D] border-t border-[#3B1C32] py-6 relative z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <a
            href="https://wa.me/5492901502553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#25D366] transition-colors cursor-pointer underline"
          >
            <IconPhone size={16} stroke={1.5} className="text-gray-500" />
            Mensajes a WhatsApp
          </a>
          <span className="hidden md:inline mx-2">|</span>
          <span className="flex items-center gap-1">
            <IconMail size={16} stroke={1.5} className="text-gray-500" />
            iara.baudino.dev@gmail.com
          </span>
        </div>
        <div className="text-xs text-gray-500 mt-2 md:mt-0">
          © {new Date().getFullYear()} Iara Baudino. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
