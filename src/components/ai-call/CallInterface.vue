<template>
  <div class="call-interface glass-card">
    <!-- Animated Background Elements -->
    <div class="interface-background">
      <div class="wave-animation"></div>
      <div class="particle-container">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
      </div>
    </div>
    
    <div class="call-header">
      <div class="header-left">
        <h2>Llamada con <span class="gradient-text">Sku-AI</span></h2>
        <div class="call-status">
          <span class="status-indicator" :class="{ active: isConnected }"></span>
          <span class="status-text">{{ connectionStatus }}</span>
        </div>
      </div>
      <div class="header-right">
        <div class="call-timer">{{ callDuration }}</div>
      </div>
    </div>
    
    <div class="call-body">
      <div class="ai-avatar" :class="{ speaking: isSpeaking }">
        <div class="avatar-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
          </svg>
          <div class="avatar-rings">
            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>
            <div class="ring ring-3"></div>
          </div>
        </div>
        <div class="avatar-name">Asistente IA</div>
        <div v-if="isSpeaking" class="speaking-indicator">Hablando...</div>
      </div>
      
      <div class="call-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.type">
          <div class="message-content">{{ message.text }}</div>
          <div class="message-footer">
            <div class="message-actions" v-if="message.type === 'ai'">
              <button @click="speakMessage(message.text)" class="action-icon" title="Escuchar mensaje">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              </button>
            </div>
            <div class="message-time">{{ message.time }}</div>
          </div>
        </div>
        
        <div v-if="isTyping" class="message ai typing-indicator">
          <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <div class="call-controls">
        <div class="audio-visualizer" :class="{ active: isListening || isSpeaking }">
          <div v-for="n in 30" :key="n" class="audio-bar" :style="{ height: getBarHeight(n) }"></div>
        </div>
        
        <div class="input-area">
          <input 
            v-model="userInput" 
            @keyup.enter="sendTextMessage" 
            type="text" 
            placeholder="Escribe tu mensaje o pulsa el micrófono para hablar..." 
            :disabled="!isConnected || isListening"
            ref="messageInput"
          />
          <button @click="sendTextMessage" class="send-btn" :disabled="!isConnected || !userInput.trim()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        
        <div class="call-actions">
          <button @click="toggleMute" class="action-btn" :class="{ active: isMuted }" title="Silenciar micrófono">
            <svg v-if="!isMuted" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
          </button>
          
          <button 
            @click="toggleListening" 
            class="action-btn voice-btn" 
            :class="{ active: isListening }"
            :disabled="!isConnected || isMuted"
            title="Hablar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
            <span v-if="isListening" class="pulse-ring"></span>
          </button>
          
          <button @click="$emit('end-call')" class="action-btn end-call" title="Finalizar llamada">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
              <line x1="23" y1="1" x2="1" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div class="keyboard-shortcuts">
      <div class="shortcut-item">
        <kbd>Espacio</kbd>
        <span>Mantén pulsado para hablar</span>
      </div>
      <div class="shortcut-item">
        <kbd>ESC</kbd>
        <span>Finalizar llamada</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallInterface',
  data() {
    return {
      isConnected: false,
      isMuted: false,
      isListening: false,
      isSpeaking: false,
      isTyping: false,
      userInput: '',
      messages: [],
      visualizerData: Array(30).fill(5),
      callStartTime: null,
      callDuration: '00:00',
      durationInterval: null,
      recognition: null,
      speechSynthesis: null,
      voices: [],
      selectedVoice: null,
      currentUtterance: null
    }
  },
  computed: {
    connectionStatus() {
      if (!this.isConnected) return 'Conectando...';
      if (this.isListening) return 'Escuchando...';
      if (this.isSpeaking) return 'Hablando...';
      return 'Conectado';
    }
  },
  mounted() {
    // Simular conexión
    setTimeout(() => {
      this.isConnected = true;
      this.addMessage('Hola, soy tu asistente IA. ¿En qué puedo ayudarte hoy?', 'ai');
      this.speakMessage('Hola, soy tu asistente IA. ¿En qué puedo ayudarte hoy?');
    }, 2000);
    
    // Iniciar temporizador de llamada
    this.callStartTime = new Date();
    this.durationInterval = setInterval(this.updateCallDuration, 1000);
    
    // Inicializar Web Speech API para reconocimiento de voz
    this.initSpeechRecognition();
    
    // Inicializar Web Speech API para síntesis de voz
    this.initSpeechSynthesis();
    
    // Iniciar animación del visualizador
    this.startVisualizerAnimation();
    
    // Agregar eventos de teclado
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  },
  beforeUnmount() {
    // Limpiar intervalos y eventos
    clearInterval(this.durationInterval);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    
    // Detener reconocimiento de voz si está activo
    if (this.recognition) {
      this.recognition.stop();
    }
    
    // Detener síntesis de voz si está activa
    if (this.currentUtterance) {
      window.speechSynthesis.cancel();
    }
  },
  methods: {
    // Métodos para mensajes de texto
    sendTextMessage() {
      if (!this.userInput.trim() || !this.isConnected) return;
      
      this.addMessage(this.userInput, 'user');
      const userMessage = this.userInput;
      this.userInput = '';
      
      this.isTyping = true;
      setTimeout(() => {
        this.fetchAIResponse(userMessage);
      }, 1000);
    },
    
    fetchAIResponse(message) {
      let response = '';
      
      // Respuestas simples basadas en palabras clave
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
      
      this.isTyping = false;
      this.addMessage(response, 'ai');
      this.speakMessage(response);
    },
    
    addMessage(text, type) {
      this.messages.push({
        text,
        type,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      
      this.$nextTick(() => {
        if (this.$refs.messagesContainer) {
          this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
        }
      });
    },
    
    // Métodos para síntesis de voz (TTS)
    initSpeechSynthesis() {
      if ('speechSynthesis' in window) {
        this.speechSynthesis = window.speechSynthesis;
        
        // Cargar voces disponibles
        this.loadVoices();
        
        // Algunas veces las voces se cargan de forma asíncrona
        if (speechSynthesis.onvoiceschanged !== undefined) {
          speechSynthesis.onvoiceschanged = this.loadVoices;
        }
      }
    },
    
    loadVoices() {
      this.voices = this.speechSynthesis.getVoices();
      
      // Intentar encontrar una voz en español
      this.selectedVoice = this.voices.find(voice => 
        voice.lang.includes('es') || voice.name.includes('Spanish')
      );
      
      // Si no hay voz en español, usar la primera disponible
      if (!this.selectedVoice && this.voices.length > 0) {
        this.selectedVoice = this.voices[0];
      }
    },
    
    speakMessage(text) {
      if (!this.speechSynthesis) return;
      
      // Cancelar cualquier síntesis en curso
      this.speechSynthesis.cancel();
      
      // Crear nueva instancia de utterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configurar voz
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      
      // Configurar propiedades
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Eventos
      utterance.onstart = () => {
        this.isSpeaking = true;
      };
      
      utterance.onend = () => {
        this.isSpeaking = false;
        this.currentUtterance = null;
      };
      
      utterance.onerror = (event) => {
        console.error('Error de síntesis de voz:', event);
        this.isSpeaking = false;
        this.currentUtterance = null;
      };
      
      // Guardar referencia a la utterance actual
      this.currentUtterance = utterance;
      
      // Iniciar síntesis
      this.speechSynthesis.speak(utterance);
    },
    
    // Métodos para reconocimiento de voz (STT)
    initSpeechRecognition() {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.warn('El reconocimiento de voz no está soportado en este navegador.');
        return;
      }
      
      // Crear instancia de reconocimiento
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      
      // Configurar propiedades
      this.recognition.lang = 'es-ES';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      
      // Eventos
      this.recognition.onstart = () => {
        this.isListening = true;
      };
      
      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.userInput = transcript;
        
        // Enviar mensaje automáticamente después de reconocimiento
        setTimeout(() => {
          this.sendTextMessage();
        }, 500);
      };
      
      this.recognition.onerror = (event) => {
        console.error('Error de reconocimiento de voz:', event.error);
        this.isListening = false;
      };
      
      this.recognition.onend = () => {
        this.isListening = false;
      };
    },
    
    toggleListening() {
      if (this.isMuted) return;
      
      if (this.isListening) {
        this.recognition.stop();
      } else {
        // Detener síntesis de voz si está activa
        if (this.isSpeaking) {
          this.speechSynthesis.cancel();
          this.isSpeaking = false;
        }
        
        try {
          this.recognition.start();
        } catch (error) {
          console.error('Error al iniciar reconocimiento:', error);
        }
      }
    },
    
    // Métodos para controles de la interfaz
    toggleMute() {
      this.isMuted = !this.isMuted;
      
      // Si se activa el mute mientras se está escuchando, detener reconocimiento
      if (this.isMuted && this.isListening) {
        this.recognition.stop();
      }
    },
    
    updateCallDuration() {
      if (!this.callStartTime) return;
      
      const now = new Date();
      const diff = Math.floor((now - this.callStartTime) / 1000);
      
      const minutes = Math.floor(diff / 60).toString().padStart(2, '0');
      const seconds = (diff % 60).toString().padStart(2, '0');
      
      this.callDuration = `${minutes}:${seconds}`;
    },
    
    // Métodos para visualizador de audio
    startVisualizerAnimation() {
      const updateVisualizer = () => {
        if (this.isListening || this.isSpeaking) {
          // Generar nuevos valores para las barras
          this.visualizerData = this.visualizerData.map(() => {
            return Math.floor(Math.random() * 35) + 5;
          });
        } else {
          // Valores bajos cuando no hay actividad
          this.visualizerData = this.visualizerData.map(() => {
            return Math.floor(Math.random() * 10) + 3;
          });
        }
        
        requestAnimationFrame(updateVisualizer);
      };
      
      updateVisualizer();
    },
    
    getBarHeight(index) {
      return `${this.visualizerData[index % this.visualizerData.length]}px`;
    },
    
    // Métodos para atajos de teclado
    handleKeyDown(e) {
      // Espacio para activar reconocimiento de voz
      if (e.code === 'Space' && !e.repeat && !this.isListening && this.isConnected && !this.isMuted && !e.target.matches('input, textarea')) {
        e.preventDefault();
        this.toggleListening();
      }
      
      // ESC para finalizar llamada
      if (e.key === 'Escape') {
        this.$emit('end-call');
      }
    },
    
    handleKeyUp(e) {
      // Soltar espacio para detener reconocimiento
      if (e.code === 'Space' && this.isListening && !e.target.matches('input, textarea')) {
        e.preventDefault();
        this.toggleListening();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.call-interface {
  max-width: 800px;
  margin: 0 auto;
  height: 650px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
}

// Animated Background
.interface-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  .wave-animation {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, 
      rgba(139, 92, 246, 0.05) 0%, 
      transparent 100%);
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
    animation: wave-shift 15s linear infinite;
  }
  
  .particle-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      
      &.p1 {
        top: 20%;
        left: 10%;
        background: rgba(139, 92, 246, 0.5);
        animation: float-particle 15s infinite linear;
      }
      
      &.p2 {
        top: 70%;
        left: 80%;
        background: rgba(236, 72, 153, 0.5);
        animation: float-particle 20s infinite linear reverse;
      }
      
      &.p3 {
        top: 40%;
        left: 60%;
        background: rgba(34, 211, 238, 0.5);
        animation: float-particle 18s infinite linear;
      }
    }
  }
}

