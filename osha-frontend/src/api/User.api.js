import api from './axios';


export const getUsuarioByDocId = async (documentoId) => {
  try {
    const response = await api.get(`/usersimple/${documentoId}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los datos de la persona');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};