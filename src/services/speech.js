// Este archivo contiene la lógica para el reconocimiento de voz y síntesis de voz

// Configuración por defecto
const defaultConfig = {
    onSpeechStart: () => {},
    onSpeechEnd: () => {},
    onListeningStart: () => {},
    onListeningEnd: () => {},
    onResult: (text) => {},
    onError: (error) => {}
  };
  
  // Variables para almacenar las instancias
  let recognition = null;
  let speechSynthesis = window.speechSynthesis;
  let selectedVoice = null;
  let currentUtterance = null;
  let config = { ...defaultConfig };
  
  // Inicializar el servicio de voz
  const init = (userConfig = {}) => {
    // Combinar la configuración por defecto con la del usuario
    config = { ...defaultConfig, ...userConfig };
    
    // Inicializar reconocimiento de voz
    initSpeechRecognition();
    
    // Inicializar síntesis de voz
    initSpeechSynthesis();
  };
  
  // Inicializar reconocimiento de voz
  const initSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('El reconocimiento de voz no está soportado en este navegador.');
      return;
    }
    
    // Crear instancia de reconocimiento
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    // Configurar propiedades
    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    // Eventos
    recognition.onstart = () => {
      config.onListeningStart();
    };
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      config.onResult(transcript);
    };
    
    recognition.onerror = (event) => {
      config.onError(`Error de reconocimiento: ${event.error}`);
    };
    
    recognition.onend = () => {
      config.onListeningEnd();
    };
  };
  
  // Inicializar síntesis de voz
  const initSpeechSynthesis = () => {
    if (!('speechSynthesis' in window)) {
      console.warn('La síntesis de voz no está soportada en este navegador.');
      return;
    }
    
    // Cargar voces disponibles
    loadVoices();
    
    // Algunas veces las voces se cargan de forma asíncrona
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  };
  
  // Cargar voces disponibles
  const loadVoices = () => {
    const voices = speechSynthesis.getVoices();
    
    // Intentar encontrar una voz en español
    selectedVoice = voices.find(voice => 
      voice.lang.includes('es') || voice.name.includes('Spanish')
    );
    
    // Si no hay voz en español, usar la primera disponible
    if (!selectedVoice && voices.length > 0) {
      selectedVoice = voices[0];
    }
  };
  
  // Iniciar reconocimiento de voz
  const startListening = () => {
    if (!recognition) {
      initSpeechRecognition();
    }
    
    try {
      recognition.start();
    } catch (error) {
      config.onError(`Error al iniciar reconocimiento: ${error.message}`);
    }
  };
  
  // Detener reconocimiento de voz
  const stopListening = () => {
    if (recognition) {
      try {
        recognition.stop();
      } catch (error) {
        console.error('Error al detener reconocimiento:', error);
      }
    }
  };
  
  // Hablar texto
  const speak = (text) => {
    if (!speechSynthesis) {
      config.onError('La síntesis de voz no está disponible');
      return;
    }
    
    // Cancelar cualquier síntesis en curso
    stopSpeaking();
    
    // Crear nueva instancia de utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configurar voz
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    // Configurar propiedades
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Eventos
    utterance.onstart = () => {
      config.onSpeechStart();
    };
    
    utterance.onend = () => {
      config.onSpeechEnd();
      currentUtterance = null;
    };
    
    utterance.onerror = (event) => {
      config.onError(`Error de síntesis: ${event.error}`);
      config.onSpeechEnd();
      currentUtterance = null;
    };
    
    // Guardar referencia a la utterance actual
    currentUtterance = utterance;
    
    // Iniciar síntesis
    speechSynthesis.speak(utterance);
  };
  
  // Detener síntesis de voz
  const stopSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
  };
  
  // Limpiar recursos
  const cleanup = () => {
    stopListening();
    stopSpeaking();
    recognition = null;
    currentUtterance = null;
  };
  
  // Exportar métodos
  export default {
    init,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    cleanup
  };