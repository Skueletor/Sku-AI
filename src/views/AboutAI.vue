<template>
  <div class="about">
    <div class="container">
      <h1>Acerca de AICall</h1>
      <div class="about-content">
        <div class="about-text">
          <p>AICall es una plataforma innovadora que permite a los usuarios interactuar con inteligencia artificial avanzada a través de una interfaz de llamada intuitiva y moderna.</p>

          <h2>Nuestra Misión</h2>
          <p>Nuestra misión es hacer que la tecnología de IA sea accesible para todos, proporcionando una forma natural y conversacional de interactuar con sistemas inteligentes.</p>

          <h2>Tecnología</h2>
          <p>Utilizamos los modelos de IA más avanzados para proporcionar respuestas precisas y contextuales a tus preguntas. Nuestra interfaz está diseñada para ser intuitiva y fácil de usar, permitiéndote concentrarte en la conversación sin distracciones técnicas.</p>

          <h2>Privacidad y Seguridad</h2>
          <p>En AICall, valoramos tu privacidad. Todas las conversaciones están encriptadas y protegidas. No almacenamos tus conversaciones más allá de lo necesario para mejorar nuestro servicio.</p>
        </div>

        <div class="about-image">
          <img src="/placeholder.svg?height=400&width=400" alt="AICall Team" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutAI'
}
</script>

<style lang="scss" scoped>
.about {
  padding: 4rem 0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--dark-color);
  }

  &-content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &-text {
    h2 {
      font-size: 1.8rem;
      margin: 1.5rem 0 1rem;
      color: var(--dark-color);
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      line-height: 1.7;
    }
  }

  &-image {
    img {
      width: 100%;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }
  }
}
</style>
