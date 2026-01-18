import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center">
      
      {/* Icono grande */}
      <div className="text-ies-orange mb-3">
        <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: '4rem' }}></i>
      </div>

      {/* Título Grande */}
      <h1 className="display-1 fw-bold text-ies-blue">404</h1>
      
      {/* Subtítulo */}
      <h2 className="h4 text-secondary mb-4">Ups... Página no encontrada</h2>
      
      {/* Mensaje explicativo */}
      <p className="lead text-muted mb-5" style={{ maxWidth: '500px' }}>
        Parece que la página que buscas no existe o ha sido movida. 
        No te preocupes, puedes volver a la portada.
      </p>

      {/* Botón de regreso */}
      <Link href="/" className="btn bg-ies-blue text-white btn-lg shadow-sm px-4">
        <i className="bi bi-house-door-fill me-2"></i>
        Volver al Inicio
      </Link>

    </div>
  );
}