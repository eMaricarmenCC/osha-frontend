import api from './axios';


export const getCredencialesProgramaMatriculadoByDocId = async (documentoId) => {
  try {
    const response = await api.get(`/credenciales/programa/matriculado/by-doc-identidad/${documentoId}/`);
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


export const getCredencialesProgramaMatriculadoByCodOsh = async (codigoOsha) => {
  try {
    const response = await api.get(`/credenciales/programa/matriculado/by-codosh/${codigoOsha}/`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return;
    } else if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los credenciales de programas matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

export const getCredencialesProgramaByCodOsh = async (codigoOsha) => {
  try {
    const response = await api.get(`/credenciales/programa/by-codosh/${codigoOsha}/`);
    console.log(response.data)
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

export const getCertificadosCursoMatriculadoByCodOsh = async (codigoOsha) => {
  try {
    const response = await api.get(`/certificados/curso/matriculado/by-codosh/${codigoOsha}/`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return;
    } else if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los certificados de cursos matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

export const getCertificadosCursoByCodOsh = async (codigoOsha) => {
  try {
    const response = await api.get(`/certificados/curso/by-codosh/${codigoOsha}/`);
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