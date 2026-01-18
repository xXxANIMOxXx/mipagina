// src/app/contacto/page.jsx
export default function Contacto() {
  return (
    <div>
      <h2 className="text-ies-blue fw-bold mb-4 border-bottom pb-2">Contacta con nosotros</h2>

      <div className="row g-5">
        
        {/* COLUMNA IZQUIERDA: Información y Mapa */}
        <div className="col-md-5">
          <div className="card border-0 shadow-sm mb-4 h-100">
            <div className="card-body bg-light rounded">
              <h5 className="fw-bold text-ies-orange mb-3">
                <i className="bi bi-geo-alt-fill me-2"></i>Ubicación
              </h5>
              <p className="mb-4">
                <strong>IES Cura Valera</strong><br />
                C/ Profesor Juan Antonio, s/n<br />
                04600 Huércal-Overa (Almería)
              </p>

              <h5 className="fw-bold text-ies-orange mb-3">
                <i className="bi bi-telephone-fill me-2"></i>Teléfonos
              </h5>
              <p className="mb-0">
                <strong>Secretaría:</strong> 950 12 34 56<br />
                <strong>Fax:</strong> 950 12 34 57
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <div className="col-md-7">
          <form className="p-4 border rounded shadow-sm bg-white">
            <div className="mb-3">
              <label className="form-label fw-bold text-ies-blue">Nombre Completo</label>
              <input type="text" className="form-control" placeholder="Tu nombre" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-ies-blue">Correo Electrónico</label>
              <input type="email" className="form-control" placeholder="nombre@correo.com" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-ies-blue">Asunto</label>
              <select className="form-select">
                <option>Consulta General</option>
                <option>Secretaría</option>
                <option>Jefatura de Estudios</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-ies-blue">Mensaje</label>
              <textarea className="form-control" rows="4" placeholder="Escribe aquí tu consulta..."></textarea>
            </div>
            <button type="button" className="btn bg-ies-blue text-white w-100">
              <i className="bi bi-send-fill me-2"></i>Enviar Mensaje
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}