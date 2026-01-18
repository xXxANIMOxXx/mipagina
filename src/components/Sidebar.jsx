export default function Sidebar() {
  return (
    <aside className="col-lg-3 mt-4 mt-lg-0">
      
      {/* Widget 1: VIDEO PROMOCIONAL */}
      <div className="card mb-4 shadow-sm border-0">
        <div className="card-header bg-ies-blue text-white fw-bold text-uppercase py-2">
          <i className="bi bi-play-btn me-2"></i> Multimedia
        </div>
        <div className="card-body p-0 bg-dark">
          {/* --- AQUÍ ESTÁ EL CAMBIO DEL VIDEO --- */}
          <video controls className="w-100 d-block">
            <source src="/videos/video.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>

      {/* Widget 2: GALERÍA DE IMÁGENES */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-ies-orange text-white fw-bold text-uppercase py-2">
          <i className="bi bi-images me-2"></i> Galería
        </div>
        <div className="card-body">
          {/* --- AQUÍ ESTÁ EL CAMBIO DE LA FOTO --- */}
          <img 
            src="/images/foto1.jpg" 
            alt="Vida en el centro" 
            className="img-fluid rounded mb-3 border"
          />
          <p className="card-text small text-muted border-start border-4 border-ies-orange ps-2">
            Momentos destacados de la semana cultural y actividades extraescolares.
          </p>
        </div>
      </div>

    </aside>
  );
}