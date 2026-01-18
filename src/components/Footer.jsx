import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-instituto-main text-white mt-auto border-t-4 border-instituto-secondary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Información del Centro */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold uppercase tracking-wider">IES Cura Valera</h4>
            <p className="text-sm text-blue-200 mt-1">
              C/ Profesor Juan Antonio, s/n<br/>
              04600 Huércal-Overa (Almería)
            </p>
          </div>

          {/* Enlaces de Interés (Requerido) */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
            <Link 
              href="https://www.juntadeandalucia.es/educacion/portals/web/ced" 
              target="_blank" 
              className="hover:text-instituto-secondary transition flex items-center gap-2"
            >
              <span>🏛️</span> Consejería de Educación
            </Link>
            <Link 
              href="https://www.juntadeandalucia.es/educacion/seneca/seneca/jsp/portal/portal.jsp" 
              target="_blank" 
              className="hover:text-instituto-secondary transition flex items-center gap-2"
            >
              <span>🎓</span> Plataforma Séneca
            </Link>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-xs text-blue-300">
          © {new Date().getFullYear()} IES Cura Valera (Réplica Educativa) - Diseño web escolar.
        </div>
      </div>
    </footer>
  );
}