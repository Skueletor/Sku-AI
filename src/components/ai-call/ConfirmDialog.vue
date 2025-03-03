<template>
  <div class="confirm-dialog glass-card">
    <div class="dialog-background">
      <div class="dialog-glow"></div>
      <div class="dialog-particles">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
      </div>
    </div>
    
    <div class="confirm-content">
      <div class="dialog-header">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h2>¿Estás listo para comenzar?</h2>
      </div>
      
      <p class="dialog-description">Estás a punto de iniciar una llamada con nuestra IA avanzada. Esta experiencia te permitirá interactuar con tecnología de vanguardia diseñada para entender y responder a tus necesidades.</p>
      
      <div class="features-row">
        <div class="feature-item">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h4>Conversación Natural</h4>
          <p>Interactúa como si hablaras con una persona real</p>
        </div>
        
        <div class="feature-divider">
          <div class="divider-line"></div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <h4>Respuestas Precisas</h4>
          <p>Obtén información contextual y relevante</p>
        </div>
        
        <div class="feature-divider">
          <div class="divider-line"></div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h4>Privacidad Segura</h4>
          <p>Tu conversación está protegida en todo momento</p>
        </div>
      </div>
      
      <div class="tips-container glass-card">
        <div class="tips-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <h3>Consejos para una mejor experiencia</h3>
        </div>
        <ul class="tips-list">
          <li>
            <span class="tip-marker"></span>
            <span>Habla con claridad y formula preguntas específicas</span>
          </li>
          <li>
            <span class="tip-marker"></span>
            <span>Puedes interrumpir o finalizar la llamada en cualquier momento</span>
          </li>
          <li>
            <span class="tip-marker"></span>
            <span>Proporciona contexto para obtener respuestas más precisas</span>
          </li>
        </ul>
      </div>
      
      <div class="privacy-notice">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <p>Tu privacidad es importante. Esta conversación no se almacena permanentemente.</p>
      </div>
      
      <div class="confirm-buttons">
        <button @click="$emit('cancel')" class="btn btn-outline">
          <span class="btn-text">Cancelar</span>
        </button>
        <button @click="$emit('confirm')" class="btn btn-primary pulse-animation">
          <span class="btn-text">Iniciar Llamada</span>
          <span class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  mounted() {
    // Add keyboard listener for ESC key
    window.addEventListener('keydown', this.handleKeyDown);
    
    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.feature-item, .tips-container, .privacy-notice, .btn');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in');
        }, 100 * index);
      });
    }, 100);
  },
  beforeUnmount() {
    // Remove event listeners
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    handleKeyDown(e) {
      // Cancel dialog when ESC key is pressed
      if (e.key === 'Escape') {
        this.$emit('cancel');
      }
      
      // Confirm dialog when Enter key is pressed
      if (e.key === 'Enter') {
        this.$emit('confirm');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm-dialog {
  max-width: 650px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: dialog-appear 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.dialog-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  .dialog-glow {
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
    z-index: -1;
    animation: rotate 20s linear infinite;
  }
  
  .dialog-particles {
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

.confirm-content {
  padding: 2.5rem;
  position: relative;
  z-index: 1;
}

.dialog-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: center;
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      border: 1px solid rgba(139, 92, 246, 0.3);
      animation: pulse 2s infinite;
    }
    
    svg {
      color: white;
    }
  }
  
  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
}

.dialog-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

.features-row {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  .feature-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(to right, rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.7));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    &:hover {
      background: rgba(139, 92, 246, 0.1);
      transform: translateY(-5px);
      
      &::before {
        opacity: 1;
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
        transform: scale(1.1);
      }
    }
    
    .feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.2rem;
      transition: all 0.3s ease;
      
      svg {
        color: white;
      }
    }
    
    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      color: white;
    }
    
    p {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.5;
      margin: 0;
    }
  }
  
  .feature-divider {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    
    .divider-line {
      width: 1px;
      height: 70px;
      background: linear-gradient(to bottom, 
        rgba(139, 92, 246, 0), 
        rgba(139, 92, 246, 0.5), 
        rgba(139, 92, 246, 0));
    }
  }
}

.tips-container {
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 16px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .tips-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    
    svg {
      color: rgba(139, 92, 246, 0.8);
      margin-right: 0.75rem;
      flex-shrink: 0;
    }
    
    h3 {
      font-size: 1.2rem;
      color: white;
      margin: 0;
    }
  }
  
  .tips-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      .tip-marker {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
        margin-top: 0.5rem;
        margin-right: 0.75rem;
        flex-shrink: 0;
      }
      
      span {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
}

.privacy-notice {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  svg {
    color: rgba(139, 92, 246, 0.8);
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
}

.confirm-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    min-width: 160px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    
    &.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    &.btn-outline {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.8);
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-3px);
      }
      
      &:active {
        transform: translateY(-1px);
      }
    }
    
    &.btn-primary {
      background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      border: none;
      color: white;
      overflow: hidden;
      
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
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        
        &::before {
          left: 0;
        }
        
        .icon-wrapper {
          transform: translateX(3px);
        }
      }
      
      &:active {
        transform: translateY(-1px);
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
  }
}

// Animations
@keyframes dialog-appear {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
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

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .features-row {
    flex-direction: column;
    gap: 1.5rem;
    
    .feature-item {
      width: 100%;
      max-width: 100%;
    }
    
    .feature-divider {
      display: none;
    }
  }

  .confirm-content {
    padding: 2rem 1.5rem;
  }
  
  .confirm-buttons {
    flex-direction: column-reverse;
    gap: 1rem;
    
    .btn {
      width: 100%;
    }
  }
  
  .tips-container {
    .tips-header {
      h3 {
        font-size: 1.1rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .confirm-content {
    padding: 1.5rem 1rem;
  }
  
  .dialog-header {
    h2 {
      font-size: 1.6rem;
    }
    
    .icon-container {
      width: 50px;
      height: 50px;
    }
  }
  
  .dialog-description {
    font-size: 1rem;
  }
  
  .tips-container {
    padding: 1.2rem;
  }
}
</style>