"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wide uppercase">
            IES Replica
          </Link>

          {/* Botón Móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            ☰
          </button>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-yellow-400 transition">Inicio</Link>
            
            {/* Submenú (Dropdown simple con CSS) */}
            <div className="relative group">
              <button className="flex items-center hover:text-yellow-400 py-4">
                El Centro ▾
              </button>
              <div className="absolute left-0 top-full w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Historia</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Equipo Directivo</Link>
              </div>
            </div>

            <Link href="/departamentos" className="hover:text-yellow-400 transition">Departamentos</Link>
            <Link href="#" className="hover:text-yellow-400 transition">Contacto</Link>
          </div>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 pb-4">
            <Link href="/" className="block py-2 px-4 hover:bg-blue-700">Inicio</Link>
            <Link href="/departamentos" className="block py-2 px-4 hover:bg-blue-700">Departamentos</Link>
          </div>
        )}
      </div>
    </nav>
  );
}