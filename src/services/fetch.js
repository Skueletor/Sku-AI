// Este archivo contiene la lógica para realizar peticiones HTTP
// Centraliza todas las llamadas fetch para facilitar la gestión de errores,
// headers comunes, y otras configuraciones

// URL base para las peticiones a la API
const API_BASE_URL = process.env.VUE_APP_API_URL || 'https://api.sku-ai.com';

// Headers comunes para todas las peticiones
const getCommonHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    // 'Authorization': `Bearer ${getToken()}`
  };
};

// Función para manejar errores de forma consistente
const handleResponse = async (response) => {
  if (!response.ok) {
    // Intentar obtener detalles del error desde la respuesta
    try {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    } catch (e) {
      // Si no se puede parsear la respuesta como JSON
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  }
  
  // Para respuestas vacías (como 204 No Content)
  if (response.status === 204) {
    return null;
  }
  
  // Parsear la respuesta como JSON
  return await response.json();
};

// Métodos para realizar peticiones HTTP
export default {
  // GET request
  async get(endpoint, params = {}) {
    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    
    // Añadir parámetros a la URL
    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: getCommonHeaders()
    });
    
    return handleResponse(response);
  },
  
  // POST request
  async post(endpoint, data = {}) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: getCommonHeaders(),
      body: JSON.stringify(data)
    });
    
    return handleResponse(response);
  },
  
  // PUT request
  async put(endpoint, data = {}) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: getCommonHeaders(),
      body: JSON.stringify(data)
    });
    
    return handleResponse(response);
  },
  
  // DELETE request
  async delete(endpoint) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'DELETE',
      headers: getCommonHeaders()
    });
    
    return handleResponse(response);
  }
};