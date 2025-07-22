import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Definimos el tipo para una noticia para usar TypeScript
interface INoticia {
  _id: string;
  titulo: string;
  resumen: string;
  categoria: string;
  esDestacada: boolean;
}

const API_URL = 'http://localhost:5001/api/noticias';

const AdminDashboard: React.FC = () => {
  const [noticias, setNoticias] = useState<INoticia[]>([]);
  const [filtroCategoria, setFiltroCategoria] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await axios.get(API_URL);
      setNoticias(response.data);
    } catch (error) {
      console.error('Error al cargar noticias:', error);
      alert('No se pudieron cargar las noticias.');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta noticia?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        // Actualiza el estado para reflejar el cambio en la UI sin recargar
        setNoticias(noticias.filter(noticia => noticia._id !== id));
        alert('Noticia eliminada con éxito.');
      } catch (error) {
        console.error('Error al eliminar noticia:', error);
        alert('No se pudo eliminar la noticia.');
      }
    }
  };

  const noticiasFiltradas = filtroCategoria
    ? noticias.filter(noticia => noticia.categoria === filtroCategoria)
    : noticias;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">Panel de Administración de Noticias</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="filtroCategoria" className="font-medium text-gray-700">Filtrar por alianza:</label>
            <select id="filtroCategoria" value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)} className="rounded-xl border-gray-200 bg-white px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-200">
              <option value="">Todas</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon Web Services">Amazon Web Services</option>
              <option value="Google">Google</option>
              <option value="UiPath">UiPath</option>
              <option value="Rocketbot">Rocketbot</option>
              <option value="Kore.AI">Kore.AI</option>
              <option value="OutSystems">OutSystems</option>
              <option value="Genexus">Genexus</option>
              <option value="Salesforce">Salesforce</option>
            </select>
          </div>
          <Link to="/admin/crear" className="inline-block bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:from-[#1e3a9e] hover:to-[#0f2657] transition-all duration-300">Crear Nueva Noticia</Link>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="min-w-full bg-white rounded-2xl">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80">
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Título</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Resumen</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Categoría</th>
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Destacada</th>
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {noticiasFiltradas.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">No hay noticias para mostrar.</td>
                </tr>
              ) : (
                noticiasFiltradas.map((noticia) => (
                  <tr key={noticia._id} className="border-b last:border-none hover:bg-blue-50/40 transition">
                    <td className="px-6 py-4 font-medium text-gray-900 max-w-xs truncate">{noticia.titulo}</td>
                    <td className="px-6 py-4 text-gray-700 max-w-xs truncate">{noticia.resumen}</td>
                    <td className="px-6 py-4 text-gray-700">{noticia.categoria}</td>
                    <td className="px-6 py-4 text-center">
                      {noticia.esDestacada ? <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] text-white text-xs font-semibold">Sí</span> : <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs">No</span>}
                    </td>
                    <td className="px-6 py-4 flex gap-2 justify-center">
                      <button className="px-4 py-1 rounded-xl bg-gradient-to-r from-blue-200 to-indigo-200 text-blue-900 font-semibold shadow hover:from-[#2e4bce] hover:to-[#1e3a9e] hover:text-white transition" onClick={() => navigate(`/admin/editar/${noticia._id}`)}>Editar</button>
                      <button className="px-4 py-1 rounded-xl bg-red-100 text-red-700 font-semibold shadow hover:bg-red-500 hover:text-white transition" onClick={() => handleDelete(noticia._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;