import Card from "@/components/Card";

export default function Departamentos() {
  return (
    <div>
      {/* Título de la sección con estilo del instituto */}
      <h2 className="text-ies-blue fw-bold mb-3 border-bottom pb-2">
        Nuestros Departamentos
      </h2>
      
      <p className="lead text-secondary mb-5">
        Descubre los proyectos educativos destacados que estamos llevando a cabo este trimestre en las diferentes áreas.
      </p>

      {/* Grid de Bootstrap (row + col) */}
      <div className="row g-4">
        
        {/* Tarjeta 1 */}
        <div className="col-md-6">
          <Card 
            title="Tecnología y Robótica"
            text="Los alumnos de 4º ESO presentan sus robots autónomos creados con placas Arduino y sensores de ultrasonidos."
            linkText="Ver robots"
            linkUrl="#"
          />
        </div>

        {/* Tarjeta 2 */}
        <div className="col-md-6">
          <Card 
            title="Erasmus+ / Plurilingüismo"
            text="Abierto el plazo de inscripción para las movilidades a Italia y Francia del curso 2024/2025."
            linkText="Inscribirse"
            linkUrl="#"
          />
        </div>
        
        {/* Tarjeta 3 (Ejemplo extra para rellenar) */}
        <div className="col-md-6">
          <Card 
            title="Biología y Geología"
            text="Exposición fotográfica sobre la flora autóctona del Valle del Almanzora realizada por 1º Bachillerato."
            linkText="Ver galería"
            linkUrl="#"
          />
        </div>

      </div>
    </div>
  );
}