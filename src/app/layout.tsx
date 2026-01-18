import "./globals.css";
// Los dos puntos ".." significan "sube una carpeta hacia atrás"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const metadata = {
  title: "IES Replica",
  description: "Web escolar con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        <Navbar />

        <div className="container mx-auto p-4 md:p-8 flex-grow">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contenido cambiante (Páginas) */}
            <main className="w-full md:w-3/4">
              {children}
            </main>

            {/* Sidebar fijo */}
            <Sidebar />
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}