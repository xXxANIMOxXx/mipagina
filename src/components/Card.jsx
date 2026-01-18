import Link from "next/link";

export default function Card({ title, text, linkText, linkUrl }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      {/* Cabecera de la tarjeta con color corporativo */}
      <div className="card-header bg-ies-blue text-white fw-bold">
        {title}
      </div>
      
      <div className="card-body d-flex flex-column">
        <p className="card-text text-muted flex-grow-1">
          {text}
        </p>
        
        {/* Botón alineado abajo */}
        <div className="mt-3">
          <Link href={linkUrl || "#"} className="btn btn-outline-primary btn-sm w-100 fw-bold border-ies-blue text-ies-blue">
            {linkText || "Más información"} <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}