// Header
.call-header {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(236, 72, 153, 0.8) 100%);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  
  .header-left {
    display: flex;
    flex-direction: column;
    
    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      
      .gradient-text {
        background: linear-gradient(to right, #f8fafc, #22d3ee);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }
    
    .call-status {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      margin-top: 0.3rem;
      
      .status-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 0.5rem;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        
        &.active {
          background-color: #22d3ee;
          box-shadow: 0 0 10px #22d3ee;
          animation: pulse 2s infinite;
        }
      }
    }
  }
  
  .header-right {
    .call-timer {
      font-size: 1rem;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
  }
}

// Body
.call-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

// Avatar
.ai-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  
  &.speaking {
    .avatar-circle {
      animation: pulse-speaking 1.5s infinite alternate;
    }
  }
  
  .avatar-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 0.5rem;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    animation: float 6s infinite ease-in-out;
    position: relative;
    animation: float 6s infinite ease-in-out;
    position: relative;
    z-index: 2;
    
    .avatar-rings {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      .ring {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid rgba(139, 92, 246, 0.5);
        opacity: 0;
        transform: scale(1);
        animation: ring-pulse 3s infinite;
        
        &.ring-1 {
          animation-delay: 0s;
        }
        
        &.ring-2 {
          animation-delay: 1s;
        }
        
        &.ring-3 {
          animation-delay: 2s;
        }
      }
    }
    
    svg {
      width: 60px;
      height: 60px;
    }
  }
  
  .avatar-name {
    font-weight: 600;
    color: #f8fafc;
    font-size: 1.2rem;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  
  .speaking-indicator {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(139, 92, 246, 0.2);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    animation: pulse 2s infinite;
  }
}

