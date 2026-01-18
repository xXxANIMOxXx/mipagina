import Card from "@/components/Card";

export default function Departamentos() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-blue-900 border-b-2 border-yellow-400 pb-2 mb-6">
        Nuestros Departamentos
      </h1>
      
      <p className="mb-8 text-gray-600">
        Proyectos destacados de este trimestre:
      </p>

      {/* Grid de 2 columnas para las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          title="Tecnología"
          text="Alumnos de 4º ESO presentan sus robots creados con Arduino."
          linkText="Ver robots"
        />
        <Card 
          title="Erasmus+"
          text="Abierto el plazo de inscripción para viajar a Italia."
          linkText="Inscribirse"
        />
      </div>
    </div>
  );
}