export default function Sidebar() {
  return (
    <aside className="col-lg-3 mt-4 mt-lg-0">
      
      {/* Widget 1: Video */}
      <div className="card mb-4 shadow-sm border-0">
        <div className="card-header bg-ies-blue text-white fw-bold text-uppercase py-2">
          <i className="bi bi-play-btn me-2"></i> Multimedia
        </div>
        <div className="card-body p-0 bg-dark">
          <video controls className="w-100 d-block">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Widget 2: Novedades / Galería */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-ies-orange text-white fw-bold text-uppercase py-2">
          <i className="bi bi-images me-2"></i> Galería
        </div>
        <div className="card-body">
          <img 
            src="https://via.placeholder.com/300x200" 
            alt="Imagen Novedad" 
            className="img-fluid rounded mb-3 border"
          />
          <p className="card-text small text-muted border-start border-4 border-ies-orange ps-2">
            Visita de los alumnos de 1º de Bachillerato al Parque de las Ciencias.
          </p>
        </div>
      </div>

    </aside>
  );
}