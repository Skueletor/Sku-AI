<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">
          <div class="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
            <div class="logo-glow"></div>
          </div>
          <h1 class="logo-text">Sku-<span class="gradient-text">AI</span> <span class="connect-text">Connect</span></h1>
        </router-link>
      </div>
      <nav class="nav">
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <ul class="nav-list" :class="{ 'mobile-active': mobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu">Inicio</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">Acerca de</router-link></li>
          <li><router-link to="/ai-call" class="btn btn-primary" @click="closeMobileMenu">
            <span class="btn-text">Iniciar Llamada</span>
            <span class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
          </router-link></li>
        </ul>
      </nav>
    </div>
    <div class="header-particles">
      <div class="particle p1"></div>
      <div class="particle p2"></div>
      <div class="particle p3"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobileMenuOpen: false,
      scrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 0;
  transition: all 0.3s ease;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, 
      rgba(139, 92, 246, 0), 
      rgba(139, 92, 246, 0.5), 
      rgba(236, 72, 153, 0.5), 
      rgba(139, 92, 246, 0));
  }
  
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  
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

.logo {
  display: flex;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  
  &-icon {
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
    animation: pulse 3s infinite ease-in-out;
    
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
      animation: pulse 3s infinite ease-in-out alternate;
    }
  }
  
  &-text {
    font-size: 1.8rem;
    margin: 0;
    color: white;
    display: flex;
    align-items: center;
    
    .gradient-text {
      background: linear-gradient(to right, #22d3ee, #8b5cf6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    .connect-text {
      font-size: 1.2rem;
      margin-left: 0.3rem;
      opacity: 0.8;
      font-weight: 400;
    }
  }
}

.nav {
  &-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
    margin: 0;
    padding: 0;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));
        transition: all 0.3s ease;
      }
      
      &:hover, &.router-link-exact-active:not(.btn) {
        color: white;
        
        &::after {
          width: 100%;
        }
      }
      
      &.btn {
        padding: 0.75rem 1.5rem;
        
        &::after {
          display: none;
        }
      }
    }
  }
}

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
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
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

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1.5rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
    
    .connect-text {
      font-size: 1rem;
    }
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-list {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: right 0.3s ease;
    z-index: 100;
    
    &.mobile-active {
      right: 0;
    }
    
    li {
      margin: 1rem 0;
      width: 100%;
      text-align: center;
    }
    
    a {
      display: block;
      padding: 0.75rem;
      width: 100%;
      
      &.btn {
        margin-top: 1rem;
      }
    }
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>