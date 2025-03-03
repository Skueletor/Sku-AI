// Este archivo se utilizará para realizar las llamadas a la API de IA
// Aquí es donde integrarás tu API de IA real

export default {
  // Método para enviar un mensaje a la API de IA y obtener una respuesta
  async sendMessage (message) {
    try {
      // Aquí es donde harías la llamada fetch a tu API
      // Por ahora, simulamos una respuesta

      // Ejemplo de cómo sería la llamada real:
      /*
      const response = await fetch('https://tu-api-de-ia.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const data = await response.json();
      return data.response;
      */

      // Simulación de respuesta
      return new Promise((resolve) => {
        setTimeout(() => {
          let response = ''

          if (message.toLowerCase().includes('hola') || message.toLowerCase().includes('saludos')) {
            response = '¡Hola! ¿Cómo puedo ayudarte hoy?'
          } else if (message.toLowerCase().includes('ayuda')) {
            response = 'Estoy aquí para asistirte. Puedes preguntarme sobre cualquier tema y haré lo mejor para responderte.'
          } else if (message.toLowerCase().includes('gracias')) {
            response = 'De nada. Estoy aquí para ayudar.'
          } else {
            response = 'Entiendo tu mensaje. ¿Hay algo específico en lo que pueda ayudarte?'
          }

          resolve(response)
        }, 1000)
      })
    } catch (error) {
      console.error('Error al enviar mensaje a la API:', error)
      return 'Lo siento, ha ocurrido un error al procesar tu mensaje.'
    }
  }
}