// Messages
.call-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 16px;
  margin-bottom: 1rem;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.5);
    border-radius: 3px;
  }
  
  .message {
    padding: 0.8rem 1rem;
    border-radius: 16px;
    margin-bottom: 1rem;
    max-width: 80%;
    position: relative;
    animation: fadeIn 0.3s ease-out;
    
    &.user {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
      color: white;
      align-self: flex-end;
      margin-left: auto;
      border-bottom-right-radius: 4px;
    }
    
    &.ai {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
    }
    
    .message-content {
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }
    
    .message-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .message-actions {
        display: flex;
        gap: 0.5rem;
        
        .action-icon {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          padding: 0.2rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &:hover {
            color: white;
          }
        }
      }
      
      .message-time {
        font-size: 0.75rem;
        opacity: 0.7;
      }
    }
    
    &.typing-indicator {
      padding: 0.8rem 1rem;
      min-width: 100px;
      
      .typing-dots {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        
        span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          display: inline-block;
          animation: typing-dot 1.4s infinite ease-in-out both;
          
          &:nth-child(1) {
            animation-delay: -0.32s;
          }
          
          &:nth-child(2) {
            animation-delay: -0.16s;
          }
        }
      }
    }
  }
}

// Audio Visualizer
.audio-visualizer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 40px;
  gap: 2px;
  margin-bottom: 1rem;
  transition: opacity 0.3s ease;
  
  &.active {
    .audio-bar {
      background: linear-gradient(to top, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
    }
  }
  
  .audio-bar {
    width: 3px;
    background: linear-gradient(to top, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
    border-radius: 1.5px;
    transition: height 0.1s ease, background 0.3s ease;
  }
}

// Input Area
.input-area {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    font-size: 1rem;
    background: rgba(30, 41, 59, 0.5);
    color: #f8fafc;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
    }
    
    &:disabled {
      background: rgba(30, 41, 59, 0.3);
      cursor: not-allowed;
    }
    
    &::placeholder {
      color: rgba(248, 250, 252, 0.5);
    }
  }
  
  .send-btn {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
    color: white;
    border: none;
    border-radius: 16px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
}

