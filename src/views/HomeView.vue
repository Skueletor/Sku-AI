<template>
  <div class="home" ref="home">
    <!-- Background Elements -->
    <div class="animated-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    
    <!-- Hero Section -->
    <section ref="hero" class="section hero" id="hero">
      <div class="container">
        <div class="hero-content" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }">
          <h1 class="hero-title">
            <span class="gradient-text">Sku-AI</span> 
            <span class="typing-text">Connect</span>
          </h1>
          <p class="hero-subtitle" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }">
            Comunicación inteligente para el futuro
          </p>
          <div class="hero-buttons" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1200, duration: 600 } }">
            <router-link to="/ai-call" class="btn btn-primary">
              <span class="btn-text">Iniciar Llamada</span>
              <span class="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
            </router-link>
            <a href="#" @click.prevent="scrollToNextSection" class="btn btn-outline">
              <span class="btn-text">Saber más</span>
              <span class="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
              </span>
            </a>
          </div>
        </div>
        <div class="hero-image" v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 1000 } }">
          <div class="phone-icon">
            <div class="glow-effect"></div>
            <img src="@/assets/images/logo.png" alt="Logo" class="logo">
            <div class="pulse-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToNextSection" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1800, duration: 600 } }">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div class="arrow-down"></div>
      </div>
    </section>
    
    <!-- Info Section -->
    <section ref="section1" class="section info-section" id="info">
      <div class="container">
        <div class="glass-card info-card" v-motion-slide-visible-once :delay="300">
          <h2 class="section-title">¿Qué es <span class="gradient-text">Sku-AI Connect</span>?</h2>
          <p v-motion-slide-visible-once :delay="400">
            Sku-AI Connect es una plataforma revolucionaria que te permite mantener conversaciones naturales con una inteligencia artificial avanzada.
          </p>
          <p v-motion-slide-visible-once :delay="500">
            Nuestra tecnología utiliza algoritmos de procesamiento de lenguaje natural para entender tus necesidades y proporcionar respuestas precisas y útiles en tiempo real.
          </p>
          <p v-motion-slide-visible-once :delay="600">
            Ya sea que necesites asistencia, información o simplemente una conversación, Sku-AI Connect está aquí para ayudarte.
          </p>
          <div class="info-graphic" v-motion-slide-visible-once :delay="700">
            <div class="ai-node central-node">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><path d="M7 12a3 3 0 0 0 3 3m7-3a3 3 0 0 1-3 3"></path></svg>
            </div>
            <div class="connection-lines">
              <div class="line line-1"></div>
              <div class="line line-2"></div>
              <div class="line line-3"></div>
            </div>
            <div class="ai-node node-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div class="ai-node node-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <div class="ai-node node-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section ref="section2" class="section features" id="features">
      <div class="container">
        <h2 class="section-title text-center mb-5" v-motion-slide-visible-once>
          <span class="gradient-text">Características</span> Principales
        </h2>
        <div class="features-grid">
          <div class="glass-card feature-card glow-border" v-motion-slide-visible-once :delay="300">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <h3>Respuestas Inteligentes</h3>
            <p>Nuestra IA proporciona respuestas precisas y contextuales a tus preguntas en tiempo real.</p>
            <div class="feature-particles">
              <div class="particle p1"></div>
              <div class="particle p2"></div>
              <div class="particle p3"></div>
            </div>
          </div>
          
          <div class="glass-card feature-card glow-border" v-motion-slide-visible-once :delay="500">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Seguridad Garantizada</h3>
            <p>Todas tus conversaciones están protegidas y encriptadas para garantizar tu privacidad.</p>
            <div class="feature-particles">
              <div class="particle p1"></div>
              <div class="particle p2"></div>
              <div class="particle p3"></div>
            </div>
          </div>
          
          <div class="glass-card feature-card glow-border" v-motion-slide-visible-once :delay="700">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3>Interfaz Intuitiva</h3>
            <p>Diseñada para ser fácil de usar, nuestra interfaz te permite comunicarte con la IA sin complicaciones.</p>
            <div class="feature-particles">
              <div class="particle p1"></div>
              <div class="particle p2"></div>
              <div class="particle p3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section ref="section3" class="section how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-title text-center mb-5" v-motion-slide-visible-once>
          Cómo <span class="gradient-text">Funciona</span>
        </h2>
        <div class="steps">
          <div class="step glass-card" v-motion-slide-visible-once :delay="300">
            <div class="step-number">1</div>
            <h3>Inicia la Llamada</h3>
            <p>Haz clic en el botón "Iniciar Llamada" para comenzar tu experiencia con nuestra IA.</p>
            <div class="step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4V8z"></path></svg>
            </div>
          </div>
          
          <div class="connector-line" v-motion-slide-visible-once :delay="400">
            <svg width="100%" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="connector-path" d="M0 10 H200" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="5 5"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.2"/>
                  <stop offset="0.5" stop-color="#8b5cf6"/>
                  <stop offset="1" stop-color="#8b5cf6" stop-opacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div class="step glass-card" v-motion-slide-visible-once :delay="500">
            <div class="step-number">2</div>
            <h3>Confirma tu Decisión</h3>
            <p>Confirma que deseas iniciar la comunicación con nuestra IA avanzada.</p>
            <div class="step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
            </div>
          </div>
          
          <div class="connector-line" v-motion-slide-visible-once :delay="600">
            <svg width="100%" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="connector-path" d="M0 10 H200" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="5 5"/>
            </svg>
          </div>
          
          <div class="step glass-card" v-motion-slide-visible-once :delay="700">
            <div class="step-number">3</div>
            <h3>Comienza la Conversación</h3>
            <p>Interactúa con nuestra IA a través de la interfaz de llamada y obtén respuestas en tiempo real.</p>
            <div class="step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 9h8"></path><path d="M8 13h6"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section ref="section4" class="section cta" id="cta">
      <div class="container">
        <div class="cta-content glass-card" v-motion-slide-visible-once>
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
    </section>
    
    <!-- Section indicators -->
    <div class="section-indicators">
      <div 
        v-for="(_, index) in sections" 
        :key="index" 
        :class="['indicator', { active: currentSection === index }]"
        @click="scrollToSection(index)"
      >
        <div class="indicator-label">
          {{ getSectionName(index) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentSection: 0,
      sections: [],
      isScrolling: false,
      touchStartY: 0,
      lastScrollTime: 0,
      scrollThreshold: 500, // ms between scroll events
      scrollDuration: 1000, // animation duration in ms
      wheelAccumulator: 0,
      wheelThreshold: 5, // threshold for wheel events
      resizeTimeout: null,
      debug: false, // Set to true to enable console logs for debugging
      sectionNames: ['Inicio', '¿Qué es?', 'Características', 'Cómo Funciona', 'Comenzar'],
      isInitialLoad: true,
      typingInterval: null,
      typingText: 'Connect',
      typingIndex: 0,
      typingSpeed: 150
    }
  },
  mounted() {
    // Initialize after DOM is fully rendered
    this.$nextTick(() => {
      this.initSections();
      this.setupEventListeners();
      
      // Hide scrollbar initially for a cleaner look
      document.body.style.overflow = 'hidden';
      
      // Start typing animation
      this.startTypingAnimation();
      
      // Set initial load flag to false after animations
      setTimeout(() => {
        this.isInitialLoad = false;
      }, 2000);
      
      // Log for debugging
      if (this.debug) {
        console.log('Sections initialized:', this.sections.length);
        this.sections.forEach((section, i) => {
          console.log(`Section ${i} height:`, section.offsetHeight);
        });
      }
    });
  },
  beforeUnmount() {
    this.removeEventListeners();
    document.body.style.overflow = 'auto';
    
    // Clear typing interval
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  },
  methods: {
    initSections() {
      // Get all sections
      this.sections = [
        this.$refs.hero,
        this.$refs.section1,
        this.$refs.section2,
        this.$refs.section3,
        this.$refs.section4
      ];
      
      // Make sure all sections exist
      if (this.sections.some(section => !section)) {
        console.error('Some sections were not found in the DOM');
        // Filter out undefined sections
        this.sections = this.sections.filter(section => section);
      }
      
      // Set minimum heights for sections
      this.sections.forEach(section => {
        section.style.minHeight = '100vh';
      });
    },
    
    setupEventListeners() {
      // Wheel event for mouse scrolling
      window.addEventListener('wheel', this.handleWheel, { passive: false });
      
      // Keyboard navigation
      window.addEventListener('keydown', this.handleKeyDown);
      
      // Touch events for mobile
      this.$refs.home.addEventListener('touchstart', this.handleTouchStart, { passive: true });
      this.$refs.home.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      
      // Handle window resize
      window.addEventListener('resize', this.handleResize);
      
      // Handle scroll events
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    },
    
    removeEventListeners() {
      window.removeEventListener('wheel', this.handleWheel);
      window.removeEventListener('keydown', this.handleKeyDown);
      if (this.$refs.home) {
        this.$refs.home.removeEventListener('touchstart', this.handleTouchStart);
        this.$refs.home.removeEventListener('touchmove', this.handleTouchMove);
      }
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleScroll);
    },
    
    handleResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        // Update section positions after resize
        this.updateSectionPositions();
        
        // Scroll to current section
        this.scrollToSection(this.currentSection, false);
      }, 200);
    },
    
    updateSectionPositions() {
      // This ensures we have the latest positions of sections
      if (this.debug) {
        this.sections.forEach((section, i) => {
          console.log(`Section ${i} offsetTop:`, section.offsetTop);
        });
      }
    },
    
    handleScroll() {
      // Don't process during animations
      if (this.isScrolling) return;
      
      // Find which section is currently in view
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = this.sections.length - 1; i >= 0; i--) {
        const section = this.sections[i];
        if (scrollPosition >= section.offsetTop) {
          if (this.currentSection !== i) {
            this.currentSection = i;
            // Update indicators without scrolling
            if (this.debug) console.log('Current section updated to:', i);
          }
          break;
        }
      }
    },
    
    scrollToSection(index, animate = true) {
      if (index < 0 || index >= this.sections.length) return;
      
      // Update current section
      this.currentSection = index;
      
      // Get target section
      const targetSection = this.sections[index];
      
      if (this.isScrolling) {
        return;
      }
      
      this.isScrolling = true;
      
      if (this.debug) console.log(`Scrolling to section ${index}`);
      
      if (animate) {
        // Smooth scroll animation with enhanced easing
        const startPosition = window.scrollY;
        const targetPosition = targetSection.offsetTop;
        const startTime = performance.now();
        
        const animateScroll = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / this.scrollDuration, 1);
          const easeProgress = this.easeOutExpo(progress);
          
          window.scrollTo(0, startPosition + (targetPosition - startPosition) * easeProgress);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            // Animation complete
            setTimeout(() => {
              this.isScrolling = false;
              if (this.debug) console.log('Scroll animation completed');
            }, 50);
          }
        };
        
        requestAnimationFrame(animateScroll);
      } else {
        // Instant scroll without animation
        window.scrollTo(0, targetSection.offsetTop);
        setTimeout(() => {
          this.isScrolling = false;
        }, 50);
      }
    },
    
    handleWheel(event) {
      event.preventDefault(); // Prevent default scrolling for custom animation
      
      // Throttle wheel events
      const now = Date.now();
      if (now - this.lastScrollTime < 50) return;
      
      // Accumulate wheel delta to prevent over-sensitivity
      this.wheelAccumulator += Math.abs(event.deltaY);
      
      if (this.wheelAccumulator < this.wheelThreshold) return;
      this.wheelAccumulator = 0;
      
      // Check if we should scroll
      if (now - this.lastScrollTime < this.scrollThreshold || this.isScrolling) return;
      
      // Determine scroll direction
      if (event.deltaY > 0) {
        this.scrollToNextSection();
      } else {
        this.scrollToPrevSection();
      }
      
      this.lastScrollTime = now;
    },
    
    scrollToNextSection() {
      if (this.currentSection < this.sections.length - 1) {
        this.scrollToSection(this.currentSection + 1);
      }
    },
    
    scrollToPrevSection() {
      if (this.currentSection > 0) {
        this.scrollToSection(this.currentSection - 1);
      }
    },
    
    handleKeyDown(event) {
      // Navigate with arrow keys
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        this.scrollToNextSection();
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        this.scrollToPrevSection();
      } else if (event.key === 'Home') {
        event.preventDefault();
        this.scrollToSection(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        this.scrollToSection(this.sections.length - 1);
      }
    },
    
    handleTouchStart(event) {
      this.touchStartY = event.touches[0].clientY;
    },
    
    handleTouchMove(event) {
      event.preventDefault(); // Prevent default scrolling for custom animation
      
      if (this.isScrolling) return;
      
      const touchY = event.touches[0].clientY;
      const diff = this.touchStartY - touchY;
      
      // Require significant swipe to change section
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.scrollToNextSection();
        } else {
          this.scrollToPrevSection();
        }
        this.touchStartY = touchY;
      }
    },
    
    // Enhanced easing function for smoother animations
    easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    
    // Get section name for indicators
    getSectionName(index) {
      return this.sectionNames[index] || '';
    },
    
    // Typing animation for hero title
    startTypingAnimation() {
      const fullText = this.typingText;
      this.typingText = '';
      
      this.typingInterval = setInterval(() => {
        if (this.typingIndex < fullText.length) {
          this.typingText += fullText.charAt(this.typingIndex);
          this.typingIndex++;
        } else {
          clearInterval(this.typingInterval);
        }
      }, this.typingSpeed);
    }
  }
}
</script>

