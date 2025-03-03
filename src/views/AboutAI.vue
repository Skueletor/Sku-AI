<template>
  <div class="about" ref="about">
    <!-- Background Elements -->
    <div class="animated-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <h1 class="about-title" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }">
          Acerca de <span class="gradient-text">Sku-AI Connect</span>
        </h1>
        <div class="subtitle-wrapper" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 600, duration: 600 } }">
          <p class="about-subtitle">Proyecto de Inteligencia Artificial: Comunicación inteligente para el futuro</p>
        </div>
      </div>
    </section>
    
    <!-- Main Content -->
    <div class="container">
      <div class="about-content">
        <!-- Left Column: Text Content -->
        <div class="about-text">
          <!-- Project Information -->
          <div class="glass-card project-card" v-motion-slide-visible-once :delay="300">
            <h2>Información del <span class="gradient-text">Proyecto</span></h2>
            <div class="project-info">
              <div class="info-group">
                <h3>Estudiantes</h3>
                <ul class="student-list">
                  <li>
                    <span class="student-name">Juan Luis Menacho</span>
                    <a href="https://wa.me/59171018245" class="contact-link" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      Contacto
                    </a>
                  </li>
                  <li>
                    <span class="student-name">Richard Semizo Gomez</span>
                    <a href="https://wa.me/59170977927" class="contact-link" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              
              <div class="info-group">
                <h3>Universidad</h3>
                <p>Universidad Privada Domingo Savio</p>
                <h3>Carrera</h3>
                <p>Ingeniería de Sistemas</p>
                <h3>Docente</h3>
                <p>Jaime Zambrana Chacón</p>
              </div>
            </div>
          </div>
          
          <!-- Introduction Section -->
          <div class="glass-card overview-card" v-motion-slide-visible-once :delay="400">
            <h2><span class="gradient-text">Introducción</span></h2>
            <div class="card-content">
              <div class="ai-brain">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                  <path d="M7 12a3 3 0 0 0 3 3m7-3a3 3 0 0 1-3 3"></path>
                </svg>
                <div class="pulse-rings">
                  <div class="ring ring-1"></div>
                  <div class="ring ring-2"></div>
                </div>
              </div>
              <p>Sku-AI Connect es una plataforma innovadora que permite a los usuarios interactuar con inteligencia artificial avanzada a través de una interfaz de llamada intuitiva y moderna. Este proyecto tiene como finalidad desarrollar un sistema de comunicación inteligente que utiliza técnicas de procesamiento de lenguaje natural (PLN) y aprendizaje automático para crear una experiencia de comunicación fluida y natural.</p>
            </div>
          </div>
          
          <!-- Objective Section -->
          <div class="glass-card mission-card" v-motion-slide-visible-once :delay="500">
            <h2><span class="gradient-text">Objetivo</span></h2>
            <div class="mission-content">
              <div class="mission-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
              <p>Desarrollar un modelo de IA capaz de mantener conversaciones naturales con los usuarios, proporcionando respuestas contextuales y precisas en tiempo real. Nuestra misión es hacer que la tecnología de IA sea accesible para todos, proporcionando una forma natural y conversacional de interactuar con sistemas inteligentes.</p>
            </div>
            <div class="mission-particles">
              <div class="particle p1"></div>
              <div class="particle p2"></div>
              <div class="particle p3"></div>
            </div>
          </div>
          
          <!-- Theoretical Framework -->
          <div class="glass-card tech-card" v-motion-slide-visible-once :delay="600">
            <h2>Marco <span class="gradient-text">Teórico</span></h2>
            <div class="tech-grid">
              <div class="tech-item">
                <div class="tech-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3>Procesamiento de Lenguaje Natural</h3>
                <p>El PLN es una rama de la IA que se enfoca en la interacción entre computadoras y humanos a través del lenguaje natural.</p>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 18h.01"></path>
                    <path d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"></path>
                    <path d="M12 6v7"></path>
                  </svg>
                </div>
                <h3>Aprendizaje Automático</h3>
                <p>Método de análisis de datos que automatiza la construcción de modelos analíticos, permitiendo a los sistemas aprender de los datos.</p>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h6"></path>
                  </svg>
                </div>
                <h3>Redes Neuronales</h3>
                <p>Utilizamos arquitecturas de redes neuronales avanzadas para procesar y entender el lenguaje humano.</p>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Seguridad de Datos</h3>
                <p>Implementamos protocolos de seguridad avanzados para proteger la privacidad de los usuarios.</p>
              </div>
            </div>
            <div class="tech-connection-lines">
              <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="connection-path" d="M100 100 L250 50 L400 100" stroke="url(#tech-gradient)" stroke-width="2" stroke-dasharray="5 5"/>
                <path class="connection-path" d="M100 100 L250 250 L400 100" stroke="url(#tech-gradient)" stroke-width="2" stroke-dasharray="5 5"/>
                <defs>
                  <linearGradient id="tech-gradient" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.2"/>
                    <stop offset="0.5" stop-color="#8b5cf6"/>
                    <stop offset="1" stop-color="#8b5cf6" stop-opacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Right Column: Visual Content -->
        <div class="about-visual">
          <!-- Methodology -->
          <div class="glass-card methodology-card" v-motion-slide-visible-once :delay="400">
            <h2>Metodología <span class="gradient-text">Kanban</span></h2>
            <div class="kanban-board">
              <div class="kanban-column">
                <div class="column-header">Por Hacer</div>
                <div class="kanban-card">Recopilación de Datos</div>
                <div class="kanban-card">Diseño de Interfaz</div>
              </div>
              <div class="kanban-column">
                <div class="column-header">En Progreso</div>
                <div class="kanban-card active">Preprocesamiento</div>
                <div class="kanban-card active">Modelado</div>
              </div>
              <div class="kanban-column">
                <div class="column-header">Completado</div>
                <div class="kanban-card completed">Planificación</div>
                <div class="kanban-card completed">Investigación</div>
              </div>
            </div>
            <div class="methodology-steps">
              <div class="methodology-step">
                <div class="step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div class="step-content">
                  <h4>Recopilación de Datos</h4>
                  <p>Recolección de datos para entrenamiento del modelo.</p>
                </div>
              </div>
              <div class="methodology-step">
                <div class="step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div class="step-content">
                  <h4>Preprocesamiento</h4>
                  <p>Limpieza de datos, tokenización y lematización.</p>
                </div>
              </div>
              <div class="methodology-step">
                <div class="step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div class="step-content">
                  <h4>Modelado</h4>
                  <p>Implementación de una red neuronal con TensorFlow.</p>
                </div>
              </div>
              <div class="methodology-step">
                <div class="step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div class="step-content">
                  <h4>Evaluación</h4>
                  <p>Uso de métricas para evaluar el rendimiento del modelo.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Conclusions -->
          <div class="glass-card conclusions-card" v-motion-slide-visible-once :delay="500">
            <h2><span class="gradient-text">Conclusiones</span></h2>
            <div class="conclusions-content">
              <p>El sistema Sku-AI Connect demuestra el potencial de la inteligencia artificial para transformar la forma en que interactuamos con la tecnología. A través de la implementación de técnicas avanzadas de procesamiento de lenguaje natural y aprendizaje automático, hemos logrado crear una plataforma que proporciona una experiencia de comunicación natural y fluida.</p>
              <div class="metrics">
                <div class="metric">
                  <div class="metric-value">95%</div>
                  <div class="metric-label">Precisión en Respuestas</div>
                </div>
                <div class="metric">
                  <div class="metric-value">98%</div>
                  <div class="metric-label">Satisfacción del Usuario</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Bibliography and Annexes -->
          <div class="glass-card resources-card" v-motion-slide-visible-once :delay="600">
            <h2>Recursos del <span class="gradient-text">Proyecto</span></h2>
            <div class="resources-content">
              <div class="resources-section">
                <h3>Bibliografía</h3>
                <ul class="bibliography-list">
                  <li>Bird, S., Klein, E., & Loper, E. (2009). <em>Natural Language Processing with Python</em>. O'Reilly Media.</li>
                  <li>Chollet, F. (2017). <em>Deep Learning with Python</em>. Manning Publications.</li>
                </ul>
              </div>
              <div class="resources-section">
                <h3>Anexos</h3>
                <div class="annexes">
                  <a href="https://github.com/Skueletor/Sku-AI" target="_blank" class="annex-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Código Fuente en GitHub
                  </a>
                  <a href="#" class="annex-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Dataset del Proyecto
                  </a>
                  <a href="#" class="annex-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Documentación Técnica
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="glass-card cta-card" v-motion-slide-visible-once>
        <h2>¿Listo para experimentar el <span class="gradient-text">futuro</span> de la comunicación con IA?</h2>
        <p>Inicia tu primera llamada ahora y descubre el potencial de nuestra tecnología.</p>
        <router-link to="/ai-call" class="btn btn-primary btn-lg">
          <span class="btn-text">Iniciar Llamada</span>
          <span class="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </span>
        </router-link>
        <div class="cta-particles">
          <div class="particle p1"></div>
          <div class="particle p2"></div>
          <div class="particle p3"></div>
          <div class="particle p4"></div>
          <div class="particle p5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutAI',
  data() {
    return {
      animationStarted: false
    }
  },
  mounted() {
    // Start animations when component is mounted
    this.$nextTick(() => {
      // Add scroll event listener for animations
      window.addEventListener('scroll', this.checkScrollPosition);
    });
  },
  beforeUnmount() {
    // Remove event listener
    window.removeEventListener('scroll', this.checkScrollPosition);
  },
  methods: {
    checkScrollPosition() {
      // Check if elements are in view for animations
      const elements = document.querySelectorAll('[v-motion-slide-visible-once]');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (!element.classList.contains('visible')) {
            element.classList.add('visible');
          }
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
// Core styling
.about {
  position: relative;
  padding: 0;
  overflow-x: hidden;
  color: white;
  min-height: 100vh;
  
  // Animated background elements
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
  }
}

// Hero section
.about-hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 0 3rem;
  position: relative;
  
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
}

