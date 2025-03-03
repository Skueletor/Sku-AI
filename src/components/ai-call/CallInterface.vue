<!-- eslint-disable -->

<template>
  <div class="call-interface glass-card">
    <div class="call-header">
      <h2>Llamada con IA</h2>
      <div class="call-status">
        <span class="status-indicator" :class="{ active: isConnected }"></span>
        {{ isConnected ? 'Conectado' : 'Conectando...' }}
      </div>
    </div>
    
    <div class="call-body">
      <div class="ai-avatar">
        <div class="avatar-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
          </svg>
        </div>
        <div class="avatar-name">Asistente IA</div>
      </div>
      
      <div class="call-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.type">
          <div class="message-content">{{ message.text }}</div>
          <div class="message-time">{{ message.time }}</div>
        </div>
      </div>
      
      <div class="call-controls">
        <div class="audio-visualizer">
          <div v-for="n in 20" :key="n" class="audio-bar" :style="{ height: getRandomHeight() }"></div>
        </div>
        
        <div class="input-area">
          <input 
            v-model="userInput" 
            @keyup.enter="sendMessage" 
            type="text" 
            placeholder="Escribe tu mensaje..." 
            :disabled="!isConnected"
          />
          <button @click="sendMessage" class="send-btn" :disabled="!isConnected">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        
        <div class="call-actions">
          <button @click="toggleMute" class="action-btn" :class="{ muted: isMuted }">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
          </button>
          
          <button @click="$emit('end-call')" class="action-btn end-call">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
              <line x1="23" y1="1" x2="1" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'CallInterface',
  data() {
    return {
      isConnected: false,
      isMuted: false,
      userInput: '',
      messages: [],
      visualizerInterval: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.isConnected = true
      this.addMessage('Hola, soy tu asistente IA. ¿En qué puedo ayudarte hoy?', 'ai')
    }, 2000)
    
    this.visualizerInterval = setInterval(() => {
      this.$forceUpdate()
    }, 100)
  },
  beforeUnmount() {
    clearInterval(this.visualizerInterval)
  },
  methods: {
    sendMessage() {
      if (!this.userInput.trim() || !this.isConnected) return
      
      this.addMessage(this.userInput, 'user')
      
      const userMessage = this.userInput
      this.userInput = ''
      
      setTimeout(() => {
        this.fetchAIResponse(userMessage)
      }, 1000)
    },
    fetchAIResponse(message) {
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
      
      this.addMessage(response, 'ai')
    },
    addMessage(text, type) {
      this.messages.push({
        text,
        type,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      })
      
      this.$nextTick(() => {
        if (this.$refs.messagesContainer) {
          this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight
        }
      })
    },
    toggleMute() {
      this.isMuted = !this.isMuted
    },
    getRandomHeight() {
      return this.isConnected ? `${Math.floor(Math.random() * 40) + 5}px` : '5px'
    }
  }
}
</script>

<style lang="scss" scoped>
.call-interface {
  max-width: 800px;
  margin: 0 auto;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
}

.call-header {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .call-status {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    
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

.call-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.ai-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  
  .avatar-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 0.5rem;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    animation: float 6s infinite ease-in-out;
    
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
}

.call-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  margin-bottom: 1rem;
  
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
    border-radius: 12px;
    margin-bottom: 1rem;
    max-width: 80%;
    position: relative;
    animation: fadeIn 0.3s ease-out;
    
    &.user {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      align-self: flex-end;
      margin-left: auto;
      border-bottom-right-radius: 0;
    }
    
    &.ai {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      align-self: flex-start;
      border-bottom-left-radius: 0;
    }
    
    .message-content {
      margin-bottom: 0.3rem;
    }
    
    .message-time {
      font-size: 0.75rem;
      opacity: 0.7;
      text-align: right;
    }
  }
}

.audio-visualizer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 40px;
  gap: 2px;
  margin-bottom: 1rem;
  
  .audio-bar {
    width: 3px;
    background: linear-gradient(to top, #6366f1, #8b5cf6);
    border-radius: 1.5px;
    transition: height 0.1s ease;
  }
}

.input-area {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 1rem;
    background: rgba(30, 41, 59, 0.5);
    color: #f8fafc;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #8b5cf6;
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
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    border: none;
    border-radius: 12px;
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
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }
    
    &.muted {
      background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);
      color: white;
    }
    
    &.end-call {
      background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
      color: white;
      
      &:hover {
        background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
      }
    }
  }
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
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
}
</style>