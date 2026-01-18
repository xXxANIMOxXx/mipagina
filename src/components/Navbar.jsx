"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="shadow-sm">
      
      {/* 1. BARRA SUPERIOR (Blanca): Logo y Nombre */}
      <div className="bg-white py-3">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          
          {/* Logo y Título */}
          <Link href="/" className="d-flex align-items-center text-decoration-none text-dark mb-3 mb-md-0">
            {/* Si tienes la imagen en public/logo.png se verá, si no, sale el círculo */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="d-block me-3" 
              style={{height: '80px', objectFit: 'contain'}} 
              onError={(e) => {
                e.target.style.display = 'none'; // Si falla la imagen, se oculta
                e.target.nextSibling.style.display = 'flex'; // Y se muestra el círculo de repuesto
              }}
            />
            {/* Círculo de repuesto por si no tienes logo aún */}
            <div className="bg-ies-blue text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '70px', height: '70px', display: 'none'}}>
              IES
            </div>

            <div>
              <h1 className="h2 mb-0 fw-bold text-uppercase text-ies-blue" style={{letterSpacing: '-1px'}}>IES Cura Valera</h1>
              <span className="text-secondary text-uppercase small ls-1">Enseñanza Secundaria y FP</span>
            </div>
          </Link>

          {/* Información extra (derecha) */}
          <div className="d-none d-md-block text-end text-secondary small">
            <div><i className="bi bi-geo-alt-fill me-1 text-ies-orange"></i> Huércal-Overa (Almería)</div>
            <div><i className="bi bi-telephone-fill me-1 text-ies-orange"></i> 950 12 34 56</div>
          </div>
        </div>
      </div>

      {/* 2. BARRA INFERIOR (Menú): Azul Institucional */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-ies-blue">
        <div className="container">
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span> Menú
          </button>
          
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold text-uppercase fs-6">
              <li className="nav-item">
                <Link href="/" className="nav-link text-white px-3 border-end border-primary border-opacity-25">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link href="/centro" className="nav-link text-white px-3 border-end border-primary border-opacity-25">El Centro</Link>
              </li>
              <li className="nav-item">
                <Link href="/departamentos" className="nav-link text-white px-3 border-end border-primary border-opacity-25">Departamentos</Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto" className="nav-link text-white px-3">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link href="/centro/historia" className="dropdown-item">Historia</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}