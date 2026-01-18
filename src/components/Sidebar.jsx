export default function Sidebar() {
  return (
    <aside className="col-lg-3 mt-4 mt-lg-0">
      
      {/* Widget 1: VIDEO YOUTUBE (Paellas) */}
      <div className="card mb-4 shadow-sm border-0">
        <div className="card-header bg-ies-blue text-white fw-bold text-uppercase py-2">
          <i className="bi bi-play-btn me-2"></i> Multimedia
        </div>
        <div className="card-body p-0 bg-dark ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/embed/Kc93umuJdy0" 
            title="Día de las paellas" 
            allowFullScreen
            style={{ border: 0 }}
            className="rounded-bottom"
          ></iframe>
        </div>
      </div>

      {/* Widget 2: GALERÍA (Carrusel Automático) */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-ies-orange text-white fw-bold text-uppercase py-2">
          <i className="bi bi-images me-2"></i> Galería
        </div>
        
        {/* Cuerpo de la tarjeta sin padding para que las fotos lleguen al borde */}
        <div className="card-body p-0">
          
          {/* INICIO DEL CARRUSEL */}
          <div id="galeriaCarousel" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-inner">
              {/* Foto 1 (Active) */}
              <div className="carousel-item active">
                <img src="/images/galeria1.jpg" className="d-block w-100" alt="Excursión" style={{height: '200px', objectFit: 'cover'}} />
              </div>
              {/* Foto 2 */}
              <div className="carousel-item">
                <img src="/images/galeria2.jpg" className="d-block w-100" alt="Laboratorio" style={{height: '200px', objectFit: 'cover'}} />
              </div>
              {/* Foto 3 */}
              <div className="carousel-item">
                <img src="/images/galeria3.jpg" className="d-block w-100" alt="Actividad" style={{height: '200px', objectFit: 'cover'}} />
              </div>
            </div>

            {/* Flechas de control */}
            <button className="carousel-control-prev" type="button" data-bs-target="#galeriaCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#galeriaCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>

          </div>
          {/* FIN DEL CARRUSEL */}

          {/* Pie de foto */}
          <div className="p-3">
            <p className="card-text small text-muted border-start border-4 border-ies-orange ps-2 mb-0">
              Imágenes destacadas de nuestras actividades extraescolares y viajes.
            </p>
          </div>

        </div>
      </div>

    </aside>
  );
}