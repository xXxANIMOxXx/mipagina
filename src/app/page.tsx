export default function Home() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Bienvenidos al IES Replica</h1>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-bold">Noticia Urgente</p>
        <p>Las notas se publicarán el próximo viernes.</p>
      </div>
      <p>
        Navega por el menú para ver la sección de <strong>Departamentos</strong> donde encontrarás
        las tarjetas interactivas.
      </p>
    </div>
  );
}