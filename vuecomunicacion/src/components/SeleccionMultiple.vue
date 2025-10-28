<template>
  <div class="super-cargado-container">
    <h1 class="titulo-animado">¡Selección Múltiple EXTREMA!</h1>

    <div class="widget-section">
      <div class="card-efecto">
        <h3 class="card-titulo">Tus Opciones Aquí</h3>
        <VueMultiselect
          v-model="elementoSeleccionado"
          :options="elementos"
          :multiple="true"
          :close-on-select="true"
          :clear-on-select="true"
          placeholder="Selecciona cosas del universo..."
          class="multiselect-personalizado"
        >
          <template #option="{ option }">
            <span class="multiselect-option-item">{{ option }} ✨</span>
          </template>
        </VueMultiselect>

        <button @click="mostrar" class="boton-brillante">
          🚀 Mostrar Elementos Seleccionados 🚀
        </button>

        <div v-if="elementoBoton && elementoBoton.length > 0" class="resultados-panel">
          <h3 class="resultados-titulo">Elementos Confirmados:</h3>
          <div class="resultado-lista">
            <div v-for="e in elementoBoton" :key="e" class="elemento-mostrado">
              <span class="icono-lista">✅</span> {{ e }}
            </div>
          </div>
        </div>
        <div v-else class="mensaje-vacio">
          🤔 Esperando tu selección...
        </div>
      </div>

      <div class="card-efecto card-extra">
        <div class="spinning-box"></div>
        <p class="parrafo-distorsionado">¡Un párrafo que se mueve sin parar! <span>Texto importante.</span></p>
        <div class="gradient-line"></div>
      </div>

      <div class="card-efecto card-extra-2">
        <div class="pulse-circle"></div>
        <p class="parrafo-distorsionado">
          Más texto con efectos y colores. ¡No te lo pierdas!
          <a href="#" class="enlace-loco">Haz clic aquí!</a>
        </p>
        <div class="bouncing-square"></div>
      </div>
    </div>

    <div class="footer-cargado">
      <span class="footer-texto">¡Gracias por la sobrecarga!</span>
      <div class="loading-bar"></div>
    </div>

    <div class="background-animado"></div>
    <div class="estrella-fugaz estrella-1"></div>
    <div class="estrella-fugaz estrella-2"></div>

  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect';
export default {
  name: "SeleccionMultiple",
  components: {
    VueMultiselect
  },
  data() {
    return {
      elementos: [
        "Elemento 1 🌟", "Elemento 2 🚀", "Elemento 3 💡", "Elemento 4 🌀",
        "Elemento 5 🔥", "Elemento 6 🌈", "Elemento 7 🧩", "Elemento 8 👽",
        "Opción Extra A", "Opción Extra B", "Opción Extra C"
      ],
      // Inicializado como un array vacío para multiple
      elementoSeleccionado: [],
      elementoBoton: [] // También como array para mostrar correctamente
    }
  },
  methods: {
    mostrar() {
      // Usamos una copia para que al seleccionar no se actualice instantáneamente,
      // sino solo al hacer clic en el botón.
      this.elementoBoton = [...this.elementoSeleccionado];
    }
  }
}
</script>

<style>
/* Importa los estilos de vue-multiselect */
@import 'vue-multiselect/dist/vue-multiselect.css';