// Call Actions
.call-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  .action-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(30, 41, 59, 0.8);
    color: #f8fafc;
    position: relative;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    
    &.active {
      background: linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(239, 68, 68, 0.8) 100%);
      color: white;
    }
    
    &.voice-btn {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
      color: white;
      
      &.active {
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.8) 0%, rgba(16, 185, 129, 0.8) 100%);
      }
      
      .pulse-ring {
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 50%;
        border: 2px solid rgba(16, 185, 129, 0.5);
        animation: pulse-ring 2s infinite;
      }
    }
    
    &.end-call {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(185, 28, 28, 0.8) 100%);
      color: white;
      
      &:hover {
        background: linear-gradient(135deg, rgba(220, 38, 38, 0.8) 0%, rgba(153, 27, 27, 0.8) 100%);
      }
    }
  }
}

// Keyboard Shortcuts
.keyboard-shortcuts {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.8rem;
  background: rgba(15, 23, 42, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  .shortcut-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    
    kbd {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      padding: 0.2rem 0.5rem;
      font-family: monospace;
      font-size: 0.8rem;
      color: white;
    }
  }
}

// Animations
@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

@keyframes pulse-speaking {
  0% { 
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    transform: scale(1);
  }
  100% { 
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.7);
    transform: scale(1.05);
  }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes ring-pulse {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
}

@keyframes typing-dot {
  0%, 80%, 100% { 
    transform: scale(0.7);
  }
  40% { 
    transform: scale(1);
  }
}

@keyframes wave-shift {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

@keyframes float-particle {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, 20px);
  }
  50% {
    transform: translate(40px, 0);
  }
  75% {
    transform: translate(20px, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .call-interface {
    height: 80vh;
  }
  
  .ai-avatar {
    .avatar-circle {
      width: 80px;
      height: 80px;
      
      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
  
  .call-actions {
    .action-btn {
      width: 50px;
      height: 50px;
    }
  }
  
  .keyboard-shortcuts {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .call-interface {
    border-radius: 16px;
  }
  
  .call-header {
    padding: 0.8rem 1rem;
    
    .header-left {
      h2 {
        font-size: 1.2rem;
      }
    }
  }
  
  .call-body {
    padding: 1rem;
  }
  
  .ai-avatar {
    margin-bottom: 1rem;
    
    .avatar-circle {
      width: 60px;
      height: 60px;
      
      svg {
        width: 35px;
        height: 35px;
      }
    }
    
    .avatar-name {
      font-size: 1rem;
    }
  }
  
  .call-actions {
    gap: 1rem;
    
    .action-btn {
      width: 45px;
      height: 45px;
    }
  }
}
</style>