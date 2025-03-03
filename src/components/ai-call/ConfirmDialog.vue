<!-- eslint-disable -->

<template>
  <div class="confirm-dialog glass-card">
    <div class="confirm-content">
      <h2>¿Estás seguro?</h2>
      <p>Estás a punto de iniciar una llamada con nuestra IA. Esta experiencia te permitirá interactuar con tecnología de vanguardia.</p>
      
      <div class="confirm-info glass-card">
        <h3>¿Qué esperar?</h3>
        <ul>
          <li>Respuestas inteligentes y contextuales</li>
          <li>Interfaz de conversación natural</li>
          <li>Asistencia en tiempo real</li>
        </ul>
      </div>
      
      <div class="confirm-buttons">
        <button @click="$emit('cancel')" class="btn btn-outline">Cancelar</button>
        <button @click="$emit('confirm')" class="btn btn-primary">Continuar</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ConfirmDialog'
}
</script>

<style lang="scss" scoped>
.confirm-dialog {
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.confirm-content {
  padding: 2rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.7;
  }
}

.confirm-info {
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: rgba(15, 23, 42, 0.5);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      color: var(--text-secondary);
      
      &::marker {
        color: var(--accent-color);
      }
    }
  }
}

.confirm-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  
  .btn {
    padding: 0.8rem 1.8rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .confirm-content {
    padding: 1.5rem;
  }
  
  .confirm-buttons {
    flex-direction: column-reverse;
    gap: 0.8rem;
    
    .btn {
      width: 100%;
    }
  }
}
</style>