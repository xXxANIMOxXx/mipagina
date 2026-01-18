import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      
      {/* 1. Bienvenida / Banner */}
      <section className="border-b border-gray-100 pb-6">
        <h2 className="text-3xl font-bold text-instituto-main mb-4">
          Bienvenidos al IES Cura Valera
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Nuestro centro apuesta por una educación integral, fomentando valores de respeto, 
          esfuerzo y convivencia. Navega por nuestro menú para conocer nuestra oferta educativa 
          y los proyectos de innovación.
        </p>
      </section>

      {/* 2. Sección de Últimas Noticias (Grid) */}
      <section>
        <h3 className="text-xl font-bold text-instituto-secondary uppercase tracking-wide mb-4 flex items-center gap-2">
          📰 Últimas Novedades
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Noticia 1 */}
          <article className="bg-gray-50 p-4 rounded-lg border-l-4 border-instituto-main hover:bg-blue-50 transition cursor-pointer">
            <span className="text-xs font-bold text-gray-400">20 OCT 2024</span>
            <h4 className="text-lg font-bold text-instituto-main mt-1 mb-2">
              Calendario de Exámenes
            </h4>
            <p className="text-sm text-gray-600">
              Ya están disponibles las fechas para la convocatoria ordinaria de Bachillerato.
            </p>
          </article>

          {/* Noticia 2 */}
          <article className="bg-gray-50 p-4 rounded-lg border-l-4 border-instituto-secondary hover:bg-orange-50 transition cursor-pointer">
            <span className="text-xs font-bold text-gray-400">18 OCT 2024</span>
            <h4 className="text-lg font-bold text-instituto-main mt-1 mb-2">
              Viaje de Fin de Curso
            </h4>
            <p className="text-sm text-gray-600">
              Reunión informativa para padres de alumnos de 4º de ESO este jueves.
            </p>
          </article>

          {/* Noticia 3 */}
          <article className="bg-gray-50 p-4 rounded-lg border-l-4 border-instituto-main hover:bg-blue-50 transition cursor-pointer">
            <span className="text-xs font-bold text-gray-400">15 OCT 2024</span>
            <h4 className="text-lg font-bold text-instituto-main mt-1 mb-2">
              Admitidos en FP Dual
            </h4>
            <p className="text-sm text-gray-600">
              Consulta el listado definitivo de admitidos en los ciclos formativos.
            </p>
          </article>
        </div>
      </section>

    </div>
  );
}