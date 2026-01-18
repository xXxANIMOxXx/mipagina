import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ies-blue text-white mt-auto pt-4 pb-2 border-top border-5 border-ies-orange">
      <div className="container">
        <div className="row">
          
          {/* Columna 1: Info */}
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold text-uppercase border-bottom border-light pb-2 d-inline-block">IES Cura Valera</h5>
            <p className="small mt-2 text-white-50">
              Centro educativo de referencia en Huércal-Overa.<br/>
              Comprometidos con la innovación y la calidad docente.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="col-md-6 mb-3 text-md-end">
            <h6 className="fw-bold text-ies-orange">ENLACES DE INTERÉS</h6>
            <ul className="list-unstyled small">
              <li>
                <Link href="https://www.juntadeandalucia.es" target="_blank" className="text-decoration-none text-white opacity-75 hover-opacity-100">
                  <i className="bi bi-bank me-2"></i>Junta de Andalucía
                </Link>
              </li>
              <li>
                <Link href="#" className="text-decoration-none text-white opacity-75 hover-opacity-100">
                  <i className="bi bi-laptop me-2"></i>Plataforma Moodle
                </Link>
              </li>
              <li>
                <Link href="#" className="text-decoration-none text-white opacity-75 hover-opacity-100">
                  <i className="bi bi-person-badge me-2"></i>Séneca / Pasen
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center small border-top border-white border-opacity-10 pt-3 mt-2 text-white-50">
          © {new Date().getFullYear()} IES Cura Valera (Réplica)
        </div>
      </div>
    </footer>
  );
}