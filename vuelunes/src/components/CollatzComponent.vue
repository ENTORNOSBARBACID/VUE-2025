<template>
  <h1>Collatz</h1>
  <label>Introduce un numero</label>
  <input type="number" v-model="numero" @input="deshabilitar">
  <button @click="habilitar">Generar Collatz</button>
  <div v-if="stand">
    <h4 v-html="$filters.collatz(numero)"></h4>
  </div>
</template>

<script>
export default {
    name:"CollatzComponent",
    methods:{
        habilitar(){
            this.stand=true;
        },
        deshabilitar(){
            this.stand=false
        }
    },
    data(){
        return{
            numero:0,
            stand:false
        }
    }

}
</script>

<style>

</style>