/* Estilos para el background y animaciones generales */
body {
  margin: 0;
  overflow-x: hidden; /* Evita barras de desplazamiento horizontal por animaciones */
  background: linear-gradient(135deg, #1a0a33 0%, #000000 100%);
  color: #e0f2f7;
  font-family: 'Press Start 2P', cursive; /* Fuente retro */
  min-height: 100vh;
  position: relative;
  z-index: 1; /* Asegura que el contenido esté por encima del fondo */
}

/* Animación de fondo */
@keyframes background-pan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.super-cargado-container {
  padding: 30px;
  max-width: 1200px;
  margin: 20px auto;
  position: relative;
  z-index: 10; /* Asegura que el contenido está sobre las animaciones de fondo */
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(102, 255, 255, 0.5), inset 0 0 20px rgba(102, 255, 255, 0.3);
  overflow: hidden; /* Para contener las animaciones internas */
  animation: border-glow 3s infinite alternate;
}

@keyframes border-glow {
  0% { border: 5px solid #00f2ff; }
  100% { border: 5px solid #ff00ea; }
}

/* Título Animado */
.titulo-animado {
  font-size: 3.5em;
  text-align: center;
  margin-bottom: 40px;
  color: #ffeb3b;
  text-shadow: 0 0 10px #ff00cc, 0 0 20px #00eaff;
  animation: glitch 1s infinite;
  font-family: 'Bungee Shade', cursive; /* Otra fuente llamativa */
}

@keyframes glitch {
  0% { transform: translate(0); text-shadow: 0 0 10px #ff00cc, 0 0 20px #00eaff; }
  20% { transform: translate(-2px, 2px); text-shadow: 0 0 10px #00eaff, 0 0 20px #ff00cc; }
  40% { transform: translate(-2px, -2px); text-shadow: 0 0 10px #ff00cc, 0 0 20px #00eaff; }
  60% { transform: translate(2px, 2px); text-shadow: 0 0 10px #00eaff, 0 0 20px #ff00cc; }
  80% { transform: translate(2px, -2px); text-shadow: 0 0 10px #ff00cc, 0 0 20px #00eaff; }
  100% { transform: translate(0); text-shadow: 0 0 10px #ff00cc, 0 0 20px #00eaff; }
}

/* Sección de Widgets */
.widget-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.card-efecto {
  background: linear-gradient(45deg, #1c0f4f, #4a0f6a);
  border: 3px solid;
  border-image: linear-gradient(45deg, #00f2ff, #ff00ea) 1;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 0 30px rgba(255, 0, 234, 0.4), inset 0 0 15px rgba(0, 242, 255, 0.3);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  animation: pulse-shadow 2s infinite alternate;
}

@keyframes pulse-shadow {
  0% { box-shadow: 0 0 30px rgba(255, 0, 234, 0.4); }
  100% { box-shadow: 0 0 50px rgba(0, 242, 255, 0.6); }
}

.card-efecto:hover {
  transform: scale(1.03) rotateZ(1deg);
  box-shadow: 0 0 60px rgba(255, 0, 234, 0.8), inset 0 0 30px rgba(0, 242, 255, 0.6);
}

.card-titulo {
  color: #00ff99;
  text-align: center;
  font-size: 1.8em;
  margin-bottom: 25px;
  text-shadow: 0 0 8px #00ff99;
  font-family: 'Orbitron', sans-serif; /* Fuente futurista */
}

/* Estilos personalizados para VueMultiselect */
.multiselect-personalizado {
  font-family: 'Arial', sans-serif; /* Volvemos a una fuente legible */
  --ms-bg: #22004d;
  --ms-bg-open: #3b007a;
  --ms-border-color: #00f2ff;
  --ms-tag-bg: #e91e63;
  --ms-tag-color: #ffffff;
  --ms-option-bg-pointed: #673ab7;
  --ms-option-bg-selected: #f44336;
  --ms-option-bg-selected-pointed: #d50000;
  --ms-caret-color: #00f2ff;
  --ms-search-color: #ffffff;
  --ms-spinner-color: #00f2ff;
  --ms-ring-color: #e0f2f7;
}

.multiselect__tag {
  background: linear-gradient(45deg, #e91e63, #ff00ea) !important;
  border-color: #ff00ea !important;
  color: #fff !important;
  font-weight: bold;
  animation: tag-pop 0.5s ease-out;
}
@keyframes tag-pop {
  0% { transform: scale(0); opacity: 0; }
  80% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}


.multiselect__option--highlight {
  background: #673ab7 !important;
  color: #ffffff !important;
}

.multiselect__option--selected {
  background: #f44336 !important;
  color: #ffffff !important;
  font-weight: bold;
}

.multiselect__content-wrapper {
  border-radius: 8px;
  border: 2px solid #00f2ff;
  box-shadow: 0 10px 30px rgba(0, 242, 255, 0.4);
}

.multiselect-option-item {
  font-weight: bold;
  color: #e0f2f7;
}


/* Botón Brillante */
.boton-brillante {
  display: block;
  width: 90%;
  padding: 15px 20px;
  margin: 30px auto 20px auto;
  background: linear-gradient(90deg, #ff00e5 0%, #00f2ff 100%);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(255, 0, 229, 0.6), 0 0 40px rgba(0, 242, 255, 0.4);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: flash-border 1.5s infinite alternate;
}

@keyframes flash-border {
  0% { border: 3px solid #ff00e5; }
  100% { border: 3px solid #00f2ff; }
}

.boton-brillante:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 0 0 30px rgba(255, 0, 229, 0.8), 0 0 60px rgba(0, 242, 255, 0.6);
}

.boton-brillante:active {
  transform: scale(0.98);
  box-shadow: 0 0 10px rgba(255, 0, 229, 0.3);
}

/* Resultados */
.resultados-panel {
  background: rgba(0, 0, 0, 0.5);
  border: 2px dashed #00ff99;
  border-radius: 10px;
  padding: 20px;
  margin-top: 25px;
  box-shadow: inset 0 0 15px rgba(0, 255, 153, 0.5);
  animation: fade-in-up 0.8s ease-out;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.resultados-titulo {
  color: #00ff99;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 15px;
  text-shadow: 0 0 5px #00ff99;
}

.resultado-lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.elemento-mostrado {
  background: #3f51b5;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.1em;
  border: 1px solid #1a237e;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  animation: pop-element 0.4s ease-out forwards;
}

@keyframes pop-element {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}


.icono-lista {
  margin-right: 5px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}


.mensaje-vacio {
  text-align: center;
  color: #ffc107;
  font-style: italic;
  margin-top: 20px;
  animation: blink-text 2s infinite steps(1);
}

@keyframes blink-text {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Estilos para los elementos extra */
.card-extra {
  grid-column: span 1;
}
.card-extra-2 {
  grid-column: span 1;
}


/* Spinning Box */
.spinning-box {
  width: 50px;
  height: 50px;
  background-image: linear-gradient(45deg, #f44336, #ff9800);
  margin: 20px auto;
  border-radius: 10px;
  animation: spin 3s linear infinite, glow 1.5s infinite alternate;
}

@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

@keyframes glow {
  0% { box-shadow: 0 0 10px #f44336; }
  100% { box-shadow: 0 0 20px #ff9800, 0 0 30px #f44336; }
}

/* Párrafo Distorsionado */
.parrafo-distorsionado {
  font-family: 'Comic Sans MS', cursive; /* Una fuente que evoca el caos */
  color: #8bc34a;
  text-align: center;
  font-size: 1.3em;
  animation: wave-text 4s infinite alternate;
  margin: 15px 0;
  text-shadow: 2px 2px #4caf50;
}

@keyframes wave-text {
  0% { transform: skewX(0deg) scale(1); }
  25% { transform: skewX(-5deg) scale(1.02); }
  50% { transform: skewX(0deg) scale(1); }
  75% { transform: skewX(5deg) scale(1.02); }
  100% { transform: skewX(0deg) scale(1); }
}

.parrafo-distorsionado span {
  color: #ffeb3b;
  font-weight: bold;
  animation: color-cycle 3s infinite linear;
}

@keyframes color-cycle {
  0% { color: #ffeb3b; }
  33% { color: #9c27b0; }
  66% { color: #00bcd4; }
  100% { color: #ffeb3b; }
}

/* Línea de Gradiente */
.gradient-line {
  height: 5px;
  background: linear-gradient(90deg, #ff00cc 0%, #00f2ff 50%, #ff00cc 100%);
  margin: 20px 0;
  border-radius: 2px;
  animation: line-flow 2s infinite linear;
}

@keyframes line-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Círculo Pulsante */
.pulse-circle {
  width: 60px;
  height: 60px;
  background-color: #f44336;
  border-radius: 50%;
  margin: 20px auto;
  position: relative;
  animation: pulse 1.5s infinite ease-out;
}

@keyframes pulse {
  0% { transform: scale(0.8); opacity: 0.7; box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7); }
  70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 20px rgba(244, 67, 54, 0); }
  100% { transform: scale(0.8); opacity: 0.7; box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); }
}

/* Enlace Loco */
.enlace-loco {
  color: #00bcd4;
  text-decoration: none;
  font-weight: bold;
  animation: wiggle 0.8s infinite;
  display: inline-block;
  text-shadow: 1px 1px 3px rgba(0, 188, 212, 0.7);
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(5deg); }
}

.enlace-loco:hover {
  color: #ffeb3b;
  text-decoration: underline;
  animation: none; /* Detiene el wiggle al pasar el mouse */
}

/* Cuadrado Saltarin */
.bouncing-square {
  width: 40px;
  height: 40px;
  background-color: #9c27b0;
  margin: 20px auto;
  border-radius: 5px;
  animation: bounce-square 2s infinite ease-in-out;
}

@keyframes bounce-square {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(45deg); }
  50% { transform: translateY(0) rotate(90deg); }
  75% { transform: translateY(-10px) rotate(135deg); }
}

/* Footer Cargado */
.footer-cargado {
  text-align: center;
  padding: 25px;
  margin-top: 50px;
  background: linear-gradient(90deg, #21003d, #000000);
  border-top: 3px dashed #ff00ea;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.footer-texto {
  font-size: 1.5em;
  font-weight: bold;
  color: #ffeb3b;
  text-shadow: 0 0 8px #ffeb3b;
  animation: text-pop-in 1.5s ease-out forwards;
}

@keyframes text-pop-in {
  0% { transform: scale(0.5); opacity: 0; }
  80% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}


/* Barra de Carga */
.loading-bar {
  height: 10px;
  width: 80%;
  margin: 15px auto 0 auto;
  background: #444;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.loading-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #ff00ea, #00f2ff);
  animation: loading-fill 4s infinite linear;
}

@keyframes loading-fill {
  0% { width: 0%; }
  100% { width: 100%; }
}

/* Animaciones de fondo */
.background-animado {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top left, #5d0f66, transparent),
              radial-gradient(circle at bottom right, #0a3d62, transparent);
  background-size: 200% 200%;
  animation: background-pan 15s infinite alternate;
  opacity: 0.7;
  z-index: 0;
}

.estrella-fugaz {
  position: fixed;
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 10px #ffffff;
  animation: shoot-star 5s linear infinite;
  opacity: 0;
  z-index: 5;
}

.estrella-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 8s;
}

.estrella-2 {
  top: 30%;
  left: 70%;
  animation-delay: 4s;
  animation-duration: 7s;
}

@keyframes shoot-star {
  0% {
    transform: translate(-100vw, -100vh) rotate(-45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(100vw, 100vh) rotate(-45deg);
    opacity: 0;
  }
}

/* Importar fuentes de Google Fonts (añadir al index.html o tu archivo principal) */
/* <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Orbitron:wght@700&family=Press+Start+2P&display=swap" rel="stylesheet"> */
</style>