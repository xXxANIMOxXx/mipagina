// src/app/centro/equipo/page.jsx
export default function EquipoDirectivo() {
  return (
    <div>
      <h2 className="text-ies-blue fw-bold mb-4 border-bottom pb-2">Equipo Directivo</h2>
      
      <p className="lead text-muted mb-5">
        Organigrama del curso escolar 2024/2025.
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          
          {/* Tarjeta Directora (Destacada) */}
          <div className="card mb-4 border-start border-4 border-ies-blue shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="bg-ies-blue text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                <i className="bi bi-person-fill fs-4"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold text-ies-blue">Dña. María del Carmen López</h5>
                <small className="text-uppercase text-ies-orange fw-bold">Directora</small>
              </div>
            </div>
          </div>

          {/* Tabla para el resto del equipo */}
          <div className="table-responsive shadow-sm rounded border">
            <table className="table table-hover mb-0">
              <thead className="bg-light text-ies-blue">
                <tr>
                  <th className="p-3">Cargo</th>
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Contacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 fw-bold">Vicedirector</td>
                  <td className="p-3">D. Antonio García</td>
                  <td className="p-3 text-muted">vicedireccion@iescuravalera.es</td>
                </tr>
                <tr>
                  <td className="p-3 fw-bold">Jefe de Estudios</td>
                  <td className="p-3">D. Manuel Rodríguez</td>
                  <td className="p-3 text-muted">jefatura@iescuravalera.es</td>
                </tr>
                <tr>
                  <td className="p-3 fw-bold">Secretaria</td>
                  <td className="p-3">Dña. Elena Pérez</td>
                  <td className="p-3 text-muted">secretaria@iescuravalera.es</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}