<style lang="scss" scoped>
// Enhanced animations and visual styles
// Core section styling
.home {
  position: relative;
  overflow: hidden; // Hide overflow for clean animations
}

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

.section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden; /* Hide overflow within sections */
  padding: 2rem 0;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

// Enhanced section indicators
.section-indicators {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  .indicator {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    &.active {
      background-color: white;
      transform: scale(1.5);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
      
      &::before {
        animation: pulse-indicator 2s infinite;
      }
      
      .indicator-label {
        opacity: 1;
        transform: translateX(-10px);
      }
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      
      .indicator-label {
        opacity: 1;
        transform: translateX(-10px);
      }
    }
    
    .indicator-label {
      position: absolute;
      right: 20px;
      top: 0;
      background-color: rgba(15, 23, 42, 0.8);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.3s ease;
    }
  }
}

@keyframes pulse-indicator {
  0% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1);
  }
  70% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
  }
}

// Enhanced scroll indicator
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 10;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
  
  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid white;
    border-radius: 20px;
    position: relative;
    
    .wheel {
      width: 4px;
      height: 8px;
      background-color: white;
      position: absolute;
      top: 7px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
      animation: scroll-wheel 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
  
  .arrow-down {
    width: 10px;
    height: 10px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    margin-top: 8px;
    animation: arrow-pulse 1.5s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
}

@keyframes scroll-wheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(15px);
  }
}

