<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>AI<span>Call</span></h2>
            <p>La forma más inteligente de comunicarse</p>
          </div>
          <div class="footer-links">
            <h3>Enlaces</h3>
            <ul>
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/about">Acerca de</router-link></li>
              <li><router-link to="/ai-call">Iniciar Llamada</router-link></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h3>Contacto</h3>
            <p>info@aicall.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} AICall. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </template>

<script>
/* eslint-disable */
  export default {
    name: 'AppFooter'
  }
  </script>
  
  <style lang="scss" scoped>
  .footer {
    background-color: var(--dark-color);
    color: white;
    padding: 3rem 0 1rem;
    
    &-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    &-logo {
      h2 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        
        span {
          color: var(--primary-color);
        }
      }
      
      p {
        opacity: 0.8;
      }
    }
    
    &-links {
      h3 {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
      
      ul {
        list-style: none;
        
        li {
          margin-bottom: 0.5rem;
          
          a {
            color: white;
            opacity: 0.8;
            transition: var(--transition);
            
            &:hover {
              opacity: 1;
              color: var(--primary-color);
              text-decoration: none;
            }
          }
        }
      }
    }
    
    &-contact {
      h3 {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
      
      p {
        margin-bottom: 0.5rem;
        opacity: 0.8;
      }
    }
    
    &-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1.5rem;
      text-align: center;
      
      p {
        opacity: 0.6;
        font-size: 0.9rem;
      }
    }
  }
  </style>