<template>
  <div class="ai-call">
    <!-- Dynamic Background Elements -->
    <div class="animated-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
      
      <div class="wave-container">
        <svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path class="wave-path" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
    
    <div class="container">
      <transition name="fade" mode="out-in">
        <!-- Intro Screen -->
        <div v-if="!callStarted && !showConfirmation" class="call-intro glass-card" key="intro">
          <div class="card-glow"></div>
          
          <div class="call-header">
            <div class="ai-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
              <div class="pulse-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
              </div>
            </div>
            <h1 class="title">Llamada con <span class="gradient-text">Sku-AI</span></h1>
          </div>
          
          <p class="description">Estás a punto de iniciar una conversación con nuestra IA avanzada. Esta experiencia te permitirá interactuar de forma natural y obtener respuestas inteligentes a tus preguntas.</p>
          
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <div class="feature-text">
                <h3>Información Precisa</h3>
                <p>Obtén respuestas precisas y contextuales a tus preguntas.</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div class="feature-text">
                <h3>Conversación Natural</h3>
                <p>Interactúa de forma fluida como si hablaras con una persona real.</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="feature-text">
                <h3>Privacidad Segura</h3>
                <p>Tu conversación está protegida y no se almacena permanentemente.</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div class="feature-text">
                <h3>Asistencia Completa</h3>
                <p>Desde consultas académicas hasta ayuda con tareas cotidianas.</p>
              </div>
            </div>
          </div>
          
          <div class="sample-questions">
            <h3>Prueba preguntar sobre:</h3>
            <div class="question-chips">
              <div class="question-chip">¿Cómo funciona la IA?</div>
              <div class="question-chip">Explícame el aprendizaje automático</div>
              <div class="question-chip">¿Qué es el procesamiento de lenguaje natural?</div>
            </div>
          </div>
          
          <button @click="showConfirmDialog" class="btn btn-primary pulse-animation">
            <span class="btn-text">Iniciar Llamada</span>
            <span class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
          </button>
          
          <div class="accessibility-note">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <span>Presiona ESC en cualquier momento para finalizar la llamada</span>
          </div>
        </div>
        
        <!-- Confirmation Dialog -->
        <confirm-dialog 
          v-else-if="showConfirmation"
          @confirm="startCall" 
          @cancel="cancelCall"
          key="confirm"
        />
        
        <!-- Loading State -->
        <div v-else-if="isLoading" class="loading-state glass-card" key="loading">
          <div class="loading-animation">
            <div class="loading-circle"></div>
            <div class="loading-circle"></div>
            <div class="loading-circle"></div>
          </div>
          <p>Conectando con Sku-AI...</p>
        </div>
        
        <!-- Call Interface -->
        <call-interface 
          v-else
          @end-call="endCall"
          key="interface"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ConfirmDialog from '@/components/ai-call/ConfirmDialog.vue'
import CallInterface from '@/components/ai-call/CallInterface.vue'

export default defineComponent({
  name: 'AICall',
  components: {
    ConfirmDialog,
    CallInterface
  },
  data() {
    return {
      showConfirmation: false,
      callStarted: false,
      isLoading: false
    }
  },
  mounted() {
    // Add keyboard listener for ESC key
    window.addEventListener('keydown', this.handleKeyDown);
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', this.checkScrollPosition);
  },
  beforeUnmount() {
    // Remove event listeners
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('scroll', this.checkScrollPosition);
  },
  methods: {
    showConfirmDialog() {
      this.showConfirmation = true;
    },
    startCall() {
      this.showConfirmation = false;
      this.isLoading = true;
      
      // Simulate loading time
      setTimeout(() => {
        this.isLoading = false;
        this.callStarted = true;
      }, 2000);
    },
    cancelCall() {
      this.showConfirmation = false;
    },
    endCall() {
      this.callStarted = false;
    },
    handleKeyDown(e) {
      // End call when ESC key is pressed
      if (e.key === 'Escape' && (this.callStarted || this.showConfirmation)) {
        this.endCall();
        this.showConfirmation = false;
      }
    },
    checkScrollPosition() {
      // Add animation classes based on scroll position
      const elements = document.querySelectorAll('.feature-item, .sample-questions, .btn');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate-in');
        }
      });
    }
  }
})
</script>

