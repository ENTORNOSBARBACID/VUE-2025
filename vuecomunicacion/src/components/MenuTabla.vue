<template>
  <div class="main-nav">
    <router-link v-for="n in aleatorio" :key="n" :to="'/tabla/'+ n">Tabla de {{ n }}</router-link>
  </div>
</template>

<script>
export default {
    name:"MenuTabla",
    data(){
        return{
            aleatorio:[]
        }
    },
    mounted(){
        for(var i=0; i<5; i++){
            var n=parseInt(Math.random()*100)+1;
            this.aleatorio.push(n)
        }
    }
}
</script>

<style>
.main-nav {
  display: flex; /* Usamos Flexbox para alinear los enlaces */
  justify-content: center; /* Centra los items en la barra */
  align-items: center;
  background-color: #2c3e50; /* Un fondo azul-gris oscuro y apagado */
  padding: 1rem; /* Espaciado interno */
  border-radius: 12px; /* Esquinas redondeadas modernas */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra sutil para "elevarlo" */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Estilo base de cada enlace (router-link se convierte en <a>) */
.main-nav a {
  color: #bdc3c7; /* Texto en gris claro apagado */
  text-decoration: none; /* Quitamos el subrayado feo */
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.5rem; /* El espaciado que reemplaza a los "|" */
  margin: 0 0.25rem;
  border-radius: 8px; /* Redondeo para cada "botón" */
  position: relative; /* Necesario para el efecto dinámico de la línea */
  
  /* La transición clave para el efecto dinámico */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* --- EFECTOS DINÁMICOS --- */

/* 1. Efecto al pasar el ratón (hover) */
.main-nav a:hover {
  color: #ffffff; /* El texto se vuelve blanco brillante */
  transform: translateY(-3px); /* El botón "salta" ligeramente */
  background-color: rgba(74, 144, 226, 0.1); /* Fondo azulado muy sutil */
}

/* 2. Línea inferior animada */
.main-nav a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 8px; /* Posición de la línea, dentro del padding */
  width: 0; /* Empieza sin ancho */
  height: 2px;
  background-color: #4A90E2; /* Color de acento (azul apagado) */
  transform: translateX(-50%);
  transition: width 0.3s ease-out; /* Animación solo del ancho */
}

.main-nav a:hover::after {
  width: 50%; /* La línea crece al 50% en hover */
}

/* 3. Estilo para el enlace ACTIVO (la ruta actual) */
/* Vue Router usa esta clase por defecto */
.main-nav a.router-link-exact-active {
  color: #4A90E2; /* Color de acento principal */
  font-weight: 700; /* Más grueso para destacar que está activo */
  transform: translateY(0); /* Anulamos el salto del hover */
  background-color: transparent; /* Sin fondo sutil */
}

/* La línea inferior se queda fija y completa en el link activo */
.main-nav a.router-link-exact-active::after {
  width: 50%; /* Mantenemos la línea visible */
}

</style>