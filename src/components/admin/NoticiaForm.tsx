import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface IFormData {
  titulo: string;
  resumen: string;
  contenido: string;
  urlImagen: string;
  categoria: string;
  esDestacada: boolean;
}

const API_URL = 'http://localhost:5001/api/noticias';

const NoticiaForm: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Hook para obtener el ID de la URL
  const navigate = useNavigate(); // Hook para navegar
  const [formData, setFormData] = useState<IFormData>({
    titulo: '',
    resumen: '',
    contenido: '',
    urlImagen: '',
    categoria: '',
    esDestacada: false,
  });

  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      // Si estamos editando, cargamos los datos de la noticia
      const fetchNoticia = async () => {
        try {
          const response = await axios.get(`${API_URL}/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error al cargar la noticia para editar:', error);
          alert('No se pudo cargar la noticia.');
        }
      };
      fetchNoticia();
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // Manejo especial para el checkbox
    const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Actualizar noticia existente
        await axios.put(`${API_URL}/${id}`, formData);
        alert('Noticia actualizada con éxito.');
      } else {
        // Crear nueva noticia
        await axios.post(API_URL, formData);
        alert('Noticia creada con éxito.');
      }
      navigate('/admin'); // Redirige al dashboard después de guardar
    } catch (error) {
      console.error('Error al guardar la noticia:', error);
      alert('Ocurrió un error al guardar.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">{isEditing ? 'Editar Noticia' : 'Crear Nueva Noticia'}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required className="w-full rounded-xl border-gray-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label htmlFor="resumen" className="block text-sm font-medium text-gray-700 mb-1">Resumen</label>
            <textarea id="resumen" name="resumen" value={formData.resumen} onChange={handleChange} required className="w-full rounded-xl border-gray-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-1">Contenido Completo</label>
            <textarea id="contenido" name="contenido" value={formData.contenido} onChange={handleChange} required className="w-full rounded-xl border-gray-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-200 min-h-[100px]" />
          </div>
          <div>
            <label htmlFor="urlImagen" className="block text-sm font-medium text-gray-700 mb-1">URL de la Imagen</label>
            <input type="text" id="urlImagen" name="urlImagen" value={formData.urlImagen} onChange={handleChange} required className="w-full rounded-xl border-gray-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">Categoría (Alianza)</label>
            <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} required className="w-full rounded-xl border-gray-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-200">
              <option value="">Selecciona una alianza</option>
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
          <div className="flex items-center gap-3">
            <input type="checkbox" id="esDestacada" name="esDestacada" checked={formData.esDestacada} onChange={handleChange} className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="esDestacada" className="text-sm font-medium text-gray-700">Marcar como noticia destacada</label>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-[#1e3a9e] hover:to-[#0f2657] transition-all duration-300">{isEditing ? 'Actualizar' : 'Crear'}</button>
        </form>
      </div>
    </div>
  );
};

export default NoticiaForm;