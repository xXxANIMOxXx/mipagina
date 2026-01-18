import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-bold">IES Replica</p>
          <p className="text-sm text-gray-400">© 2024 Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="https://www.juntadeandalucia.es" target="_blank" className="hover:text-yellow-400 underline">
            Junta de Andalucía
          </Link>
          <Link href="#" className="hover:text-yellow-400 underline">
            Plataforma Séneca
          </Link>
        </div>
      </div>
    </footer>
  );
}