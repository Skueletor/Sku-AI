// Este archivo se utilizará para realizar las llamadas a la API de IA
import fetchService from './fetch';

export default {
  // Método para enviar un mensaje a la API de IA y obtener una respuesta
  async sendMessage(message) {
    try {
      // Por ahora, usamos la simulación, pero está preparado para usar fetchService
      // cuando se implemente la API real
      
      // Simulación de respuesta
      return new Promise((resolve) => {
        setTimeout(() => {
          let response = '';

          if (message.toLowerCase().includes('hola') || message.toLowerCase().includes('saludos')) {
            response = '¡Hola! ¿Cómo puedo ayudarte hoy?';
          } else if (message.toLowerCase().includes('ayuda')) {
            response = 'Estoy aquí para asistirte. Puedes preguntarme sobre cualquier tema y haré lo mejor para responderte.';
          } else if (message.toLowerCase().includes('gracias')) {
            response = 'De nada. Estoy aquí para ayudar.';
          } else if (message.toLowerCase().includes('tiempo') || message.toLowerCase().includes('hora')) {
            response = `La hora actual es ${new Date().toLocaleTimeString()}.`;
          } else if (message.toLowerCase().includes('fecha')) {
            response = `La fecha actual es ${new Date().toLocaleDateString()}.`;
          } else if (message.toLowerCase().includes('nombre')) {
            response = 'Soy Sku-AI, tu asistente de inteligencia artificial.';
          } else if (message.toLowerCase().includes('adiós') || message.toLowerCase().includes('chau')) {
            response = 'Hasta luego. Ha sido un placer ayudarte.';
          } else {
            response = 'Entiendo tu mensaje. ¿Hay algo específico en lo que pueda ayudarte?';
          }

          resolve(response);
        }, 1000);
      });
      
      // Cuando implementes la API real, descomenta este código:
      /*
      return await fetchService.post('chat', {
        message: message
      });
      */
    } catch (error) {
      console.error('Error al enviar mensaje a la API:', error);
      throw new Error('Lo siento, ha ocurrido un error al procesar tu mensaje.');
    }
  }
};