@keyframes arrow-pulse {
  0% {
    opacity: 0.5;
    transform: rotate(45deg) scale(1);
  }
  100% {
    opacity: 1;
    transform: rotate(45deg) scale(1.2);
  }
}

// Enhanced hero section
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
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
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      font-size: 3rem;
      justify-content: center;
    }
    
    .gradient-text {
      background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-right: 0.5rem;
    }
    
    .typing-text {
      position: relative;
      color: white;
      
      &::after {
        content: '|';
        position: absolute;
        right: -15px;
        animation: blink 1s infinite;
      }
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
  }
  
  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .logo {
      max-width: 200px;
      max-height: 200px;
      animation: float 6s infinite ease-in-out;
      z-index: 2;
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
      
      .glow-effect {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: var(--primary-gradient);
        z-index: -1;
        filter: blur(20px);
        opacity: 0.7;
        animation: pulse 3s infinite ease-in-out;
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
            animation-delay: 1s;
          }
          
          &.ring-3 {
            animation-delay: 2s;
          }
        }
      }
    }
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
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

// Enhanced buttons
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
  
  &.btn-outline {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    
    &::before, &::after {
      opacity: 0.1;
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      
      &::before, &::after {
        opacity: 0.2;
      }
    }
  }
  
  &.btn-lg {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}

