<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Sku-AI Connect</h1>
          <p class="hero-subtitle">Comunicación inteligente para el futuro</p>
          <div class="hero-buttons">
            <router-link to="/ai-call" class="btn btn-primary">Iniciar Llamada</router-link>
            <router-link to="/about" class="btn btn-outline">Saber más</router-link>
          </div>
        </div>
        <div class="hero-image">
          <div class="phone-icon">
            <img src="@/assets/images/logo.png" alt="Logo" class="logo">

          </div>
        </div>
      </div>
    </section>
    
    <!-- Info Section -->
    <section class="info-section">
      <div class="container">
        <div class="glass-card info-card">
          <h2 class="section-title">¿Qué es Sku-AI Connect?</h2>
          <p>
            Sku-AI Connect es una plataforma revolucionaria que te permite mantener conversaciones naturales con una inteligencia artificial avanzada.
          </p>
          <p>
            Nuestra tecnología utiliza algoritmos de procesamiento de lenguaje natural para entender tus necesidades y proporcionar respuestas precisas y útiles en tiempo real.
          </p>
          <p>
            Ya sea que necesites asistencia, información o simplemente una conversación, Sku-AI Connect está aquí para ayudarte.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features section">
      <div class="container">
        <h2 class="section-title text-center mb-5">Características Principales</h2>
        <div class="features-grid">
          <div class="glass-card feature-card glow-border">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <br>
            <h3>Respuestas Inteligentes</h3>
            <p>Nuestra IA proporciona respuestas precisas y contextuales a tus preguntas en tiempo real.</p>
          </div>
          
          <div class="glass-card feature-card glow-border">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <br>
            <h3>Seguridad Garantizada</h3>
            <p>Todas tus conversaciones están protegidas y encriptadas para garantizar tu privacidad.</p>
          </div>
          
          <div class="glass-card feature-card glow-border">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <br>
            <h3>Interfaz Intuitiva</h3>
            <p>Diseñada para ser fácil de usar, nuestra interfaz te permite comunicarte con la IA sin complicaciones.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="how-it-works section">
      <div class="container">
        <h2 class="section-title text-center mb-5">Cómo Funciona</h2>
        <div class="steps">
          <div class="step glass-card">
            <div class="step-number">1</div>
            <h3>Inicia la Llamada</h3>
            <p>Haz clic en el botón "Iniciar Llamada" para comenzar tu experiencia con nuestra IA.</p>
          </div>
          
          <div class="step glass-card">
            <div class="step-number">2</div>
            <h3>Confirma tu Decisión</h3>
            <p>Confirma que deseas iniciar la comunicación con nuestra IA avanzada.</p>
          </div>
          
          <div class="step glass-card">
            <div class="step-number">3</div>
            <h3>Comienza la Conversación</h3>
            <p>Interactúa con nuestra IA a través de la interfaz de llamada y obtén respuestas en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="cta section">
      <div class="container">
        <div class="cta-content glass-card">
          <h2>¿Listo para experimentar el futuro de la comunicación con IA?</h2>
          <p>Inicia tu primera llamada ahora y descubre el potencial de nuestra tecnología.</p>
          <router-link to="/ai-call" class="btn btn-primary">Iniciar Llamada</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
    z-index: -1;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
  &-content {
    z-index: 1;
  }
  
  &-title {
    font-size: 4.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  
  &-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    color: var(--text-secondary);
    max-width: 500px;
    
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  &-buttons {
    display: flex;
    gap: 1rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    .btn {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }
  }
  
  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .logo {
      max-width: 200px; /* Ajusta el tamaño según sea necesario */
      max-height: 200px;
      animation: float 6s infinite ease-in-out;
    }
    
    .phone-icon {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      animation: float 6s infinite ease-in-out;
      
      &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: var(--primary-gradient);
        z-index: -1;
        filter: blur(20px);
        opacity: 0.7;
        animation: pulse 3s infinite ease-in-out;
      }
      
      svg {
        width: 80px;
        height: 80px;
        color: var(--accent-color);
      }
    }
  }
}

.info-section {
  padding: 4rem 0;
  
  .info-card {
    max-width: 800px;
    margin: 0 auto;
    
    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.7;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.features {
  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

.feature-card {
  padding: 2rem;
  transition: var(--transition);
  
  .feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--primary-gradient);
    color: white;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
  }
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  text-align: center;
  padding: 2rem;
  
  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--primary-gradient);
    color: white;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto 1.5rem;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
  }
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
  }
}

.cta {
  &-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%);
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: var(--text-secondary);
    }
    
    .btn {
      font-size: 1.1rem;
      padding: 1rem 2rem;
    }
  }
}
</style>