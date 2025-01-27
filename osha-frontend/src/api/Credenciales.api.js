import api from './axios';


export const getCredencialesProgramaMatriculadoByEmail = async (estudianteEmail) => {
  try {
    const response = await api.get(`/credenciales/programa/matriculado/by-email/${estudianteEmail}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

export const getCredencialesProgramaByEmail = async (estudianteEmail) => {
  try {
    const response = await api.get(`/credenciales/programa/by-email/${estudianteEmail}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCertificadosCursoMatriculadoByEmail = async (estudianteEmail) => {
  try {
    const response = await api.get(`/certificados/curso/matriculado/by-email/${estudianteEmail}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCertificadosCursoByEmail = async (estudianteEmail) => {
  try {
    const response = await api.get(`/certificados/curso/by-email/${estudianteEmail}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};