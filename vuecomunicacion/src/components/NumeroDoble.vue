<template>
  <h1>Numero doble: </h1>
  {{ mensaje }}<hr/>
    <p>{{ doble }}</p>
<button @click="redirectToHome()">Volver a home</button>
  </template>

<script>
export default {
    name:"NumeroDoble",
    mounted(){
        console.log("Param: "+this.$route.params.num);
        let numero=this.$route.params.num;
        if(!numero){
            this.mensaje="Sin parametros en la ruta"
        }else{
            this.mensaje="Parametro recibido: "+numero
            this.doble= numero*2
        }
    },
    data(){
        return{
            mensaje:"",
            doble:0
        }
    },
    watch:{
        '$route.params.num'(nextVal, oldVal){
        if(nextVal!=oldVal){
            this.mensaje="Esto ha cambiado: "+this.$route.params.num;
            this.doble=Number(this.$route.params.num)*2
            console.log("Nuevo: "+nextVal+" antiguo:"+oldVal)
        }
        }
        
    },
    methods:{
        redirectToHome(){
        this.$router.push("/")
        }
    }
}
</script>

<style>

</style>