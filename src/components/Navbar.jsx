"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md relative z-50">
      
      {/* ZONA SUPERIOR: Blanco con Logo */}
      <div className="bg-white py-4 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80">
            {/* Logo simulado */}
            <div className="h-16 w-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
              LOGO
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-instituto-main uppercase">
                IES Cura Valera
              </h1>
              <p className="text-sm text-gray-500 font-medium tracking-widest uppercase">
                Enseñanza de Calidad
              </p>
            </div>
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="sm:hidden text-instituto-main p-2 border border-gray-200 rounded"
          >
            Menú ☰
          </button>
        </div>
      </div>

      {/* ZONA INFERIOR: Barra Azul */}
      <nav className={`${isOpen ? 'block' : 'hidden'} sm:block bg-instituto-main text-white`}>
        <div className="container mx-auto">
          <ul className="flex flex-col sm:flex-row font-medium">
            <li><Link href="/" className="block py-3 px-6 hover:bg-white hover:text-instituto-main transition">INICIO</Link></li>
            <li><Link href="/departamentos" className="block py-3 px-6 hover:bg-white hover:text-instituto-main transition">DEPARTAMENTOS</Link></li>
            <li><Link href="#" className="block py-3 px-6 hover:bg-white hover:text-instituto-main transition">CONTACTO</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}