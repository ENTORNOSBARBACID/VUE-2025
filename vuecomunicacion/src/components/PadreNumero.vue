<template>
  <h1>Numeros Padre</h1>
  <p >La suma es: {{ numeroTotal }}</p>
  <button @click="generarRandom">Generar numero random</button>
  <div v-for="hijo in hijos" :key="hijo">
    <HijoNumero :numero="hijo" v-on:sumar="sumarNumeroHijo"></HijoNumero>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';
export default {

    name:"PadreNumero",
    components:{
        HijoNumero
    },
    data(){
        return{
            numeroTotal:0,
            hijos:[]
        }
    },
    methods:{
        generarRandom(){
            var random=parseInt(Math.random()*100)+1;

            this.hijos.push(random);
        },
        sumarNumeroHijo(numero){
            this.numeroTotal+=numero;
        }
    }


}
</script>

<style>

</style>