// Enhanced glass card effect
.glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(139, 92, 246, 0.3);
  }
}

// Info section enhancements
.info-section {
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
  
  .info-graphic {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 200px;
    position: relative;
    
    .ai-node {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border: 1px solid rgba(139, 92, 246, 0.5);
      transition: all 0.3s ease;
      
      svg {
        color: white;
      }
      
      &.central-node {
        width: 70px;
        height: 70px;
        background: rgba(139, 92, 246, 0.3);
        z-index: 2;
        animation: pulse 3s infinite alternate;
      }
      
      &.node-1 {
        top: 20px;
        left: 30%;
        animation: float-slow 4s infinite alternate;
      }
      
      &.node-2 {
        bottom: 30px;
        left: 25%;
        animation: float-slow 5s infinite alternate-reverse;
      }
      
      &.node-3 {
        top: 50%;
        right: 25%;
        animation: float-slow 6s infinite alternate;
      }
    }
    
    .connection-lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      
      .line {
        position: absolute;
        height: 2px;
        background: linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.5));
        transform-origin: left center;
        
        &::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.8);
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          animation: pulse-small 2s infinite;
        }
        
        &.line-1 {
          width: 120px;
          top: 35%;
          left: 40%;
          transform: rotate(-30deg);
          animation: pulse-line 3s infinite alternate;
        }
        
        &.line-2 {
          width: 140px;
          bottom: 40%;
          left: 40%;
          transform: rotate(30deg);
          animation: pulse-line 4s infinite alternate-reverse;
        }
        
        &.line-3 {
          width: 160px;
          top: 50%;
          left: 45%;
          animation: pulse-line 5s infinite alternate;
        }
      }
    }
  }
}

