export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4 flex flex-col gap-6">
      {/* Widget Video */}
      <div className="bg-white p-4 rounded-lg shadow border-t-4 border-blue-900">
        <h3 className="font-bold text-lg mb-3 text-blue-900">Video Destacado</h3>
        <video controls className="w-full rounded">
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Widget Imagen */}
      <div className="bg-white p-4 rounded-lg shadow border-t-4 border-orange-500">
        <h3 className="font-bold text-lg mb-3 text-orange-600">Galería</h3>
        <img 
          src="https://via.placeholder.com/300x250" 
          alt="Evento del centro" 
          className="w-full rounded hover:opacity-90 transition"
        />
        <p className="text-xs text-gray-500 mt-2">Visita de antiguos alumnos.</p>
      </div>
    </aside>
  );
}