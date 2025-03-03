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
          </div>
          <h1 class="logo-text">Sku-<span>AI</span></h1>
        </router-link>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/about">Acerca de</router-link></li>
          <li><router-link to="/ai-call" class="btn btn-primary">Iniciar Llamada</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
<!-- eslint-disable -->
<style lang="scss" scoped>
.header {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    background: var(--primary-gradient);
    margin-right: 0.75rem;
    color: white;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
    animation: pulse 3s infinite ease-in-out;
  }
  
  &-text {
    font-size: 1.8rem;
    margin: 0;
    background: linear-gradient(to right, #f8fafc, #22d3ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    span {
      background: linear-gradient(to right, #22d3ee, #8b5cf6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
}

.nav {
  &-list {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
    
    a {
      color: var(--text-secondary);
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-gradient);
        transition: var(--transition);
      }
      
      &:hover, &.router-link-exact-active:not(.btn) {
        color: var(--text-primary);
        
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

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    padding: 1rem;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .nav-list {
    margin-top: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>