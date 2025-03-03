<template>
  <footer class="footer">
    <div class="footer-particles">
      <div class="particle p1"></div>
      <div class="particle p2"></div>
      <div class="particle p3"></div>
      <div class="particle p4"></div>
      <div class="particle p5"></div>
    </div>
    <div class="footer-grid-overlay"></div>
    
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <div class="logo-wrapper">
            <div class="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
              <div class="logo-glow"></div>
            </div>
            <h2 class="logo-text">Sku-<span class="gradient-text">AI</span> Connect</h2>
          </div>
          <p>Comunicación inteligente para el futuro</p>
          <div class="social-links">
            <a href="https://github.com/Skueletor/Sku-AI" target="_blank" class="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/about">Acerca de</router-link></li>
            <li><router-link to="/ai-call">Iniciar Llamada</router-link></li>
          </ul>
        </div>
        
        <div class="footer-project">
          <h3>Proyecto</h3>
          <ul>
            <li><a href="https://github.com/Skueletor/Sku-AI" target="_blank">Repositorio GitHub</a></li>
            <li><a href="#">Documentación</a></li>
            <li><a href="#">Recursos</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h3>Contacto</h3>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@skuai-connect.com">info@skuai-connect.com</a>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:+59171018245">+591 71018245</a>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Universidad Privada Domingo Savio</span>
          </div>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Sku-AI Connect. Todos los derechos reservados.</p>
        <p class="project-info">Proyecto de Inteligencia Artificial - Docente: Jaime Zambrana Chacón</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
  
<style lang="scss" scoped>
.footer {
  background-color: rgba(15, 23, 42, 0.95);
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    
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
  
  &-grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: 1;
  }
  
  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 2;
  }
  
  &-logo {
    .logo-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .logo-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      margin-right: 0.75rem;
      color: white;
      position: relative;
      
      .logo-glow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: inherit;
        filter: blur(8px);
        opacity: 0.7;
        z-index: -1;
      }
    }
    
    .logo-text {
      font-size: 1.8rem;
      margin: 0;
      
      .gradient-text {
        background: linear-gradient(to right, #22d3ee, #8b5cf6);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }
    
    p {
      opacity: 0.8;
      margin-bottom: 1.5rem;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      
      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        transition: all 0.3s ease;
        
        &:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
          transform: translateY(-3px);
        }
      }
    }
  }
  
  &-links, &-project, &-contact {
    h3 {
      position: relative;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      padding-bottom: 0.5rem;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
      }
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: 0.8rem;
        
        a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          
          &::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
            margin-right: 0.5rem;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
          }
          
          &:hover {
            color: white;
            
            &::before {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  
  &-contact {
    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      
      svg {
        margin-right: 0.75rem;
        color: rgba(139, 92, 246, 0.8);
        flex-shrink: 0;
      }
      
      a, span {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          color: white;
        }
      }
    }
  }
  
  &-divider {
    height: 1px;
    background: linear-gradient(to right, 
      rgba(139, 92, 246, 0), 
      rgba(139, 92, 246, 0.5), 
      rgba(236, 72, 153, 0.5), 
      rgba(139, 92, 246, 0));
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
  
  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    
    p {
      opacity: 0.6;
      font-size: 0.9rem;
      margin: 0;
    }
    
    .project-info {
      font-style: italic;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
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

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.gradient-text {
  background: linear-gradient(to right, #22d3ee, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>