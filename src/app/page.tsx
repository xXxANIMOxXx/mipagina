export default function Home() {
  return (
    <div>
      {/* SECCIÓN DE BIENVENIDA */}
      <div className="mb-5 border-bottom pb-4">
        <h2 className="text-ies-blue fw-bold mb-3">Bienvenidos al IES Cura Valera</h2>
        <p className="lead text-secondary">
          Tu centro educativo de referencia. Formación integral, proyectos innovadores y un futuro brillante para nuestros alumnos.
        </p>
        <button className="btn bg-ies-blue text-white mt-2 px-4 shadow-sm">
          Conocer más
        </button>
      </div>

      {/* SECCIÓN DE NOTICIAS */}
      <h3 className="h4 text-ies-orange text-uppercase fw-bold mb-4 border-start border-4 border-ies-orange ps-2">
        <i className="bi bi-newspaper me-2"></i>Últimas Noticias
      </h3>
      
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 border-start border-4 border-ies-blue shadow-sm">
            <div className="card-body">
              <div className="badge bg-secondary mb-2">20 OCT</div>
              <h5 className="card-title text-ies-blue fw-bold">Calendario Escolar</h5>
              <p className="card-text text-muted">Consulta las fechas clave para las evaluaciones finales de este trimestre.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-start border-4 border-ies-orange shadow-sm">
            <div className="card-body">
              <div className="badge bg-secondary mb-2">18 OCT</div>
              <h5 className="card-title text-ies-blue fw-bold">Excursión a Granada</h5>
              <p className="card-text text-muted">Los alumnos de 4º ESO visitarán la Alhambra el próximo viernes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}