.about-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
}

.subtitle-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.about-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

// Main content layout
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 3rem 0;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

// Glass card styling
.glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(139, 92, 246, 0.3);
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      border-radius: 3px;
    }
  }
}

// Project information card
.project-card {
  .project-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .info-group {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      color: white;
    }
    
    p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1.5rem;
    }
  }
  
  .student-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.8rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
    }
    
    .student-name {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.9);
    }
    
    .contact-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(139, 92, 246, 0.9);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      
      &:hover {
        color: rgba(139, 92, 246, 1);
        text-decoration: underline;
      }
      
      svg {
        color: currentColor;
      }
    }
  }
}

// Overview card
.overview-card {
  .card-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  
  .ai-brain {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(139, 92, 246, 0.2);
    border-radius: 50%;
    flex-shrink: 0;
    
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
}

// Mission card
.mission-card {
  position: relative;
  overflow: hidden;
  
  .mission-content {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  
  .mission-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      color: white;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .mission-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    .particle {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      
      &.p1 {
        top: 20%;
        left: 10%;
        background: rgba(139, 92, 246, 0.5);
        animation: float-particle 20s infinite linear;
      }
      
      &.p2 {
        top: 70%;
        left: 80%;
        background: rgba(236, 72, 153, 0.5);
        animation: float-particle 25s infinite linear reverse;
      }
      
      &.p3 {
        top: 40%;
        left: 60%;
        background: rgba(34, 211, 238, 0.5);
        animation: float-particle 22s infinite linear;
      }
    }
  }
}

// Technology card
.tech-card {
  position: relative;
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    position: relative;
    z-index: 2;
  }
  
  .tech-item {
    text-align: center;
    
    .tech-icon {
      width: 50px;
      height: 50px;
      background: rgba(139, 92, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      
      svg {
        color: white;
      }
    }
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    p {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.5;
    }
  }
  
  .tech-connection-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
    
    .connection-path {
      animation: dash 30s linear infinite;
    }
  }
}