// Features section enhancements
.features {
  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

.feature-card {
  padding: 2rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  
  .feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
    color: white;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    position: relative;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5));
      z-index: -1;
      animation: pulse 3s infinite alternate;
    }
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  h3 {
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
    }
  }
  
  p {
    color: var(--text-secondary);
    position: relative;
    z-index: 1;
  }
  
  &.glow-border {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 16px;
      padding: 1px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5));
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
  
  .feature-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    
    .particle {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.3);
      
      &.p1 {
        top: 20%;
        left: 10%;
        animation: float-particle 10s infinite linear;
      }
      
      &.p2 {
        top: 70%;
        left: 80%;
        animation: float-particle 15s infinite linear reverse;
      }
      
      &.p3 {
        top: 40%;
        left: 60%;
        animation: float-particle 12s infinite linear;
      }
    }
  }
}

// How it works section enhancements
.how-it-works {
  .steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: stretch;
    }
  }
  
  .connector-line {
    height: 20px;
    margin: 1rem 0;
    
    @media (min-width: 768px) {
      flex: 0 0 50px;
      height: auto;
      margin: 0;
      display: flex;
      align-items: center;
    }
    
    svg {
      width: 100%;
      height: 20px;
      
      @media (min-width: 768px) {
        width: 100%;
        height: 100%;
        transform: rotate(90deg);
      }
    }
    
    .connector-path {
      stroke-dasharray: 5;
      animation: dash 30s linear infinite;
    }
  }
  
  .step {
    text-align: center;
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      color: white;
      border-radius: 50%;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
      position: relative;
      z-index: 1;
      
      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
        z-index: -1;
        animation: pulse 3s infinite alternate;
      }
    }
    
    h3 {
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }
    
    .step-icon {
      margin-top: auto;
      color: rgba(255, 255, 255, 0.7);
      animation: float 4s infinite ease-in-out;
    }
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}

// CTA section enhancements
.cta {
  &-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%);
    position: relative;
    overflow: hidden;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 1;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: var(--text-secondary);
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
}

// Gradient text
.gradient-text {
  background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

// Enhanced animations
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
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

@keyframes pulse-small {
  0%, 100% {
    opacity: 0.5;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-50%) scale(1.5);
  }
}

@keyframes pulse-line {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
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