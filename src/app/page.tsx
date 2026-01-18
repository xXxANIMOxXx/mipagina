export default function Home() {
  return (
    <div>
      <div className="mb-5 border-bottom pb-4">
        <h2 className="text-primary fw-bold mb-3">Bienvenidos al IES Cura Valera</h2>
        <p className="lead text-secondary">
          Tu centro educativo de referencia. Formación integral, proyectos innovadores y un futuro brillante para nuestros alumnos.
        </p>
        <button className="btn btn-primary btn-lg mt-2">Conocer más</button>
      </div>

      <h3 className="h4 text-warning text-uppercase fw-bold mb-4">
        <i className="bi bi-newspaper me-2"></i>Últimas Noticias
      </h3>
      
      <div className="row g-4">
        {/* Noticia 1 */}
        <div className="col-md-6">
          <div className="card h-100 border-start border-4 border-primary shadow-sm">
            <div className="card-body">
              <div className="badge bg-secondary mb-2">20 OCT</div>
              <h5 className="card-title text-primary fw-bold">Calendario Escolar</h5>
              <p className="card-text text-muted">Consulta las fechas clave para las evaluaciones finales de este trimestre.</p>
            </div>
          </div>
        </div>

        {/* Noticia 2 */}
        <div className="col-md-6">
          <div className="card h-100 border-start border-4 border-warning shadow-sm">
            <div className="card-body">
              <div className="badge bg-secondary mb-2">18 OCT</div>
              <h5 className="card-title text-primary fw-bold">Excursión a Granada</h5>
              <p className="card-text text-muted">Los alumnos de 4º ESO visitarán la Alhambra el próximo viernes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}