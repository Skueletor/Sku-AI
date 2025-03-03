<template>
  <div class="ai-call">
    <div class="container">
      <transition name="fade" mode="out-in">
        <div v-if="!callStarted && !showConfirmation" class="call-intro glass-card" key="intro">
          <h1 class="title">Llamada con Sku-AI</h1>
          <p class="description">Estás a punto de iniciar una conversación con nuestra IA avanzada. Esta experiencia te permitirá interactuar de forma natural y obtener respuestas inteligentes a tus preguntas.</p>
          <button @click="showConfirmDialog" class="btn btn-primary pulse-animation">
            Iniciar Llamada
            <span class="icon-wrapper">
              <PhoneCall class="icon" />
            </span>
          </button>
        </div>
        
        <confirm-dialog 
          v-else-if="showConfirmation"
          @confirm="startCall" 
          @cancel="cancelCall"
          key="confirm"
        />
        
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
import { PhoneCall } from 'lucide-vue-next'

export default defineComponent({
  name: 'AICall',
  components: {
    ConfirmDialog,
    CallInterface,
    PhoneCall
  },
  data() {
    return {
      showConfirmation: false,
      callStarted: false
    }
  },
  methods: {
    showConfirmDialog() {
      this.showConfirmation = true
    },
    startCall() {
      this.showConfirmation = false
      this.callStarted = true
    },
    cancelCall() {
      this.showConfirmation = false
    },
    endCall() {
      this.callStarted = false
    }
  }
})
</script>

<style lang="scss" scoped>
.ai-call {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 4rem 0;
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
    animation: gradientShift 15s ease-in-out infinite alternate;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.call-intro {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
  }
  
  .title {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(to right, #f8fafc, #22d3ee, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .description {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }
  
  .btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      
      .icon-wrapper {
        transform: translateX(5px);
      }
    }
    
    .icon-wrapper {
      display: inline-flex;
      transition: transform 0.3s ease;
    }
    
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (prefers-color-scheme: dark) {
  .call-intro {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 768px) {
  .ai-call {
    padding: 2rem 0;
  }
  
  .call-intro {
    padding: 2rem 1.5rem;
  }
}
</style>