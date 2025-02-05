import api from './axios';


export const getCredencialesProgramaMatriculadoByDocId = async (documentoId) => {
  try {
    const response = await api.get(`/credenciales/programa/matriculado/by-doc-identidad/${documentoId}/`);
    console.log("getCredencialesProgramaMatriculadoByDocId");
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los credenciales de programas matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

export const getCredencialesProgramaByDocId = async (documentoId) => {
  try {
    const response = await api.get(`/credenciales/programa/by-doc-identidad/${documentoId}/`);
    console.log("getCredencialesProgramaByDocId");
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los credenciales de programas');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCertificadosCursoMatriculadoByDocId = async (documentoId) => {
  try {
    const response = await api.get(`/certificados/curso/matriculado/by-doc-identidad/${documentoId}/`);
    console.log("getCertificadosCursoMatriculadoByDocId");
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los certificados de cursos matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCertificadosCursoByDocId = async (documentoId) => {
  try {
    const response = await api.get(`/certificados/curso/by-doc-identidad/${documentoId}/`);
    console.log("getCertificadosCursoByDocId");
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los certificados de cursos');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};