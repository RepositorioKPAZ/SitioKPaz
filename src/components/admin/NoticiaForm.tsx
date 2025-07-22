import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface IFormData {
  titulo: string;
  resumen: string;
  contenido: string;
  urlImagen: string;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="container">
      <div className="form-container">
        <h1>{isEditing ? 'Editar Noticia' : 'Crear Nueva Noticia'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="resumen">Resumen</label>
            <textarea id="resumen" name="resumen" value={formData.resumen} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contenido">Contenido Completo</label>
            <textarea id="contenido" name="contenido" value={formData.contenido} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="urlImagen">URL de la Imagen</label>
            <input type="text" id="urlImagen" name="urlImagen" value={formData.urlImagen} onChange={handleChange} required />
          </div>
          <div className="form-group-check">
            <input type="checkbox" id="esDestacada" name="esDestacada" checked={formData.esDestacada} onChange={handleChange} />
            <label htmlFor="esDestacada">Marcar como noticia destacada</label>
          </div>
          <button type="submit" className="btn-submit">{isEditing ? 'Actualizar' : 'Crear'}</button>
        </form>
      </div>
    </div>
  );
};

export default NoticiaForm;