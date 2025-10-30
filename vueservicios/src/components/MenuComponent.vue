<template>
  <div class="elegant-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/customer">Customer</router-link>
    <router-link to="/empleados">Empleados</router-link>
  </div>
</template>

<script>
export default {
  // Tu lógica de componente
}
</script>

<style scoped>
/* Una paleta de colores más oscura y "premium":
  - Fondo: Un gris carbón muy oscuro.
  - Texto: Un gris-azulado muy pálido.
  - Acento: Un azul "hielo" o "eléctrico" pálido.
*/

/* Contenedor principal del menú */
.elegant-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Para que sea responsive en móviles */
  
  background-color: #1a202c; /* Fondo carbón oscuro */
  padding: 1.25rem 1rem; /* Un poco más de espacio vertical */
  
  /* Sombra sutil para un efecto "flotante" */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  
  /* Bordes suaves */
  border: 1px solid #2d3748; /* Borde muy sutil */
  border-radius: 12px;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Estilo de cada enlace */
.elegant-nav a {
  color: #A0AEC0; /* Texto gris-azulado pálido */
  text-decoration: none;
  font-size: 1.05rem; /* Ligeramente más grande */
  font-weight: 500;
  
  padding: 0.75rem 1.5rem;
  margin: 0.25rem 0.5rem; /* Margen para espaciado y responsive */
  border-radius: 8px; /* Redondeo para el "brillo" */
  position: relative; /* Para la animación */
  
  /* La transición clave para el efecto dinámico */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* --- EFECTOS DINÁMICOS Y ELEGANTES --- */

/* 1. Efecto al pasar el ratón (hover) */
.elegant-nav a:hover {
  color: #E2E8F0; /* El texto se vuelve más blanco */
  transform: translateY(-3px); /* Se eleva sutilmente */
  
  /* El "brillo" elegante (glow) */
  background-color: rgba(144, 205, 244, 0.05); /* Un brillo azul-hielo muy sutil */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra de elevación */
}

/* 2. Estilo para el enlace ACTIVO (la ruta actual) */
.elegant-nav a.router-link-exact-active {
  color: #90CDF4; /* Color de acento (azul hielo) */
  font-weight: 600; /* Más destacado */
  
  /* Mantenemos el "brillo" más intenso */
  background-color: rgba(144, 205, 244, 0.1); 
  
  /* Resetea la animación para que no "salte" */
  transform: translateY(0);
  box-shadow: none;
}

/* Opcional: un punto sutil en el enlace activo */
.elegant-nav a.router-link-exact-active::after {
  content: '•';
  font-size: 1.5rem;
  line-height: 0;
  color: #90CDF4;
  position: absolute;
  bottom: 10px; /* Ajusta la posición del punto */
  left: 50%;
  transform: translateX(-50%);
}

</style>