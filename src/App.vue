<template>
  <div id="app" class="app-container">
    <app-header />
    <main class="main-content">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
:root {
  --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  --secondary-gradient: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  --dark-bg: #0f172a;
  --darker-bg: #020617;
  --card-bg: rgba(30, 41, 59, 0.7);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --accent-color: #22d3ee;
  --accent-glow: 0 0 15px rgba(34, 211, 238, 0.5);
  --border-radius: 12px;
  --box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --font-heading: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--text-primary);
  background-color: var(--darker-bg);
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 25%),
    radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 25%);
  background-attachment: fixed;
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 0 1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    text-shadow: var(--accent-glow);
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-gradient);
    z-index: -1;
    transition: var(--transition);
  }
  
  &-primary {
    color: white;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      
      &::before {
        transform: scale(1.1);
      }
    }
  }
  
  &-secondary {
    color: white;
    
    &::before {
      background: var(--secondary-gradient);
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      
      &::before {
        transform: scale(1.1);
      }
    }
  }
  
  &-outline {
    background: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
    
    &:hover {
      background-color: var(--accent-color);
      color: var(--darker-bg);
      box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
      transform: translateY(-3px);
    }
  }
  
  &-danger {
    background-color: #ef4444;
    color: white;
    
    &:hover {
      background-color: darken(#ef4444, 10%);
      transform: translateY(-3px);
    }
  }
}

.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
}

.glow-border {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: var(--primary-gradient);
    border-radius: calc(var(--border-radius) + 2px);
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  
  &:hover::after {
    opacity: 1;
    filter: blur(10px);
  }
}

.section {
  padding: 6rem 0;
}

.text-center {
  text-align: center;
}

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }
.mb-5 { margin-bottom: 3rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }
.mt-5 { margin-top: 3rem; }

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}
</style>