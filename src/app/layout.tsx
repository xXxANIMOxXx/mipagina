import "./globals.css";
// Usamos ".." para subir una carpeta y entrar en components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const metadata = {
  title: "IES Cura Valera",
  description: "Web oficial del centro educativo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-instituto-bg text-gray-700 flex flex-col min-h-screen">

        {/* El Navbar va arriba del todo */}
        <Navbar />

        {/* Contenedor central */}
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* IZQUIERDA: Contenido principal (lo que cambia) */}
            <main className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[500px]">
              {children}
            </main>

            {/* DERECHA: Barra lateral fija (Video e imagen) */}
            <Sidebar />

          </div>
        </div>

        {/* Footer abajo del todo */}
        <Footer />
      </body>
    </html>
  );
}