export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/4 flex flex-col gap-6">
      
      {/* Widget Video */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="bg-instituto-main px-4 py-2">
          <h3 className="font-bold text-white text-sm uppercase tracking-wide">Multimedia</h3>
        </div>
        <div className="p-4">
          <video controls className="w-full rounded bg-black">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Widget Imagen */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="bg-instituto-secondary px-4 py-2">
          <h3 className="font-bold text-white text-sm uppercase tracking-wide">Novedades</h3>
        </div>
        <div className="p-4">
          <img 
            src="https://via.placeholder.com/300x200" 
            alt="Imagen Novedad" 
            className="w-full rounded hover:opacity-90 transition cursor-pointer"
          />
          <p className="mt-2 text-sm font-bold text-instituto-main">Abierto plazo de matrícula</p>
        </div>
      </div>

    </aside>
  );
}