// Methodology card
.methodology-card {
  .kanban-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .kanban-column {
    background: rgba(15, 23, 42, 0.3);
    border-radius: 8px;
    padding: 1rem;
    
    .column-header {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
    }
  }
  
  .kanban-card {
    background: rgba(15, 23, 42, 0.5);
    border-radius: 6px;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    border-left: 3px solid rgba(139, 92, 246, 0.5);
    
    &.active {
      border-left-color: rgba(236, 72, 153, 0.8);
      background: rgba(236, 72, 153, 0.1);
    }
    
    &.completed {
      border-left-color: rgba(34, 211, 238, 0.8);
      background: rgba(34, 211, 238, 0.1);
    }
  }
  
  .methodology-steps {
    margin-top: 2rem;
  }
  
  .methodology-step {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .step-icon {
      width: 40px;
      height: 40px;
      background: rgba(139, 92, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      svg {
        color: white;
      }
    }
    
    .step-content {
      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
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

// Conclusions card
.conclusions-card {
  .conclusions-content {
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
    }
  }
  
  .metrics {
    display: flex;
    justify-content: space-around;
    
    .metric {
      text-align: center;
      
      .metric-value {
        font-size: 2.5rem;
        font-weight: bold;
        background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 0.5rem;
      }
      
      .metric-label {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
}

// Resources card
.resources-card {
  .resources-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .resources-section {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: white;
    }
  }
  
  .bibliography-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.8rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      
      &:last-child {
        border-bottom: none;
      }
      
      em {
        color: rgba(139, 92, 246, 0.9);
        font-style: italic;
      }
    }
  }
  
  .annexes {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
    .annex-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(139, 92, 246, 0.1);
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 0.95rem;
      border: 1px solid rgba(139, 92, 246, 0.3);
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(139, 92, 246, 0.2);
        transform: translateY(-3px);
      }
      
      svg {
        color: rgba(139, 92, 246, 0.9);
      }
    }
  }
}

// CTA card
.cta-card {
  text-align: center;
  max-width: 800px;
  margin: 3rem auto;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%);
  position: relative;
  overflow: hidden;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
    
    &::after {
      display: none;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 1;
  }
  
  .btn {
    position: relative;
    z-index: 1;
  }
  
  .cta-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    .particle {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      
      &.p1 {
        top: 20%;
        left: 10%;
        background: rgba(139, 92, 246, 0.5);
        animation: float-particle 20s infinite linear;
      }
      
      &.p2 {
        top: 70%;
        left: 80%;
        background: rgba(236, 72, 153, 0.5);
        animation: float-particle 25s infinite linear reverse;
      }
      
      &.p3 {
        top: 40%;
        left: 60%;
        background: rgba(34, 211, 238, 0.5);
        animation: float-particle 22s infinite linear;
      }
      
      &.p4 {
        top: 80%;
        left: 30%;
        background: rgba(139, 92, 246, 0.5);
        animation: float-particle 18s infinite linear reverse;
      }
      
      &.p5 {
        top: 30%;
        left: 90%;
        background: rgba(236, 72, 153, 0.5);
        animation: float-particle 15s infinite linear;
      }
    }
  }
}

// Button styling
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8));
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::after {
      left: 0;
    }
    
    .btn-icon {
      transform: translateX(3px);
    }
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn-text {
    margin-right: 0.5rem;
  }
  
  .btn-icon {
    display: inline-flex;
    transition: transform 0.3s ease;
  }
  
  &.btn-primary {
    color: white;
    border: none;
  }
  
  &.btn-lg {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}

// Gradient text
.gradient-text {
  background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

// Container
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

// Animations
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

@keyframes float-particle {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(30px, 30px);
  }
  50% {
    transform: translate(60px, 0);
  }
  75% {
    transform: translate(30px, -30px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
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

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}

// Motion slide animation directive
[v-motion-slide-visible-once] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>