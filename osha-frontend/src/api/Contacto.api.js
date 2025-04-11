import api from './axios';


export const getProgramas = async () => {
  try {
    const response = await api.get('/programa/');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los programas.');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

export const postFormContacto = async (dataForm) => {
  try {
    const response = await api.post('/email/contacto/', dataForm);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al enviar datos de contacto.');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};