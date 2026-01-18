import "./globals.css";
// Usamos ".." para importar desde src/components si estamos en src/app
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
      {/* Usamos el color de fondo personalizado bg-instituto-bg */}
      <body className="bg-instituto-bg text-gray-700 flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <main className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[500px]">
              {children}
            </main>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}