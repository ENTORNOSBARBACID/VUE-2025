<template>
  <h3>Numero hijo: {{ numero }}</h3><button @click="sumarNumero">Sumar numero</button>
</template>

<script>
export default {

    name:"HijoNumero",
    props:["numero"],
    methods:{
        sumarNumero(){
            this.$emit("sumar", this.numero)
        }
    }
}
</script>

<style>

</style>