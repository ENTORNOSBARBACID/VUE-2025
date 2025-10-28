<template>
<h1>Seleccion multiple</h1>
<!-- <select multiple size="8" v-model="elementoSeleccionado" @input="esconderSeleccion">
    <option v-for="e in elementos" :key="e" :value="e">{{e}}</option>
</select> -->

<VueMultiselect
      v-model="elementoSeleccionado"
      :options="elementos"
      :multiple="true"
      :close-on-select="true"
      :clear-on-select="true"
    >
    </VueMultiselect>

    <button @click="mostrar">Muestra elementos</button>

    <div >
        <h2 v-for="e in elementoBoton" :key="e">
            {{ e }}
        </h2>
    </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect';
export default {

    name:"SeleccionMultiple",
    components: {
    VueMultiselect
  },
    data(){
        return{
            elementos: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Elemento 6", "Elemento 7", "Elemento 8"],
            elementoSeleccionado:null,
            elementoBoton:null
        }
    },
    methods:{
        mostrar(){
            this.elementoBoton=this.elementoSeleccionado
        }
    }


}
</script>

<style>
@import 'vue-multiselect/dist/vue-multiselect.css';

pre {
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 10px;
}

</style>