<style lang="scss" scoped>
.ai-call {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

// Animated Background
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  
  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: float-slow 20s infinite ease-in-out;
    
    &.orb-1 {
      width: 40vw;
      height: 40vw;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 70%);
      top: -10%;
      left: -10%;
      animation-delay: 0s;
    }
    
    &.orb-2 {
      width: 35vw;
      height: 35vw;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 70%);
      bottom: 10%;
      right: -5%;
      animation-delay: -5s;
    }
    
    &.orb-3 {
      width: 25vw;
      height: 25vw;
      background: radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0.1) 70%);
      top: 40%;
      right: 20%;
      animation-delay: -10s;
    }
  }
  
  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: -1;
  }
  
  .wave-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    overflow: hidden;
    
    .wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: wave-animation 10s linear infinite;
      
      .wave-path {
        fill: rgba(139, 92, 246, 0.05);
      }
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

// Main Call Intro Card
.call-intro {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(139, 92, 246, 0.3);
    
    .card-glow {
      opacity: 0.8;
    }
  }
  
  .card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(236, 72, 153, 0.1) 30%, 
      transparent 70%);
    opacity: 0.5;
    transition: opacity 0.5s ease;
    z-index: -1;
    animation: rotate 20s linear infinite;
  }
}

// Call Header
.call-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .ai-icon {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(139, 92, 246, 0.2);
    border-radius: 50%;
    margin-bottom: 1.5rem;
    
    svg {
      color: white;
      z-index: 2;
    }
    
    .pulse-rings {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      .ring {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 2px solid rgba(139, 92, 246, 0.5);
        animation: ring-pulse 3s infinite;
        
        &.ring-1 {
          animation-delay: 0s;
        }
        
        &.ring-2 {
          animation-delay: 1.5s;
        }
      }
    }
  }
  
  .title {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-align: center;
    color: white;
    
    .gradient-text {
      background: linear-gradient(to right, #22d3ee, #8b5cf6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
}

// Description
.description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

// Features Grid
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    
    &.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    &:hover {
      background: rgba(139, 92, 246, 0.1);
      transform: translateY(-3px);
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      }
    }
    
    &:nth-child(1) { transition-delay: 100ms; }
    &:nth-child(2) { transition-delay: 200ms; }
    &:nth-child(3) { transition-delay: 300ms; }
    &:nth-child(4) { transition-delay: 400ms; }
    
    .feature-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(139, 92, 246, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.3s ease;
      
      svg {
        color: white;
      }
    }
    
    .feature-text {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: white;
      }
      
      p {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
      }
    }
  }
}

// Sample Questions
.sample-questions {
  margin-bottom: 2.5rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  transition-delay: 500ms;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  .question-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    
    .question-chip {
      padding: 0.5rem 1rem;
      background: rgba(139, 92, 246, 0.15);
      border: 1px solid rgba(139, 92, 246, 0.3);
      border-radius: 30px;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.9);
      transition: all 0.3s ease;
      cursor: pointer;
      
      &:hover {
        background: rgba(139, 92, 246, 0.3);
        transform: translateY(-2px);
      }
    }
  }
}

// Call to Action Button
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  margin: 0 auto 1.5rem;
  display: block;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  transition-delay: 600ms;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8));
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 0;
    }
    
    .icon-wrapper {
      transform: translateX(5px);
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  .btn-text {
    position: relative;
    z-index: 1;
    margin-right: 0.75rem;
  }
  
  .icon-wrapper {
    position: relative;
    z-index: 1;
    display: inline-flex;
    transition: transform 0.3s ease;
  }
}

// Accessibility Note
.accessibility-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    color: rgba(139, 92, 246, 0.8);
  }
}

// Loading State
.loading-state {
  max-width: 400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  
  .loading-animation {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    
    .loading-circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      animation: loading-bounce 1.4s infinite ease-in-out both;
      
      &:nth-child(1) {
        animation-delay: -0.32s;
      }
      
      &:nth-child(2) {
        animation-delay: -0.16s;
      }
    }
  }
  
  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
  }
}

// Animations
.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(139, 92, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(15px);
  }
  50% {
    transform: translateY(0) translateX(30px);
  }
  75% {
    transform: translateY(15px) translateX(15px);
  }
}

@keyframes ring-pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes wave-animation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

// Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

// Responsive Styles
@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .ai-call {
    padding: 5rem 0;
  }
  
  .call-intro {
    padding: 2rem 1.5rem;
  }
  
  .call-header {
    .title {
      font-size: 2.2rem;
    }
    
    .ai-icon {
      width: 60px;
      height: 60px;
    }
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .btn {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }
  
  .sample-questions {
    .question-chips {
      flex-direction: column;
      align-items: center;
      
      .question-chip {
        width: 100%;
        max-width: 300px;
      }
    }
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .call-intro {
    padding: 1.5rem 1rem;
  }
  
  .call-header {
    .title {
      font-size: 1.8rem;
    }
  }
  
  .feature-item {
    padding: 1rem;
  }
}
</style>