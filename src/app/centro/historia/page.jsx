export default function Historia() {
  return (
    <div>
      <h2 className="text-primary fw-bold mb-4 border-bottom pb-2">Historia del Centro</h2>

      <div className="row align-items-center mb-4">
        <div className="col-md-8">
          <p className="lead">
            El IES Cura Valera abrió sus puertas por primera vez en el año 1950,
            convirtiéndose en un referente educativo en la comarca del Levante Almeriense.
          </p>
          <p>
            Desde sus inicios, el centro ha apostado por la innovación pedagógica y la
            inclusión, adaptándose a los cambios tecnológicos y sociales de cada década.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/images/antigua.jpg"
            alt="Foto antigua"
            className="img-fluid rounded shadow mb-4"
          />
        </div>
      </div>

      <div className="alert alert-info">
        <strong>Dato curioso:</strong> El nombre del centro rinde homenaje al sacerdote
        y educador que impulsó las primeras escuelas en la localidad.
      </div>
    </div>
  );
}