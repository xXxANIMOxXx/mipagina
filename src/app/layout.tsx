import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap aquí
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importamos los iconos
import "./globals.css";
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
      <body className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />
        
        {/* Contenedor principal */}
        <div className="container my-4 flex-grow-1">
          <div className="row">
            
            {/* Contenido Principal (Izquierda) */}
            <main className="col-lg-9 mb-4">
              <div className="bg-white p-4 rounded shadow-sm border">
                {children}
              </div>
            </main>

            {/* Sidebar (Derecha) */}
            <Sidebar />
            
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}