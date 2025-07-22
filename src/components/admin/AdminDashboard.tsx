import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Definimos el tipo para una noticia para usar TypeScript
interface INoticia {
  _id: string;
  titulo: string;
  resumen: string;
  esDestacada: boolean;
}

const API_URL = 'http://localhost:5001/api/noticias';

const AdminDashboard: React.FC = () => {
  const [noticias, setNoticias] = useState<INoticia[]>([]);
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

  return (
    <div className="container admin-dashboard">
      <h1>Panel de Administración de Noticias</h1>
      <Link to="/admin/crear" className="btn-create">Crear Nueva Noticia</Link>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumen</th>
            <th>Destacada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {noticias.map((noticia) => (
            <tr key={noticia._id}>
              <td>{noticia.titulo}</td>
              <td>{noticia.resumen}</td>
              <td>{noticia.esDestacada ? 'Sí' : 'No'}</td>
              <td className="actions">
                <button className="btn-edit" onClick={() => navigate(`/admin/editar/${noticia._id}`)}>Editar</button>
                <button className="btn-delete" onClick={() => handleDelete(noticia._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;